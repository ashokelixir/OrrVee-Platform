import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private _loginUrl = "https://dev-6rvonirl.us.auth0.com/oauth/token";

  constructor(private http: HttpClient,
    private _router: Router) { }

    loginUser(username, password) {
     
    var loginData = "client_id=pD5auY4hnQU1YB19PPdqoO8FSRq6m5bX" + "&username=" + username + "&password=" + password + "&grant_type=password" + "&scope=openid";

    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });

    console.log(loginData + "fromservice");

      return this.http.post<any>(this._loginUrl, loginData, { headers: reqHeader });
    }
  
    logoutUser() {
      localStorage.removeItem('userToken');
      this._router.navigate(['/login']);
    }
}
