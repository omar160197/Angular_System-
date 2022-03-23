import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit,OnDestroy {
  // use public router:Router to navigate login button will go to list component
  constructor(public authSer: AuthService,public router:Router) {}

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  
  user: User = new User('', '');
  //to end observable 
  sub:Subscription|null=null;


  login() {
  this.sub=this.authSer.login(this.user).subscribe((a) => {
      console.log(a);
      localStorage.setItem("token",(<any>a).token);
       this.router.navigate(['/list']);
    });
  }

  ngOnInit(): void {}
}
