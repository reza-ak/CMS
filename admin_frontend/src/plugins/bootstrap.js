import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js"
// Adding Bootstrap as a plugin (provide inject)

export default {
  install: (app) => {
    return app.provide("bootstrap", bootstrap)
  }
}