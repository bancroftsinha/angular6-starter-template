import { NavExampleComponent } from './material-examples/nav-example/nav-example.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './app-material.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TableExampleComponent } from './material-examples/table-example/table-example.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { DashboardExampleComponent } from './material-examples/dashboard-example/dashboard-example.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableExampleComponent,
    DashboardExampleComponent,
    NavExampleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
