import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Project} from '../entities/project';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectRepository {

    constructor(private http: Http) { }

    getProjects() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = 'http://localhost:53677/igeoservice/project/all';
        return this.http.get(url, options)
            .map(response => <Project[]>response.json());
    }
}