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
  db.insert('employee_types', {
    name: 'Manager',
    salary: 10000
  });

  db.insert('employee_types', {
    name: 'Accountant',
    salary: 2500
  });

  db.insert('employee_types', {
    name: 'Clerk',
    salary: 2000
  });
  
  return null;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
