import { Component, OnInit } from '@angular/core';
// import {GetserviceService} from '../service/getservice.service';
import {DdatoriuserService} from '../service/ddatoriuser.service';



@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent implements OnInit {

  constructor(private ddatoriuserService:DdatoriuserService) { }

  ngOnInit(): void {
     this.getDdatori();
  }
 getDdatori(){
         this.ddatoriuserService.getDdatoriuser().subscribe((response=>{
         // this.viewdata=data;
          console.log(response);
      })
   );
}
}
