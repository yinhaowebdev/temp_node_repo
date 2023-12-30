/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  // router.get("/", controller.home.index);

  // router.get("/cdn/*", controller.home.cdn);

  // page-editor
  router.get("/modules/page-view/index.js", controller.home.pageViewJs);
  router.get("/modules/page-view/main.css", controller.home.pageViewCss);

  // theme
  router.get("/api/theme/themes/:id", controller.home.theme);

  // portal
  router.get("/api/portal/portals/default", controller.home.portal);
  router.get("/api/portal/portals/info", controller.home.portal);

  // datalink
  // pageData
  router.get("/api/page/published-pages", controller.page.page);
  // components

  router.get(
    "/api/component/components/content",
    controller.assist.getComponents
  );
  router.get("/api/component/components", controller.home.components);

  router.post("/api/menu/menus/user-menus", controller.menu.menu);

  router.get("/assist/gatherComponents", controller.assist.gatherComponents);
};
