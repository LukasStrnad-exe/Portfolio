import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouteMe } from './aboute-me';

describe('AbouteMe', () => {
  let component: AbouteMe;
  let fixture: ComponentFixture<AbouteMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbouteMe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbouteMe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
