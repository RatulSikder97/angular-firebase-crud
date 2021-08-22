import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, of } from 'rxjs';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private db: AngularFirestore) {}

  getAllCustomer(): Observable<any[]> {
    let customers: any[] = [];

    this.db
      .collection('customer')
      .get()
      .subscribe((data) => {
        data.docs.forEach((u) => {
          customers.push(u.data());
        });
      });

    return of(customers);
  }

  getSingleCustomer(id: any) {}
  /**
   * @param  {Customer} customer
   */
  createCustomer(customer: Customer) {
    this.db
      .collection('customer')
      .add({
        ...customer,
      })
      .then((doc) => {
        console.log(doc);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  /**
   * @param  {any} id
   */
  editCustomer(id: any) {}

  deleteCustomer(id: any) {}
}
