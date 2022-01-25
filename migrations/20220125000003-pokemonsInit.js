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
    `CREATE TABLE pokemons(
      id          INT PRIMARY KEY,
      name        VARCHAR(80) NOT NULL,
      ptype       INT,
      stype       INT,
      "createdAt" TIMESTAMP WITH TIME ZONE,
      "updatedAt" TIMESTAMP WITH TIME ZONE,

      CONSTRAINT pokemons_pt_fkey FOREIGN KEY (ptype) REFERENCES ptypes (id),
      CONSTRAINT pokemons_st_fkey FOREIGN KEY (stype) REFERENCES stypes (id)
    );
  `,
    function (err) {
      if (err) return console.log(err);
      callback();
    }
  );
};

exports.down = function (db, callback) {
  db.runSql("DROP TABLE IF EXISTS pokemons", function (err) {
    if (err) return console.log(err);
    callback();
  });
};

exports._meta = {
  version: 1,
};
