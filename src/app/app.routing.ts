import { NavExampleComponent } from './material-examples/nav-example/nav-example.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { DashboardExampleComponent } from './material-examples/dashboard-example/dashboard-example.component';
import { TableExampleComponent } from './material-examples/table-example/table-example.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dashboard-example', component: DashboardExampleComponent },
    { path: 'table-example', component: TableExampleComponent },
    { path: 'nav-example', component: NavExampleComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];
