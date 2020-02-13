import { Component, OnInit } from '@angular/core';
import {Project} from "../../models/projects";
import { ProjectService } from "../../services/project.service";
import {NotificationsService} from "angular2-notifications"
import { UploadService} from "../../services/upload.service";
import { Global} from "../../services/global";

@Component({
  selector: 'app-create-projects',
  templateUrl: './create-projects.component.html',
  styleUrls: ['./create-projects.component.css'],
  providers: [ProjectService,UploadService]
  
})
export class CreateComponent implements OnInit {

  public title: string;
  public project:Project;
  public save_project;
  private projectService: ProjectService;
  public status: string;
  private uploadService:UploadService;
  public filesToUpload: Array<File>;
  public confirm:boolean;

  constructor(projectService:ProjectService, private service:NotificationsService, private upload:UploadService) {
    this.projectService = projectService;
    this.title = "Crear Proyecto";
    this.project = new Project("","","","",2020,"","");
    this.service = service;
    this.uploadService = upload;
   }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.project);
  this.projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
         
if(this.filesToUpload ){

          //subir imagen
          this.uploadService.makeFileRequest(Global.url + "upload-image/"+response.project._id,[],this.filesToUpload, "image")
          .then((result:any) => {
            this.save_project = result.project;
            this.status = "sucess";
            
            console.log(result.project);
            
            form.reset();
            this.service.success("Usuario Creado Con Exito", "" , {
              position: ["bottom", "right"],
              timeOut: 5000,
              animate: "fade",
              showProgressBar: true
            });
          });
        }else{
          this.save_project = response.project;
          this.status = "sucess";
          this.service.success("Usuario Creado Con Exito", "" , {
            position: ["bottom", "right"],
            timeOut: 5000,
            animate: "fade",
            showProgressBar: true
          });
          form.reset();
        }

        }else{
          this.status = "failed";
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  fileChangeEvent(fileInput:any){
    console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
