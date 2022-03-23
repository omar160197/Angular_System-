import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../_models/customer';
// import { Address } from '../_models/address';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http:HttpClient,@Inject('baseUrl') public baseURL:string) { 
  this.baseURL+="customer/";
  }


  getAllCustomer(){
    return this.http.get<Customer[]>(this.baseURL);
    }

  getCustomerById(id:number){
  return this.http.get<Customer>(this.baseURL+id);
  }
  

  addCustomer(customer:Customer,file:File){
    
  let frm=new FormData(); 
  frm.append("fullName",customer.fullName);
  frm.append("customerPhone",customer.customerPhone.toString());
  frm.append("customerEmail",customer.customerEmail);
  frm.append("customerPassword",customer.customerPassword);
  frm.append("confirmPassword",customer.confirmPassword);
  frm.append("customerTotalPurchase",customer.customerTotalPurchase.toString());
  frm.append("Orders",JSON.stringify(customer.Orders));

  frm.append("customerAddresses",JSON.stringify(customer.customerAddresses))
  frm.append("role",customer.role);
  frm.append("image",file,file.name);
   
  console.log(frm.get("customerImage"));
  
  return this.http.post<Customer>(this.baseURL,frm);

  }

  updateCustomer(customer:Customer){
    return this.http.put<Customer>(this.baseURL+customer._id,customer);
  }

  deleteCustomer(id:number){
  return this.http.delete<Customer>(this.baseURL+id);

  }


}
