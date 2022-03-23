import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Address } from 'src/app/_models/address';
import { Customer } from 'src/app/_models/customer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  
  newAddress:Address=new Address('','','',0,0);
  addArray:Address[]=[];

  newCustomer:Customer=new Customer({},"",0,'','','','',0,[0],this.addArray,''); 
  file:any;

  onFileChange(s:any){
  this.file=s.target.files[0];
  }

  save(){
    this.addArray.push(this.newAddress);
    console.log(this.newCustomer.customerAddresses);
    
    this.customer_ser.addCustomer(this.newCustomer,this.file).subscribe(
      a=>console.log(a)
    )} 

  constructor(public customer_ser:CustomerService) { }


  ngOnInit(): void {
  }

}
