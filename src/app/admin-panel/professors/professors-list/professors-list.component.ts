import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProfessorService, ProfessorResponse } from '../../../services/professor.service';
import { Observable } from 'rxjs/Observable';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-professors-list',
  templateUrl: './professors-list.component.html',
  styleUrls: ['./professors-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfessorsListComponent implements OnInit {
    listOfProfessors: ProfessorResponse[];

  constructor(private professorService: ProfessorService) { }

  ngOnInit() {
    this.showProfessors();
  }

  private showProfessors() {
      this.professorService.getProfessors()
        .subscribe(data => {
            this.listOfProfessors = data;
            console.log(this.listOfProfessors);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
          console.log(err.message);
        });
  }
}
