import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.css']
})
export class DevelopmentComponent implements OnInit {

@Output() rank:EventEmitter<number>= new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
 devData=[
   {stage:"Initial Data"},
 {stage:" Feasibility Report "},
 {stage:"Dev Trial"},
 {stage:"HT Process"},
 {stage:"Fatigue Testing"},
 {stage:"submit & cust. Feedback"},
 {stage:"PTR"},
{stage:"SOP"}
 ];
position:number;
 getindex=function(ind){
 this. postion = ind;
 this.rank.emit(this.postion);
 }
}
