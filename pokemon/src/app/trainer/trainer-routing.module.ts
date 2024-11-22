import { Routes } from "@angular/router";
import { TrainerDetailComponent } from "./trainer-detail/trainer-detail.component";
import { TrainerListComponent } from "./trainer-list/trainer-list.component";
import { NgModule } from "@angular/core";

import {RouterModule } from '@angular/router';

const routes: Routes = [
    {
     path: 'list',
     component: TrainerListComponent
   },
   {
     path: ':id',
     component: TrainerDetailComponent
   },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
   })
   export class TrainerRoutingModule { }
