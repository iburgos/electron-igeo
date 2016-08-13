import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Project} from '../../entities/project';
import {Database} from '../Database';
import 'rxjs/add/operator/map';
import {ProjectModel} from '../DAO/ProjectModel';

@Injectable()
export class ProjectRepository {
    projectModel: ProjectModel;
    constructor(private http: Http) { }

    getProjects() {
        return this.projectModel.GetAll();
    }

    // getProjects() {
    //     return this.http.get('./repositories/fake/fakeProjectList.json')
    //         .map(response => <Project[]>response.json().data);
    // }
}