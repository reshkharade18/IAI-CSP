import {Component, OnInit} from '@angular/core';
import {SendDataService} from '../send-data.service';

    @Component({selector: 'app-development', templateUrl: './development.component.html', styleUrls: ['./development.component.css']})
export class DevelopmentComponent implements OnInit {
  constructor(private newservice: SendDataService) {}
  formData = [];
  devData = [
    {stage: 'Initial Data', enabled: true,formname:"InitialData"},
    {stage: ' Feasibility Report ', enabled: false,formname:"FeasibilityReport"},
    {stage: 'Dev Trial', enabled: false}, {stage: 'HT Process', enabled: false,formname:"DevTrial"},
    {stage: 'Fatigue Testing', enabled: false,formname:"FatigueTesting"},
    {stage: 'submit & cust. Feedback', enabled: false,formname:"submit&cust.Feedback"},
    {stage: 'PTR', enabled: false,formname:"PTR"}, {stage: 'SOP', enabled: false,formname:"SOP"}
  ];
  rank: number;
  message: boolean;
  parentMessage;
  ngOnInit() {
    this.newservice.fetchdata().subscribe((response) => {
      for(let i=0;i<=response.length;i++){
        this.devData[i].enabled=true;
      }
    });
  }

  getindex =
      function(ind) {
    this.rank = ind;
    console.log(ind);
    this.parentMessage=this.devData[ind];
  }


  receivemessage($event) {
    this.message = $event;
    this.devData[1].enabled = true;
  }
}
