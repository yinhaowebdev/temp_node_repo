// 用来自动拉取云上导出的资源

let { token, host, projectId } = require("./app/env/index");
let axios = require("axios");
let fs = require("fs");
let process = require("child_process");
let unzip = require("unzipper");
const _axios = axios.create({
  headers: {
    Authorization: `bearer ${token}`,
    "Content-Type": "application/json",
  },
});

let time = new Date().getTime();
let count = 1;
let timer = null;

let exportUrl = `${host}/api/resource-tree/projects/${projectId}/export`;
let resultListUrl = `${host}/api/resource-tree/projects/process?$filter=type eq 0,status ne 0`;

function serverExport() {
  _axios
    .get(exportUrl)
    .then((res) => {
      getList();
    })
    .catch((e) => console.log(e));
}

function getList() {
  console.log("get list ... for the ", count++, " time");
  _axios
    .get(resultListUrl)
    .then((res) => {
      handleResultList(res.data.data.result);
    })
    .catch((e) => console.log(e));
}

function handleResultList(results) {
  let result = results.find((element) => {
    if (element.status !== 2) {
      if (new Date(element.createTime).getTime() > time - 60 * 1000) {
        console.log("Matched");
        return element;
      }
    }
    return false;
  });
  if (result) {
    // cancelTimeout
    clearInterval(timer);
    // downloadInfo unzip move
    handleFile(result.info, result.id);
  } else {
    setTimeout(() => {
      getList();
    }, 2000);
  }
}

function handleFile(url, id) {
  let name = url.split("/")[url.split("/").length - 1];
  console.log("start downloading...");
  process.execSync(`cd temp && echo pwd && curl -# -O ${host}/${url}`);
  console.log("finish");
  console.log("start unzip...");
  fs.createReadStream(`./temp/${name}`)
    .pipe(unzip.Extract({ path: "./temp" }))
    .on("close", () => {
      console.log("finish");
      process.execSync(`rm -rf ./external/down/*`);
      console.log("moving....");
      process.execSync(`cd temp && mv ./${id}/* ../external/down`);
      process.execSync(`rm -rf ./temp/*`);
      console.log("ok!");
    });
}

serverExport();
