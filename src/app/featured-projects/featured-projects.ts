import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProjects } from './detail-projects/detail-projects';

@Component({
  selector: 'app-featured-projects',
  imports: [CommonModule, DetailProjects],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss',
})
export class FeaturedProjects {
  projects = [
    {
      id: 1,
      name: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: '/assets/img/projects/Rectangle 30.png',
      skills: ['Angular', 'Typescript', 'HTML', 'CSS', 'Firebase'],
    },
    {
      id: 2,
      name: 'PolloLoco',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      image: '/assets/img/projects/Rectangle 30.png',
      skills: ['Javascript', 'HTML', 'CSS'],
    },
    {
      id: 3,
      name: 'DABubble',
      description:
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      image: '/assets/img/projects/Rectangle 30.png',
      skills: ['Angular', 'Firebase', 'Typescript'],
    },
  ];
  showDetail = false;
  selectedProjectId = 0;

  openDetail(id: number) {
    this.selectedProjectId = id;
    this.showDetail = true;
    document.body.style.overflow = 'hidden';
  }

  closeDetail() {
    this.showDetail = false;
    document.body.style.overflow = 'auto';
  }
}
