import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import {inject, TestBed} from '@angular/core/testing';

import {SendDataService} from './send-data.service';

describe('SendDataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule(
        {providers: [SendDataService], imports: [HttpClientTestingModule,HttpClient]});

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('validate Addition',
     inject([SendDataService], (service: SendDataService) => {
       expect(service.addition(10, 20)).toBe(30);
     }));


  it('validate fetchdata function',
     inject(
         [SendDataService],
         (service: SendDataService) => {

            let json={name:"reshma"};
            service.fetchdata().subscribe((data)=>{
              expect(data).toBe(json);
            });

            const req=httpTestingController.expectOne('http://localhost:3000/product/TATA');
            req.flush(json);

            httpTestingController.verify();
         }));
});
