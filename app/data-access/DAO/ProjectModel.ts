/// <reference path="../../../typings/index.d.ts" />

import {Database} from '../Database';
import * as Bookshelf from 'bookshelf';

export class ProjectModel extends Database.Config.bookshelf.Model<ProjectModel>
{ 
    get tableName() { return 'Project'; }

    // strongly typed model properties linked to columns in table
    public get Id(): number {return this.get('Id');}
    public get Name(): string {return this.get('Name');}
    public get CreationDate(): Date {return this.get('CreationDate');}
    public get EditionDate(): Date {return this.get('EditionDate');}

    // posts(): Bookshelf.Collection<Post> {
    //     return this.hasMany(Post);
    // } 
}

// module.exports = Server.bookshelf.model('Blog', Blog);