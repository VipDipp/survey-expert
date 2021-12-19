const organizationCtrl = require("../controllers/organizationCtrl");

const routes = [
  { path: "/organization/insert", method: "post", func: organizationCtrl.insert },
  { path: "/organization/get/:id", method: "get", func: organizationCtrl.read },
  { path: "/organization/edit/", method: "put", func: organizationCtrl.update },
  { path: "/organization/remove/:id", method: "delete", func: organizationCtrl.delete },
  { path: "/organization/all", method: "get", func: organizationCtrl.selectAll },
];

module.exports = routes;
