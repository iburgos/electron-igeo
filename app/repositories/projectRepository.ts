import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Project} from '../entities/project';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectRepository{
    constructor(private http : Http){}
    getProjects(){
        return this.http.get('').map(response => <Project[]>response.json())
    }
}

bootstrap(ProjectRepository);