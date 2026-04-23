import { Component } from '@angular/core';
import { DetailProjects } from './detail-projects/detail-projects';

@Component({
  selector: 'app-featured-projects',
  imports: [DetailProjects],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss',
})
export class FeaturedProjects {
  projectDetail() {
    const container = document.getElementById('detailContainer');
    if (container) {
      container.style.display = 'flex';
    }
  }
}
