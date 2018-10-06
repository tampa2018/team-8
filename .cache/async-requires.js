// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-project-jsx": () => import("/Users/TonyFaieta/team-8/src/templates/project.jsx" /* webpackChunkName: "component---src-templates-project-jsx" */),
  "component---cache-dev-404-page-js": () => import("/Users/TonyFaieta/team-8/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-jsx": () => import("/Users/TonyFaieta/team-8/src/pages/404.jsx" /* webpackChunkName: "component---src-pages-404-jsx" */),
  "component---src-pages-about-jsx": () => import("/Users/TonyFaieta/team-8/src/pages/about.jsx" /* webpackChunkName: "component---src-pages-about-jsx" */),
  "component---src-pages-contact-jsx": () => import("/Users/TonyFaieta/team-8/src/pages/contact.jsx" /* webpackChunkName: "component---src-pages-contact-jsx" */),
  "component---src-pages-index-jsx": () => import("/Users/TonyFaieta/team-8/src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */)
}

exports.data = () => import("/Users/TonyFaieta/team-8/.cache/data.json")

