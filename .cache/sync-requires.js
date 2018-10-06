// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-project-jsx": preferDefault(require("/Users/TonyFaieta/team-8/src/templates/project.jsx")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/TonyFaieta/team-8/.cache/dev-404-page.js")),
  "component---src-pages-404-jsx": preferDefault(require("/Users/TonyFaieta/team-8/src/pages/404.jsx")),
  "component---src-pages-about-jsx": preferDefault(require("/Users/TonyFaieta/team-8/src/pages/about.jsx")),
  "component---src-pages-contact-jsx": preferDefault(require("/Users/TonyFaieta/team-8/src/pages/contact.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/TonyFaieta/team-8/src/pages/index.jsx"))
}

