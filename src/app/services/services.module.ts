import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ServicesComponent } from './services.component';
import { DataScienceComponent } from '../data-science/data-science.component';
import { GrowthConsultingComponent } from '../growth-consulting/growth-consulting.component';



export const childRoutes: Routes = [
  // {path:'',redirectTo : '/services/hacker-shark',pathMatch:'full'},
  { path: '', component: ServicesComponent },
  { path: 'services/product-development', component: DataScienceComponent },
  { path: 'services/hacker-shark', component: GrowthConsultingComponent },
  { path: '', redirectTo: '/services/hacker-shark', pathMatch: 'full' },
]



@NgModule({
  declarations: [
    ServicesComponent,
    DataScienceComponent,
    GrowthConsultingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes),
  ],
  providers: [

  ]
})
export class ServicesModule { }
