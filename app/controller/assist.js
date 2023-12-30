const { Controller } = require("egg");
const fs = require("fs");
const path = require("path");
const { token, host } = require("../env/index");
const { downloadFile, extractFile, resMiddleWare } = require("../utils/util");

class AssistController extends Controller {
  // 把组件爬下来
  async gatherComponents() {
    let res = await this.ctx.curl(
      host + "/api/component/components?$pageSize=200",
      {
        headers: {
          authorization: `bearer ${token}`,
        },
      }
    );

    fs.writeFileSync(`./external/componentsData/info.json`, String(res.data));
    let r = String(res.data);
    let arr = JSON.parse(r).data;
    for (let i = 0; i < arr.length; i++) {
      let e = arr[i];
      let comp = await downloadFile(this.ctx, e);
      fs.writeFileSync(`./external/componentsData/${e.name}.zip`, comp);
    }
    this.ctx.body = r;
  }

  // 组件接口
  async getComponents() {
    const { query } = this.ctx.request;
    const { names } = query;
    let nameArr = names.split(",");
    let result = [];
    for (let i = 0; i < nameArr.length; i++) {
      await extractFile(
        path.resolve(`./external/componentsData`, `${nameArr[i]}.zip`),
        path.resolve("./external/temp", nameArr[i])
      );
      let cssPath = path.resolve(
        "./external/temp",
        nameArr[i],
        "vue",
        "main.css"
      );
      let jsPath = path.resolve(
        "./external/temp",
        nameArr[i],
        "vue",
        "index.js"
      );
      let cssContent = fs.existsSync(cssPath) ? fs.readFileSync(cssPath) : "";
      let jsContent = fs.existsSync(jsPath) ? fs.readFileSync(jsPath) : "";
      result.push({
        cssContent: String(cssContent),
        jsContent: String(jsContent),
        name: nameArr[i],
        version: 1,
      });
    }

    this.ctx.body = resMiddleWare({ list: result });
  }
}

module.exports = AssistController;
