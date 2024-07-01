import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {ScoreboardComponent} from "../scoreboard/scoreboard.component";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    ScoreboardComponent,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
