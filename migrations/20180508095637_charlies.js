
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('charlies', (table) => {
    table.increments('id')
    table.string('name')
    table.string('image')
    table.string('mood')
    table.string('notes')
  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('charlies')
};
