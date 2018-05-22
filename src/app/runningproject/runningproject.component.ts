import { Component, OnInit } from '@angular/core';
import {SendDataService} from '../send-data.service';

@Component({
  selector: 'app-runningproject',
  templateUrl: './runningproject.component.html',
  styleUrls: ['./runningproject.component.css']
})
export class RunningprojectComponent implements OnInit {

  constructor(private newservice:SendDataService) { }

  ngOnInit() {
  
  //  this.newservice.fetchdata().subscribe(function(data){
  //   this.projectdata = data;
  // });
}

}
