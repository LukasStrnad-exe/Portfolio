import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  imports: [],
  templateUrl: './skill-set.html',
  styleUrl: './skill-set.scss'
})
export class SkillSet {
  images = [
    "HTML.png", "CSS.png", "JS.png", "MD.png", "TS.png", "A.png", "Firebase.png",
    "Git.png", "Rest- api.png", "mindset.png"
  ];

  constructor() {
    this.images.forEach(img => {
      let container = document.getElementById("skills");
    });


  }
}
