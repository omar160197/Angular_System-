import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/_models/customer';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
@Input() customerId:any;
  constructor(public customer_ser:CustomerService) { }

  ngOnInit(): void {
  
  }

  delete(){
  return this.customer_ser.deleteCustomer(this.customerId).subscribe(
    a=>console.log(`customer ${this.customerId} deleted`));
  }

}
