const db = require('../util/database')

module.exports = class User {
  constructor(id, phone) {
    this.id = id;
    this.phone = phone;
  }

  static fetchAll() {
    return db.query('SELECT * FROM users ORDER BY id ASC');
  }

  static fetchOne(id) {
    return db.query('SELECT * FROM users WHERE id = $1', [id]);
  }

  static post(phone) {
    return db.query('INSERT INTO users (phone) VALUES ($1)', [phone]);
  }

  static update(id, phone) {
    return db.query('UPDATE users SET phone = $1 WHERE id = $2', [phone, id]);
  }
  static delete(id) {
    return db.query('DELETE FROM users WHERE id = $1', [id]);
  }

}
