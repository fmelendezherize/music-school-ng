import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProfessorService, ProfessorResponse } from '../../../services/professor.service';
import { Observable } from 'rxjs/Observable';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-professor',
  templateUrl: './edit-professor.component.html',
  styleUrls: ['./edit-professor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditProfessorComponent implements OnInit {

  professor: ProfessorResponse;

  constructor(private professorService: ProfessorService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProfessor();
  }

  private getProfessor() {
    this.route.params.subscribe(params => {
      this.professorService.getProfessor(params['id'])
        .subscribe(data => {
          this.professor = data;
          console.log(this.professor);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
        console.log(err.message);
      });

    });
  }
}
