// Route for admin actions
module.exports = (application) => {
  // Route for Add a New Product Form
  application.get("/add_product", (req, res) => {
    application.app.controllers.admin.add_product_form(req, res);
  });

  // Route for executing the Add function on database
  application.post("/product/add", (req, res) => {
    application.app.controllers.admin.add_product(application, req, res);
  });

  // Route for Updating a Product Form
  application.get("/update_product/:id", (req, res) => {
    application.app.controllers.admin.update_product_form(
      application,
      req,
      res
    );
  });

  // Route for executing the Update function on database
  application.post("/product/update/:id", (req, res) => {
    application.app.controllers.admin.update_product(application, req, res);
  });

  // Route for removing product from database
  application.get("/delete_product/:id", (req, res) => {
    application.app.controllers.admin.delete_product(application, req, res);
  });
};
