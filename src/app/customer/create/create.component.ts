import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  customerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
    })
  }

  get getControl() {
    return this.customerForm.controls
  }

  createCustomer() {
    let customer: Customer = {
      name: this.getControl.name.value,
      email: this.getControl.email.value,
      phone: this.getControl.phone.value
    }
    this.customerService.createCustomer(customer);

  }

}
