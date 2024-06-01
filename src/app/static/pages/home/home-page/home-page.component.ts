import { Component } from '@angular/core';
import { TeamMemberSectionComponent } from '../../../component/team-member-section/team-member-section.component';
import { PortfolioSectionComponent } from '../../../component/portfolio-section/portfolio-section.component';
import { OfferedServicesSectionComponent } from '../../../component/offered-services-section/offered-services-section.component';
import { TestimonialSectionComponent } from '../../../component/testimonial-section/testimonial-section.component';
import { AboutUsSectionComponent } from '../../../component/about-us-section/about-us-section.component';
import { ActionCallSectionComponent } from '../../../component/action-call-section/action-call-section.component';
import { ClientSectionComponent } from '../../../component/client-section/client-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    TeamMemberSectionComponent, 
    PortfolioSectionComponent, 
    OfferedServicesSectionComponent, 
    TestimonialSectionComponent,
    AboutUsSectionComponent,
    ActionCallSectionComponent,
    ClientSectionComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
