import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'studyplan',
  templateUrl: 'app/studyplan.component.html'
})

export class StudyplanComponent implements OnInit {

  constructor(
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {

      //console.log("unit bla:" , this.route.params.value['unit']);


    this.route.params.forEach((params: Params) => {
      let unit = params['unit'];
      console.log("unit:" , unit);
    });
  }

}
