import { Component, OnInit } from '@angular/core';


interface Prouct{
  sno:string;
  name:string;
  image:string;
  qty:number;
  price:number;
}
interface Element{
  id:string;
  elementname:string;
  elementpicture:string;
  elementqty:number;
  elementprice:number;
}

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {

public product:Prouct = {
  sno:'AA101',
  name:'MI',
  image:'https://n4.sdlcdn.com/imgs/i/z/i/HMTe-HM-9072-Metal-Analog-SDL494827480-1-db8fc.jpg',
  qty:3,
  price:4000
};
public element:Element[] = [
{
  id:'AA106',
  elementname:'APPLE',
  elementpicture:'https://n4.sdlcdn.com/imgs/i/z/i/HMTe-HM-9072-Metal-Analog-SDL494827480-1-db8fc.jpg',
  elementqty:1,
  elementprice:1000
},
{
  id:'AA107',
  elementname:'Redmi',
  elementpicture:'https://n4.sdlcdn.com/imgs/i/z/i/HMTe-HM-9072-Metal-Analog-SDL494827480-1-db8fc.jpg',
  elementqty:3,
  elementprice:2000
},
{
  id:'AA108',
  elementname:'Noise',
  elementpicture:'https://n4.sdlcdn.com/imgs/i/z/i/HMTe-HM-9072-Metal-Analog-SDL494827480-1-db8fc.jpg',
  elementqty:2,
  elementprice:4000
}
];


yourname='anju';

public Firstname:string="anamika";

public flowerimage:string="https://n4.sdlcdn.com/imgs/i/z/i/HMTe-HM-9072-Metal-Analog-SDL494827480-1-db8fc.jpg";

public updatedtime:string=new Date().toLocaleTimeString();
public count:number=0;
public message:string="hello";
show=true;
display=false;
view=false;
shown=false;
see='bac';
color='yellow';

  constructor() 
  {
     this.updateTime();
  }


         
  ngOnInit(): void {
  }


public getDate():string{
  return new Date().toLocaleDateString();
}

public getTime():string{
  return new Date().toLocaleTimeString();
}

public updateTime():void{
  setInterval(()=>{
    this.updatedtime = new Date().toLocaleTimeString();
  } , 1000);
}

public incrCounter():void{
this.count=this.count+1;
}

public decrCounter():void{
this.count=this.count-1 > 0 ? this.count-1:0;
}



public SayGood():void{
  this.message='Good morning';
}

public updateMessage(msg:string):void{

this.message = msg;
}

public addQty():void{
  this.product={
    ...this.product, qty:this.product.qty+1 < 5 ? this.product.qty+1 :5
  }
}
public minusQty():void{
  this.product={
    ...this.product, qty:this.product.qty-1 > 0 ? this.product.qty-1 :1
  }
}

public plusQty(elementId:string):void{

this.element = this.element.map((elements:Element)=>{
  if(elements.id === elementId){
    return {
      ...elements,
      elementqty:elements.elementqty+1 < 5 ? elements.elementqty+1 :5
    }
  }
  return elements;
})
}

public subQty(elementId:string):void{

this.element = this.element.map((elements:Element)=>{
  if(elements.id === elementId){
    return {
      ...elements,
      elementqty:elements.elementqty-1 > 0 ? elements.elementqty-1:1
    }
  }
  return elements;
})
}
public calcGrandTotal():number{
  let total:number=0;
  for(let elements of this.element){
    total += (elements.elementqty* elements.elementprice);
  }
  return total;
}

}
