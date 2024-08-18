import {Component, inject} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {collection, collectionData, Firestore, orderBy, query} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {AsyncPipe, NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    HeaderComponent,
    NgForOf,
    AsyncPipe,
    NgClass
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  transactions$: Observable<Transaction[]>;
  firestore = inject(Firestore);

  constructor() {
    const transactions = collection(this.firestore, 'transactions');
    const refq = query(transactions, orderBy('timestamp', 'desc'));
    this.transactions$ = collectionData(refq) as Observable<Transaction[]>;
  }
}

export interface Transaction {
  group: string;
  points: number;
  reason: string;
  timestamp: string;
}
