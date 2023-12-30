const { Controller } = require("egg");

let page = require("../../external/down/page/page.json");
const { resMiddleWare } = require("../utils/util");
const lodash = require("lodash");

page = page.map((e) => {
  let levelCodes = e.levelCode.split(",").filter((e) => e);
  let pageId = levelCodes[levelCodes.length - 1];
  return { ...e, pageId };
});

class PageController extends Controller {
  async page() {
    const { ctx } = this;
    const { pageId, pagePath } = ctx.query;
    let p;
    if (pagePath) {
      p = page.find((e) => e.path == pagePath);
    } else {
      p = page.find((e) => e.pageId == pageId);
    }
    if (!p) {
      ctx.body = "";
      return;
    }
    p = lodash.cloneDeep(p);

    let countKV = p.pageData.countKV;
    let componentKV = [];
    for (let k in countKV) {
      componentKV.push(k);
    }
    p.pageData.componentKV = componentKV;
    p.pageData = JSON.stringify(p.pageData);
    ctx.body = resMiddleWare(p);
  }
}

module.exports = PageController;
