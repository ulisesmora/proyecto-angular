import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create-projects/create-projects.component';
import { ContactComponent } from './components/contact/contact.component';
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {DetailComponent} from "./components/detail/detail.component";
import {EditComponent} from "./components/edit/edit.component";


const appRoutes: Routes = [
    {path: "", component: SobremiComponent},
    {path: "sobre-mi", component:SobremiComponent},
    {path: "proyectos", component: ProjectsComponent},
    {path: "crear-proyecto", component: CreateComponent},
    {path: "contacto", component:ContactComponent},
    {path: "proyecto/:id", component:DetailComponent},
    {path: "editar-proyecto/:id", component:EditComponent},
    {path: "**", component:ErrorPageComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);