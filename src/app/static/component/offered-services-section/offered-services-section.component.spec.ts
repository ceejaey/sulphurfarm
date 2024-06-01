import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferedServicesSectionComponent } from './offered-services-section.component';

describe('OfferedServicesSectionComponent', () => {
  let component: OfferedServicesSectionComponent;
  let fixture: ComponentFixture<OfferedServicesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferedServicesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferedServicesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
