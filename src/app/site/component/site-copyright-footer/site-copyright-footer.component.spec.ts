import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCopyrightFooterComponent } from './site-copyright-footer.component';

describe('SiteCopyrightFooterComponent', () => {
  let component: SiteCopyrightFooterComponent;
  let fixture: ComponentFixture<SiteCopyrightFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteCopyrightFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteCopyrightFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
