import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphs2024Component } from './graphs-2024.component';

describe('Graphs2024Component', () => {
  let component: Graphs2024Component;
  let fixture: ComponentFixture<Graphs2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Graphs2024Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Graphs2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
