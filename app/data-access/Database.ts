// database.ts

// normally these references are unnecessary, but you have 
// to download all the ts for third libraries 
// you normally place them in a 'typings' folder 
// or choose another name for the folder, irrelevant,
// then the IDE should recognize them (ts files) easily.

/// <reference path="../../typings/index.d.ts" />

import * as Knex from 'knex';
import * as Bookshelf from 'bookshelf';

export module Database {
    class Config {
        private static _knex: Knex = Knex({
            client: 'sqlite3',
            connection: {
                host: '127.0.0.1',
                user: 'root',
                password: '',
                database: 'igeoDb.db',
                charset: 'utf8'
            }
        });

        static _bookshelf: Bookshelf = Bookshelf(Config._knex);
    }

    export function bookshelf() {
        Config._bookshelf.plugin('registry');
        Config._bookshelf.plugin(['virtuals']);
        return Config._bookshelf;
    }
}

// Don't forget the export, that why you are getting that error
// export { Database }

