import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminPanelComponent } from './admin-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfessorsListComponent } from './professors/professors-list/professors-list.component';
import { AddProfessorComponent } from './professors/add-professor/add-professor.component';
import { EditProfessorComponent } from './professors/edit-professor/edit-professor.component';

import { ProfessorService } from '../services/professor.service';

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
          },
          {
            path: 'professors',
            component: ProfessorsListComponent
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
  ],
  providers: [ProfessorService],
})
export class AdminPanelModule { }
