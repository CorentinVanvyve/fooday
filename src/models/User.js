const db = require('../util/database')

module.exports = class User {
  constructor(id, phone) {
    this.id = id;
    this.phone = phone;
  }

  static fetchAll() {
    return db.query('SELECT * FROM users ORDER BY id ASC');
  }

}
