import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  $customer!: Observable<any[]>;

  ngOnInit(): void {
    this.$customer = this.customerService.getAllCustomer()
  }

}
