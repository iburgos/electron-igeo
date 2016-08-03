// database.ts
/// <reference path="<pathToKnexDefinetelyTypedFile>" />
// if you don't already have knex.d.ts
// https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/knex/knex.d.ts
/// <reference path="<pathToBookshelfDefinetelyTypedFile>" />
// if you don't already have bookshelf.d.ts
// https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/bookshelf/bookshelf.d.ts

// normally these references are unnecessary, but you have 
// to download all the ts for third libraries 
// you normally place them in a 'typings' folder 
// or choose another name for the folder, irrelevant,
// then the IDE should recognize them (ts files) easily.

import * as Knex from 'knex';
import * as Bookshelf from 'bookshelf';

module Database {
    class Config {
        private static _knex: Knex = Knex({
            client: 'mysql',
            connection: {
                host: '127.0.0.1',
                user: 'root',
                password: '',
                database: 'test',
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
export { Database }

// dao.ts
/// <reference path="../models/usermodel.ts" />
/// <reference path="../network/database.ts" />
import { Database } from './database';
module DAO {
    export class UserDAO {
        create(user: Model.User): Model.User { //Model.User is imported nicely
            var test = Database.bookshelf(); 
            // what's wrong with this ? 
            // Maybe the export and the import you forgot to add 
            return null;
        }
    }
}