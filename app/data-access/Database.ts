/// <reference path="../../typings/index.d.ts" />

import * as Knex from 'knex';
import * as Bookshelf from 'bookshelf';

module Database {
    export class Config {
        public static _knex: Knex = Knex({
            client: 'sqlite3',
            connection: {
                database: './igeoDb.db'
            }
        });

        public static bookshelf: Bookshelf = Bookshelf(Config._knex); 
    }

    function bookshelf(): Bookshelf {
        Config.bookshelf.plugin('registry');
        Config.bookshelf.plugin(['virtuals']);
        return Config.bookshelf;
    }

    function tables() {
        Config._knex.schema.createTable('Projects', function(table){
            table.increments();
            table.integer('Id');
            table.string('Name');
            table.dateTime('CreationDate');
            table.dateTime('EditionDate');
        });
    }
}

export { Database }

