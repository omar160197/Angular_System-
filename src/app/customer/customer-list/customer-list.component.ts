import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/_models/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit , OnDestroy {
  customers:Customer[]=[];
  public searchFilter: any = '';
  public query:string='';
  public deptDetailsId:number=0;
  public deptEditId:number=0;

  
  constructor(public customerSer:CustomerService) { }
  
  sub:Subscription|null=null;

  ngOnDestroy(): void {
 console.log("customer list detroyed");
 this.sub?.unsubscribe(); 

  }

  ngOnInit(): void {
   this.sub= this.customerSer.getAllCustomer().subscribe(a=>{
      this.customers=a
     });
  }

}
