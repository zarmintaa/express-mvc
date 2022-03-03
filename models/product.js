const db = require("../util/database");

const Cart = require("./cart");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      "INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)",
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute("SELECT * FROM products");
    // db.execute(
    //   "SELECT * FROM products ORDER BY id ASC",
    //   [],
    //   (err, rows, fields) => {
    //     if (err) {
    //       return console.log(err);
    //     }
    //     const products = rows.map(row => {
    //       return new Product(row.id, row.title, row.imageUrl, row.description, row.price);
    //     });
    //     console.log(products);
    //   }
    // );
  }

  static findById(id) {
    return db.execute("SELECT * FROM products WHERE products.id = ?", [id]);
  }
};
