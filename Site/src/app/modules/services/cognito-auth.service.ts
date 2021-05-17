import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Amplify, {Auth} from 'aws-amplify';
import { environment } from 'src/environments/environment';


Amplify.configure({
  Auth : {
    mandatorySignIn: true,
    region: environment.cognito.REGION,
    userPoolId: environment.cognito.USER_POOL_ID,
    userPoolWebClientId: environment.cognito.APP_CLIENT_ID,
    
  }
});

@Injectable({
  providedIn: 'root'
})
export class CognitoAuthService {

  private _loginUrl = "https://dev-6rvonirl.us.auth0.com/oauth/token";

  constructor(private http: HttpClient,
    private _router: Router) { 

      

    }

    async signupUser(username, email, password, phonenumber, name)
    {     

      let signUpRes = null;

      try {
        signUpRes = await Auth.signUp({
          username,
          password,
          attributes : {
            "email": email,            
            "name": name,
            "phone_number": phonenumber,
          }          
        });
      }
      catch(error) {
        console.error(error);
      }

      return signUpRes;

    }

    async loginUser(username, password) {     

      let signInData = null;

      try 
      {
         signInData = await Auth.signIn(username,password);

         console.log(signInData);
         
      }
      catch(error)
      {
        console.error(error);
      }
      
      return signInData;

    }
  
    logoutUser() {
      localStorage.removeItem('userToken');
      this._router.navigate(['/login']);
    }
}
