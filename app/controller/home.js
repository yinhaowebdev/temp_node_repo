const { Controller } = require("egg");
const fs = require("fs");
const path = require("path");
const { defaultMenuId, afterLoginPageId } = require("../env/index");
const { resMiddleWare } = require("../utils/util");

class HomeController extends Controller {
  async pageViewJs() {
    const { ctx } = this;

    ctx.set("Content-Type", "application/javascript; charset=utf-8");

    const filePath = path.resolve("./external/dist/modules/page-view/index.js");

    ctx.body = fs.createReadStream(filePath);
  }

  async pageViewCss() {
    const { ctx } = this;
    ctx.set("Content-Type", "text/css");

    let s = fs.readFileSync("./external/dist/modules/page-view/main.css");
    ctx.body = s;
  }

  async theme() {
    const { ctx } = this;
    const themeData = require("../public/theme");
    themeData.defaultMenuId = defaultMenuId;
    ctx.body = resMiddleWare(themeData);
  }

  async portal() {
    const { ctx } = this;
    const p = require("../../external/down/portal/portals.json")[0];
    p.defaultMenuId = defaultMenuId;
    p.afterLoginPageId = afterLoginPageId;
    ctx.body = resMiddleWare(p);
  }

  async cdn() {
    const { ctx } = this;
    let { url } = ctx;
    url = url.substring(4);
    const file = fs.readFileSync("./external/cdn" + url);

    ctx.body = file;
  }

  // 暂时写死
  async components() {
    this.ctx.body = require("../../external/componentsData/info.json");
  }
}

module.exports = HomeController;
