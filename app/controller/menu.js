const { Controller } = require("egg");

const { defaultMenuId } = require("../env/index");

let menu = require("../../external/down/menu/menu.json");
let page = require("../../external/down/page/page.json");
const { resMiddleWare } = require("../utils/util");

let recursiveMenuId = function (arr) {
  arr = arr.map((e) => {
    e.id = Number((Math.random() * 1000000).toFixed(0));
    if (e.children) {
      e.children = recursiveMenuId(e.children);
    }
    return e;
  });
  return arr;
};

menu = recursiveMenuId(menu);

page = page.map((e) => {
  let levelCodes = e.levelCode.split(",").filter((e) => e);
  let pageId = levelCodes[levelCodes.length - 1];
  return { ...e, pageId };
});

function getListFromTree(arr, pid, id = "") {
  let res = [];
  arr.forEach((element) => {
    let targetPage = page.find((e) => e.path === element.page);
    if (id) {
      element.id = id;
    }
    res.push({
      pageId: targetPage?.pageId || "",
      ...element,
      parentId: pid,
    });
    if (element.children) {
      let childrenRes = getListFromTree(element.children, element.id);
      res = [...res, ...childrenRes];
    }
  });
  res.forEach((e) => {
    delete e.children;
  });
  return res;
}

class MenuController extends Controller {
  // 菜单
  async menu() {
    const { ctx } = this;
    let m = getListFromTree(menu, defaultMenuId, defaultMenuId);
    m.shift();
    ctx.body = resMiddleWare(m);
  }
}

module.exports = MenuController;
