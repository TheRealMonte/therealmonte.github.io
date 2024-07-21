import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawColorComponent } from './draw-color.component';

describe('DrawColorComponent', () => {
  let component: DrawColorComponent;
  let fixture: ComponentFixture<DrawColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrawColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
