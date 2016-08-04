import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Project} from '../../entities/project';
import {Database} from '../Database';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectRepository {

    constructor(private http: Http) { }

    getProjects() {
        return this.http.get('./repositories/fake/fakeProjectList.json')
            .map(response => <Project[]>response.json().data);
    }
}