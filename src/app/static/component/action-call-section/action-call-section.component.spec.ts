import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCallSectionComponent } from './action-call-section.component';

describe('ActionCallSectionComponent', () => {
  let component: ActionCallSectionComponent;
  let fixture: ComponentFixture<ActionCallSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionCallSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActionCallSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
