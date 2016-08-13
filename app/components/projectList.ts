import {Component} from '@angular/core';
import {Project} from '../entities/project';
// import {ProjectRepository} from '../repositories/projectRepository';
import {ProjectRepository} from '../data-access/repositories/projectRepository';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
    selector: 'project-list',
    templateUrl: '../templates/projectlist.html',
    directives: [],
    providers: [ProjectRepository, HTTP_PROVIDERS]
})

export class ProjectList {
    
    projects: Project[];

    constructor(private projectRepository: ProjectRepository) {

    }

    ngOnInit() {
        this.projectRepository.getProjects()
            .subscribe(data => this.projects = data);
    }
}