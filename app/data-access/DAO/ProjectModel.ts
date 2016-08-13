/// <reference path="../../../typings/index.d.ts" />

import {Database} from '../Database';
import * as Bookshelf from 'bookshelf';

export class ProjectModel extends Database.Config.bookshelf.Model<ProjectModel>
{
    get tableName() { return 'Project'; }

    public get Id(): number { return this.get('Id'); }
    public get Name(): string { return this.get('Name'); }
    public get CreationDate(): Date { return this.get('CreationDate'); }
    public get EditionDate(): Date { return this.get('EditionDate'); }

    public GetAll() {
        console.log(this.fetchAll().toJSON());
        this.fetchAll().then(function(data){
            return data;
        });
    }

    // posts(): Bookshelf.Collection<Post> {
    //     return this.hasMany(Post);
    // } 
}

// module.exports = Server.bookshelf.model('Blog', Blog);