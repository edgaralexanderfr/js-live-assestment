'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('employees', {
    id: {
      type: 'bigint',
      primaryKey: true,
      autoIncrement: true
    },
    name: 'string',
    type: {
      type: 'bigint'
    },
    telephone: 'string',
    address: 'string',
    employmentDate: 'datetime',
    shop_id: 'bigint'
  })
};

exports.down = function(db) {
  return db.dropTable('employees');
};

exports._meta = {
  "version": 1
};
