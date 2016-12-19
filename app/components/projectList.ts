import {Component} from '@angular/core';
import {Project} from '../entities/project';
import {ProjectRepository} from '../repositories/projectRepository';
// import {ProjectRepository} from '../repositories/fake/fakeprojectRepository';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
    selector: 'project-list',
    templateUrl: '../app/templates/projectlist.html',
    directives: [],
    providers: [ProjectRepository, HTTP_PROVIDERS]
})

export class ProjectList {
    nullDate: String =  "0001-01-01T00:00:00";
    projects: Project[];

    constructor(private projectRepository: ProjectRepository) {

    }

    ngOnInit() {
        this.projectRepository.getProjects()
            .subscribe(data => this.projects = data);
    }

    loadProjects(){
        alert("Loading projects!");
    }
}