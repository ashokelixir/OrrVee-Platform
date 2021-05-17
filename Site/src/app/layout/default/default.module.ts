import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from 'src/app/modules/services/auth.service';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/auth/auth.interceptor';

import { MatInputModule} from '@angular/material/input'
import { MatSidenavModule} from '@angular/material/sidenav'
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,    
    SharedModule,
    MatSidenavModule,
    HttpClientModule,    
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,        
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatPaginatorModule,    
    MatListModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers:[
    AuthService, AuthGuard,{
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ]
})
export class DefaultModule { }
