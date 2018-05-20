import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AddTrademarkComponent } from './add-trademark/add-trademark.component'
import { SearchTrademarkComponent } from "./search-trademark/search-trademark.component";


const routes: Routes = [
  { path: 'angular', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add_trademark', component: AddTrademarkComponent},
  { path: 'search_trademark', component: SearchTrademarkComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
