import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../search-filter.pipe';



@NgModule({
  declarations: [
    CustomerAddComponent,
    CustomerDeleteComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerUpdateComponent,
    SearchFilterPipe,
  ],
  exports: [
    CustomerAddComponent,
    CustomerDeleteComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
   
  ]
})
export class CustomerModule { }
