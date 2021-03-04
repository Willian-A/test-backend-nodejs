module.exports.products = (application, req, res) => {
  const conn = application.config.dbConnection();
  const productsModel = new application.app.models.productsDAO(conn);

  productsModel.getProducts((err, result) => {
    if (result.length <= 0) {
      res.render("../views/products/products", {
        error: "No Products on Database",
      });
    } else {
      res.render("../views/products/products", {
        error: false,
        products: result,
      });
    }
  });
};

module.exports.product = (application, req, res) => {
  const conn = application.config.dbConnection();
  const productsModel = new application.app.models.productsDAO(conn);

  productsModel.getProduct(req.params.id, (err, result) => {
    if (result.length <= 0) {
      res.redirect("/products");
    } else {
      res.render("../views/products/product", { product: result });
    }
  });
};

module.exports.search = (application, req, res) => {
  const conn = application.config.dbConnection();
  const productsModel = new application.app.models.productsDAO(conn);

  productsModel.searchProducts(req.body.query, (err, result) => {
    if (result.length <= 0) {
      res.render("../views/products/products", {
        error: "No Products Where Found",
      });
    } else {
      res.render("../views/products/products", {
        error: false,
        products: result,
      });
    }
  });
};
