import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullwidthComponent } from './fullwidth.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/modules/login/login.component';

import { ReactiveFormsModule} from '@angular/forms'

import { MatCardModule } from '@angular/material/card';

import { MatInputModule } from '@angular/material/input'

  import {MatButtonModule} from '@angular/material/button';
  import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/modules/services/auth.service';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AuthInterceptor } from 'src/app/auth/auth.interceptor';


@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent,    
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,    
    ReactiveFormsModule,
  ],
  providers:[
    AuthService,AuthGuard,{
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ]
})
export class FullwidthModule { }
