import { Component, Output, EventEmitter, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-detail-projects',
  imports: [NgFor],
  templateUrl: './detail-projects.html',
  styleUrl: './detail-projects.scss',
})
export class DetailProjects {
  @Input() projects: any[] = [];
  @Input() projectId: number = 0;
  @Output() close = new EventEmitter<void>();

  renderdetailTask(id: number) {
    this.projectId = id;
  }

  closeDetail() {
    this.close.emit();
  }

  NextProject() {
    this.projectId <= 1 ? this.projectId++ : (this.projectId = 0);
  }
}
