import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {


term:any="";
page = 1;
pageSize =5;

public list:any;
constructor() { }

  ngOnInit(): void {

this.list=[
  {
    "id": 1,
    "fname":"bnju",
    "phn":6768949
  },
  {
    "id": 2,
    "fname":"anjadli",
    "phn":995758949
  },
    {
    "id": 3,
    "fname":"duall",
    "phn":8896768949
  },
   {
    "id": 4,
    "fname":"dall",
    "phn":77996768949
  },
   {
    "id": 5,
    "fname":"all",
    "phn":7832
  },
    {
    "id": 6,
    "fname":"manish",
    "phn":888949
  } ,
   {
    "id": 7,
    "fname":"avtar",
    "phn":5978949
  },
   {
    "id": 8,
    "fname":"himani",
    "phn":4242748949
  },
 {
    "id": 9,
    "fname":"kapil",
    "phn":8993338949
  },
   {
    "id": 10,
    "fname":"himan",
    "phn":1212949
  },
   {
    "id": 11,
    "fname":"kamal",
    "phn":43218949
  },
   {
    "id": 12,
    "fname":"leela",
    "phn":21788949
  }
]


  }

}
