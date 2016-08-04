/// <reference path="../../typings/index.d.ts" />

import * as Knex from 'knex';
import * as Bookshelf from 'bookshelf';

module Database {
    export class Config {
        private static _knex: Knex = Knex({
            client: 'sqlite3',
            connection: {
                database: './igeoDb.db'
            }
        });

        static bookshelf: Bookshelf = Bookshelf(Config._knex); 
    }

    function bookshelf(): Bookshelf {
        Config.bookshelf.plugin('registry');
        // Config._bookshelf.plugin(['virtuals']);
        return Config.bookshelf;
    }
}

export { Database }

