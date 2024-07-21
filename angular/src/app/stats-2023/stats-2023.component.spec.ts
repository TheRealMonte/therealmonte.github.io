import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stats2023Component } from './stats-2023.component';

describe('Stats2023Component', () => {
  let component: Stats2023Component;
  let fixture: ComponentFixture<Stats2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stats2023Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Stats2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
