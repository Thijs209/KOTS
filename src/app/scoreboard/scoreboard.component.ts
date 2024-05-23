import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.css'
})
export class ScoreboardComponent {
  groups = [
    {name: 'Group 1', points: 10},
    {name: 'Group 2', points: 14},
    {name: 'Group 3', points: 25},
    {name: 'Group 4', points: 9},
    {name: 'Group 5', points: 7},
    {name: 'Group 6', points: 12},
    {name: 'Group 7', points: 18},
    {name: 'Group 8', points: 21},
    {name: 'Group 9', points: 3},
    {name: 'Group 10', points: 17}
  ]

  sortedGroups = this.groups.sort((a, b) => b.points - a.points);
}
