import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stats2024Component } from './stats-2024.component';

describe('Stats2024Component', () => {
  let component: Stats2024Component;
  let fixture: ComponentFixture<Stats2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stats2024Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Stats2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
