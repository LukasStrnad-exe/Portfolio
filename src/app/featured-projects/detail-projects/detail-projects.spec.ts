import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProjects } from './detail-projects';

describe('DetailProjects', () => {
  let component: DetailProjects;
  let fixture: ComponentFixture<DetailProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
