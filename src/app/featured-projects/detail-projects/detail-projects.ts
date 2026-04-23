import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-projects',
  imports: [],
  templateUrl: './detail-projects.html',
  styleUrl: './detail-projects.scss'
})
export class DetailProjects {

  closeDetail() {
    const container = document.getElementById('detailContainer');
    if (container) {
      container.style.display = 'none';
    }
  }
}
