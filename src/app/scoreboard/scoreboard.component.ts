import {Component, inject} from '@angular/core';
import {AsyncPipe, NgClass, NgForOf} from "@angular/common";
import {Observable} from "rxjs";
import {collectionData, Firestore, orderBy, query, collection} from "@angular/fire/firestore";
import {ref} from "@angular/fire/database";

interface Group {
  name: string;
  points: number;
}

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    AsyncPipe,
  ],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.css'
})
export class ScoreboardComponent {
  firestore = inject(Firestore);
  groups$: Observable<any[]>;

  constructor() {
    const groups = collection(this.firestore, 'groups');
    const refq = query(groups, orderBy('points', 'desc'));
    this.groups$ = collectionData(refq);
  }
}
