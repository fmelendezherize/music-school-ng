import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminPanelComponent } from './admin-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfessorsListComponent } from './professors-list/professors-list.component';
import { AddProfessorComponent } from './add-professor/add-professor.component';
import { EditProfessorComponent } from './edit-professor/edit-professor.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'panel',
        component: AdminPanelComponent,
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent
          }
        ]
      },
    ]),
  ],
  declarations: [
    AdminPanelComponent,
    DashboardComponent, 
    ProfessorsListComponent,
    AddProfessorComponent, 
    EditProfessorComponent,     
  ]
})
export class AdminPanelModule { }
