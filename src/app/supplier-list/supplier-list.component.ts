import {Component, OnInit} from '@angular/core';
import {elementAt} from 'rxjs/operators/elementAt';

import {SendDataService} from '../send-data.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {
  constructor(private newservice: SendDataService) {}
  supplierlist: any = [];
  searchtext: string = '';
  pageResult1 = [];

  rank = 0;
  supplierlist1;
  supplierlist2 = [];
  ngOnInit() {
    var self = this;
    this.newservice.supplierdata().subscribe(function(response) {
      self.supplierlist = response;
      self.supplierlist1 = self.supplierlist.slice(0, 3);
      for (let i = 0; i < self.supplierlist.length / 3; i++) {
        self.pageResult1.push({pagevalue: i + 1, selected: false});
      }
      // console.log(self.pageResult1);
    });
  }

  getindex(ind) {
    console.log('------------------');
    this.rank = ind;
    for (let i = 0; i < this.pageResult1.length; i++) {
      if (this.searchtext == '') {
        if (i == ind) {
          this.pageResult1[i].selected = true;
          this.supplierlist1 = this.supplierlist.slice(ind * 3, (ind * 3) + 3);
        } else {
          this.pageResult1[i].selected = false;
        }
      } else {
        if (i == ind) {
          this.pageResult1[i].selected = true;
          this.supplierlist1 = this.supplierlist2.slice(ind * 3, (ind * 3) + 3);
        } else {
          this.pageResult1[i].selected = false;
        }
      }
    }
  }

  search(text, rank, event) {
    // console.log(text);

    this.supplierlist1 = [];
    this.supplierlist2 = [];
    this.pageResult1 = [];

    for (let i = 0; i < this.supplierlist.length; i++) {
      if (this.supplierlist[i].SupplierName.toLowerCase().indexOf(text.toLowerCase()) > -1) {
        this.supplierlist2.push(this.supplierlist[i]);
        this.supplierlist1.push(this.supplierlist[i]);
        console.log(this.supplierlist2);
      }
    }



    for (let j = 0; j < this.supplierlist2.length / 3; j++) {
      this.pageResult1.push({pagevalue: j + 1, selected: false});
    }
    this.getindex(0);
  }
}
