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

exports.up = function(db, callback) {
  db.addForeignKey('employees', 'employee_types', 'employees_employee_types_id_foreign', {
    'type': 'id'
  }, {
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT'
  }, callback);

  db.addForeignKey('employees', 'shops', 'employees_shops_id_foreign', {
    'shop_id': 'id'
  }, {
    onDelete: 'CASCADE',
    onUpdate: 'RESTRICT'
  }, callback);

  return null;
};

exports.down = function(db, callback) {
  db.removeForeignKey('employees', 'shops', callback);
  db.removeForeignKey('employees', 'employee_types', callback);
  
  return null;
};

exports._meta = {
  "version": 1
};
