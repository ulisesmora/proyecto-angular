import { Component, OnInit } from '@angular/core';

import {Project} from "../../models/projects";
import {ProjectService} from "../../services/project.service";
import {Global} from "../../services/global";
import {Router, ActivatedRoute, Params} from "@angular/router"


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
public url: string;
public project: Project;
  constructor( 
    private _projectsService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe( params => {
      let id = params.id;

      this.getProject(id);
    });
  }

  getProject(id:string){
    this._projectsService.getProject(id).subscribe(
      response => {
        this.project = response.project;

      },
      error => {
        console.log(error)
      }
    )
  }

  deleteProject(id){
    this._projectsService.deleteProject(id).subscribe(
      response => {
        if(response.project){
          this._router.navigate(["/proyectos"]);
        }

      },
      error => {
        console.log(error);

      }
    );
  }

}
