import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Project} from '../entities/project';
import {ProjectRepository} from '../repositories/projectRepository';

@Component({
    selector: 'project-list',
    // templateUrl: './templates/projectlist.html',
    template:`
    <ul>
        <li *ngFor="let project of projects">
            <p>{{project.id}}</p>
            <p>{{project.name}}</p>
        </li>
    </ul>`,
    directives: [],
    providers: [ProjectRepository]
})

export class ProjectList {
    projects: Project[] = [{ id:1, name:"project one"}, { id:2, name:"project two"}];

    constructor(private projectRepository: ProjectRepository) {

    }

    ngOnInit() {
        //this.projectRepository.getProjects().subscribe(projects => this.projects = projects[0]);

    }
}