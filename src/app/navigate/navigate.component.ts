import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit {

isAuthenticated = false;


  constructor(private authService:AuthService) 
  { }

  ngOnInit(): void {
    this.authService.userSub.subscribe((user) =>{

      this.isAuthenticated = user ? true : false;
      console.log(user);
    });
  }

  onLogout(event: Event){
    event.preventDefault();
    this.authService.logouts();
  }

}
