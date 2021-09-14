import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

public book:string = 'Harry potter';
public school:any = '';
public hotel:any='suninpark';
public messages:string='';
public maxcharacter:number=50;



  constructor() {}

getName(para:string){
    alert(para);
  }


getData(mobile:number, name:string ){

    alert(mobile + " "  + "employees data" + " " + name);
    // alert(name);
  }

  getElement(){
    console.warn("function has been calling");
  }


getItems(fname:string){
  console.warn(fname);
}

getEmployee(val:string){
  console.warn(val)
}
Displayyourname='';
getYourname(yourname:string){
  console.warn(yourname)
  this.Displayyourname=yourname;
}

Display='';
getYourname1(yourname:string){
  console.warn(yourname)
  this.Display=yourname;
}
count=0;
counter(type:string)
{
  type==='add' ?
   this.count++:this.count--;
}
//form binding--------

updateInput(event:any):void{
this.school = event.target.value;
}
 

 


  ngOnInit(): void {
  }
  
}
