import { Component, OnInit } from '@angular/core';
import { SocialUser, AuthService, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  user:SocialUser;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {    
    this.authService.authState.subscribe((user)=>{
      this.user = user;
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x.firstName));
  }
  
  signOut():void{
    this.authService.signOut();
  }



}
