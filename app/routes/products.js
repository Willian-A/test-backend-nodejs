// Products routes
module.exports = (application) => {
  // Route for fetching all products from Database
  application.get("/products", (req, res) => {
    application.app.controllers.products.products(application, req, res);
  });

  // Route for fetching only one product by its ID
  application.get("/product/:id", (req, res) => {
    application.app.controllers.products.product(application, req, res);
  });

  // Route for searching products by its category or title/name
  application.post("/search", (req, res) => {
    application.app.controllers.products.search(application, req, res);
  });
};
