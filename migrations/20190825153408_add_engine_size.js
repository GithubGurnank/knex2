exports.up = function(knex, Promise) {
    return knex.schema.table('cars', function(t) {
        t.integer('engine_cc').notNull().defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('cars', function(t) {
        t.dropColumn('engine_cc');
    });
};

