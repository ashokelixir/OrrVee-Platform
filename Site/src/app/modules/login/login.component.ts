import { Component, OnInit } from '@angular/core';


import {Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CognitoAuthService } from '../services/cognito-auth.service';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(private _authService: AuthService, private _cogAuth : CognitoAuthService, private _router : Router){}
  
 form: FormGroup = new FormGroup({
  username: new FormControl(''),
  password: new FormControl(''),
});

 
  async SignUp()
  {

    var res = await this._cogAuth.signupUser("ashok.elixir","ashok.elixir@gmail.com", "Ashok@123", "+919884670742", "Ashok");

    console.log(res);

  }


  ngOnInit(): void {
  }

  async submit() {

    //alert(this.form.controls['username'].value);
    if (this.form.valid) {

    var username = this.form.controls['username'].value; 
    var password = this.form.controls['password'].value;

    // this._authService.loginUser(username,password).subscribe((data : any)=>{
    //   localStorage.setItem('userToken',data.access_token);
    //   this._router.navigate(["dashboard"]);
    // },
    // (err : HttpErrorResponse)=>{
    //   this.error = "Inavlid Credentials";
    // });

    // this._authService.loginWithRedirect().subscribe((data: any) => {
    //   console.log(data);
    // });


    var data = await this._cogAuth.loginUser(username,password);

    if(data)
    {
      localStorage.setItem('userToken',data.signInUserSession.accessToken.jwtToken);
      this._router.navigate(["dashboard"]);
    }

    

    

    
      this.submitEM.emit(this.form.value);
    }
  }

}
