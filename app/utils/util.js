const { token, host } = require("../env/index");
const path = require("path");
const fs = require("fs");
const extract = require("extract-zip");

const downloadFile = async function (ctx, param) {
  const { id, version, name } = param;
  let res = await ctx.curl(
    `${host}/api/component/components/${id}/download?version=${version}`,
    {
      headers: {
        authorization: `bearer ${token}`,
        Accept: "application/vnd.openxmlformats-officedocument",
        responseType: "blob",
      },
    }
  );
  return res.data;
};

const extractFile = async function (srcPath, targetPath) {
  await extract(srcPath, { dir: targetPath });
};

const resMiddleWare = function (res) {
  return { code: 200, data: res, success: true };
};

module.exports = {
  downloadFile,
  extractFile,
  resMiddleWare,
};
