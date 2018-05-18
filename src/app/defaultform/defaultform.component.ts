import {Component, OnInit} from '@angular/core';
import {SendDataService} from '../send-data.service'

@Component({
  selector: 'app-defaultform',
  templateUrl: './defaultform.component.html',
  styleUrls: ['./defaultform.component.css']
})
export class DefaultformComponent implements OnInit {
  constructor(private newservice:SendDataService) {}
 
  ngOnInit() {}

  param;

  addproject(form) {
    this.param = form.value;
    console.log(this.param);
    this.newservice.postnewproject(this.param).subscribe((response)=>{
      console.log("post successfully!");
    });
  }
}
