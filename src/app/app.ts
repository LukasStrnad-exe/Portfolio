import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { AboveTheFold } from './above-the-fold/above-the-fold';
import { AbouteMe } from './aboute-me/aboute-me';
import { SkillSet } from './skill-set/skill-set';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, AboveTheFold, AbouteMe, SkillSet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('Portfolio');
}
