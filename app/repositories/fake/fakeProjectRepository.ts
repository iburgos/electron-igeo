import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Project} from './app/entities/project';

@Injectable()
export class ProjectRepository {

    constructor(private http: Http) { }

    getProjects() {
        return this.http.get('app/repositories/fake/fakeprojectlist.json')
            .map(response => <Project[]>response.json());
    }
}