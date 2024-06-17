import {Component, inject} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {collection, collectionData, Firestore, orderBy, query} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-submit',
  standalone: true,
  imports: [
    HeaderComponent,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './submit.component.html',
  styleUrl: './submit.component.css'
})
export class SubmitComponent {
  points = 0;
  group = "";
  firestore = inject(Firestore);
  groups$: Observable<any[]>;
  showAddToaster = false;
  showSubtractToaster = false;

  constructor() {
    const groups = collection(this.firestore, 'groups');
    const refq = query(groups, orderBy('points', 'desc'));
    this.groups$ = collectionData(refq);
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  changePoints($event: any) {
    this.points = $event.target.value;
    console.log(this.points);
  }

  changeGroup($event: any) {
    this.group = $event.target.value;
    console.log(this.group);
  }

  addPoints() {
    console.log(this.points);
    console.log(this.group);
    this.showAddToaster = true;
    this.sleep(2000).then(() => {
      this.showAddToaster = false;
    });
  }

  subtractPoints() {
    console.log(this.points);
    console.log(this.group);
    this.showSubtractToaster = true;
    this.sleep(2000).then(() => {
      this.showSubtractToaster = false;
    });
  }
}
