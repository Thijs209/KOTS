import {Component, inject} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {collection, collectionData, doc, Firestore, orderBy, query, setDoc, updateDoc} from "@angular/fire/firestore";
import {Observable, take} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {DataService} from "../services/data.service";
import {ReactiveFormsModule} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ToasterComponent} from "../toaster/toaster.component";

@Component({
  selector: 'app-submit',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    HeaderComponent,
    ReactiveFormsModule,
    ToasterComponent,
    NgIf
  ],
  templateUrl: './submit.component.html',
  styleUrl: './submit.component.css'
})
export class SubmitComponent {
  points= null;
  group = "";
  firestore = inject(Firestore);
  groups$: Observable<Group[]>;
  groups: Group[] = [];
  showToaster = false;

  constructor(public dataService: DataService, private toastr: ToastrService) {
    const groups = collection(this.firestore, 'groups');
    this.groups$ = collectionData(groups) as Observable<Group[]>;
  }

  changePoints($event: any) {
    this.points = $event.target.value;
  }

  changeGroup($event: any) {
    this.group = $event.target.value;
  }

  addPoints() {
    this.groups$.pipe(take(1)).subscribe((group) => {
      group.find((g: Group) => {
        if (g.name === this.group) {
          setDoc(
            doc(this.firestore, 'groups', g.name), {
              name: g.name,
              points: Number(Number(g.points) + Number(this.points))
            }
          ).then(() => {
            this.toastr.success('Punten toegevoegd! ', 'Succes', {
              positionClass: "toast-bottom-center"
            });
            this.group = '';
            this.points = null;
          });
        }
      });
    });
  }

  subtractPoints() {
    this.groups$.pipe(take(1)).subscribe((group) => {
      group.find((g: Group) => {
        if (g.name === this.group) {
          setDoc(
            doc(this.firestore, 'groups', g.name), {
              name: g.name,
              points: Number(Number(g.points) - Number(this.points))
            }
          ).then(() => {
            this.toastr.success('Punten afgetrokken! ', 'Succes', {
              positionClass: "toast-bottom-center"
            });
            this.group = '';
            this.points = null
          });
        }
      });
    })
  }
}

export interface Group {
  name: string;
  points: number;
}
