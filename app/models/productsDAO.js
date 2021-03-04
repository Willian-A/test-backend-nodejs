// Products Data Access Object/ Database functions for products
class ProductsDAO {
  constructor(conn) {
    this._conn = conn;
  }

  // Returns all products from database
  getProducts = (callback) => {
    this._conn.query("SELECT * FROM products", callback);
  };

  // Returns one product by its id
  getProduct = (id, callback) => {
    this._conn.query(
      "SELECT * FROM products WHERE id_product = ?",
      id,
      callback
    );
  };

  // Inserts a new product on database
  insertProduct = (values, callback) => {
    this._conn.query("INSERT INTO products SET ?", values, callback);
  };

  // Updates a product from database
  updateProduct = (values, id, callback) => {
    this._conn.query(
      "UPDATE products SET ? WHERE id_product = ?",
      [values, id],
      callback
    );
  };

  // Deletes a product from database
  deleteProduct = (id, callback) => {
    this._conn.query("DELETE FROM products WHERE id_product = ?", id, callback);
  };

  // Search products from database
  searchProducts = (query, callback) => {
    this._conn.query(
      "SELECT * FROM products WHERE (title LIKE ? or category LIKE ?)",
      [query, query],
      callback
    );
  };
}

module.exports = (app) => {
  return ProductsDAO;
};
