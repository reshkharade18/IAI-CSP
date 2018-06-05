import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {SendDataService} from '../send-data.service'

    @Component({selector: 'app-defaultform', templateUrl: './defaultform.component.html', styleUrls: ['./defaultform.component.css']})

export class DefaultformComponent implements OnInit {
  
  @Input() childMessage;
  @Output() messageEvent = new EventEmitter<boolean>();
  
  
  param;
  status = 'AddProject';
  public model: any = {_id: '', revisionNumber: '', project: '', drawing: ''}

  constructor(private newservice: SendDataService) {}

  ngOnInit() {
    this.newservice.showdata().subscribe((response) => {
      this.model._id = response._id;
      this.model.revisionNumber = response.revisionNumber;
      this.model.project = response.project;
      this.model.drawing = response.drawing;
      if (this.model._id) {
        this.status = 'UpdateProject';
      }
    });
  }


  addproject(form) {
    console.log('model values : ', this.model);
    this.param = form.value;
    this.param._id =this.model._id;
    this.param.customername = 'TATA';
    this.param.formname = this.childMessage.formname;
    this.param.stage = this.childMessage.stage;
    this.param.enabled = this.childMessage.enabled;
    console.log(this.param);
    this.newservice.postnewproject(this.param).subscribe((response) => {
      console.log('post successfully!');

      this.messageEvent.emit(true);
    });
  }
}
