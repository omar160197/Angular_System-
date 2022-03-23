import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/_models/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit , OnChanges {

  @Input() customerId:number=0;
  customer:Customer|null=null;
   

  constructor(public customer_ser:CustomerService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['customerId'].isFirstChange())
    this.customer_ser.getCustomerById(this.customerId).subscribe(
      a=>this.customer=a,
    );
  }
  


  ngOnInit(): void {
  }

}
