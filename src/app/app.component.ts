import { Component } from '@angular/core';
// import { AuthService } from './services/auth.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent {
  title = 'Angular12withSCSS';




// constructor(private authService:AuthService) {   }
constructor() {   }
  ngOnInit():void{
    // this.authService.autoLogin();
  }


}
