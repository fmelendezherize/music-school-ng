import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '',
        component: HomeComponent, 
        children: [
          {
            path: 'students',
            component: StudentsComponent
          }
        ]
      },
    ]),
  ],
  declarations: [
    HomeComponent,
    HomeContentComponent,
    StudentsComponent, 
  ]
})
export class HomeModule { }
