function proxy(app) {
  app.get(/^\/$/, (req, res) => res.redirect('/processes'));
}

module.exports = proxy;
