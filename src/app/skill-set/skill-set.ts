import { Component } from '@angular/core';
import { generate } from 'rxjs';

@Component({
  selector: 'app-skill-set',
  imports: [],
  templateUrl: './skill-set.html',
  styleUrl: './skill-set.scss',
})
export class SkillSet {
  images = [
    'HTML.svg',
    'CSS.svg',
    'JavaScript.svg',
    'Material Design.svg',
    'TypeScript.svg',
    'Angular.svg',
    'Firebase.svg',
    'Git.svg',
    'Rest-Api.svg',
    'mindset.svg',
  ];
}
