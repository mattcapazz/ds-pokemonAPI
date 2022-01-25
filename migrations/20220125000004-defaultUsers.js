"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.runSql(
    `INSERT INTO users(email, password, name, is_admin) VALUES (
    'admin@ipvc.pt', sha256('12456'), 'admin', TRUE
    );
  `,
    function (err) {
      if (err) return console.log(err);
      callback();
    }
  );
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  version: 1,
};
