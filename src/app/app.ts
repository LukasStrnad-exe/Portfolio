import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { AboveTheFold } from './above-the-fold/above-the-fold';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, AboveTheFold],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('Portfolio');
}
