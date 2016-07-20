import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Project} from '../entities/project';
import {ProjectRepository} from '../repositories/projectRepository';

@Component({
    selector: 'project-list',
    templateUrl: './templates/projectlist.html',
    directives: [],
    providers: [ProjectRepository]
})

export class ProjectList {
    projects: Project[];
    constructor(private projectRepository: ProjectRepository) {

    }

    ngOnInit() {
        this.projectRepository.getProjects().subscribe(projects => this.projects = projects);
    }
}

bootstrap(ProjectList);