const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/", "/impressum"],
    exact: true,
    component: "Impressum",
  },
  {
    path: ["/", "/datenschutz"],
    exact: true,
    component: "Datenschutz",
  },
  {
    path: ["/", "/customs"],
    exact: true,
    component: "Customs",
  },
  {
    path: ["/", "/importexport"],
    exact: true,
    component: "ImportExport",
  },
  {
    path: ["/", "/direct"],
    exact: true,
    component: "Direct",
  },
  {
    path: ["/", "/warehouse"],
    exact: true,
    component: "Warehouse",
  },
  {
    path: ["/", "/contact"],
    exact: true,
    component: "Contact",
  }
];

export default routes;
