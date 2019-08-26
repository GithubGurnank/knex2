exports.up = function(knex, Promise) {
    return knex.schema.table('cars', function(t) {
        t.timestamp('created_at')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('cars', function(t) {
        t.dropColumn('created_at');
    });
};

