import { Component, OnInit } from '@angular/core';
import {DdatoriuserService} from '../service/ddatoriuser.service';
@Component({
  selector: 'app-navbarddatori',
  templateUrl: './navbarddatori.component.html',
  styleUrls: ['./navbarddatori.component.scss']
})
export class NavbarddatoriComponent implements OnInit {

 isAuthenticated = false;


  constructor(private ddatoriuserService:DdatoriuserService) 
  { }

  ngOnInit(): void {
    this.ddatoriuserService.duserSub.subscribe((duser) =>{

      this.isAuthenticated = duser ? true : false;
      console.log(duser);
    });
  }


}
