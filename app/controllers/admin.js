module.exports.add_product_form = (req, res) => {
  res.render("../views/admin/form_add_product");
};

module.exports.add_product = (application, req, res) => {
  const product = req.body;
  const conn = application.config.dbConnection();
  const productsDAO = new application.app.models.productsDAO(conn);

  productsDAO.insertProduct(product, () => {
    res.redirect("/products");
  });
};

module.exports.update_product_form = (application, req, res) => {
  const productID = req.params.id;
  const conn = application.config.dbConnection();
  const productsModel = new application.app.models.productsDAO(conn);

  productsModel.getProduct(productID, (err, result) => {
    if (result.length <= 0) {
      res.redirect("/products");
    } else {
      res.render("../views/admin/form_update_product", { product: result });
    }
  });
};

module.exports.update_product = (application, req, res) => {
  const product = req.body;
  const productID = req.params.id;
  const conn = application.config.dbConnection();
  const productsDAO = new application.app.models.productsDAO(conn);

  productsDAO.updateProduct(product, productID, () => {
    res.redirect("/products");
  });
};

module.exports.delete_product = (application, req, res) => {
  const productID = req.params.id;
  const conn = application.config.dbConnection();
  const productsDAO = new application.app.models.productsDAO(conn);

  productsDAO.deleteProduct(productID, () => {
    res.redirect("/products");
  });
};
