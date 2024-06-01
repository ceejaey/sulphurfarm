import { Component } from '@angular/core';
import { ActionCallSectionComponent } from '../../../component/action-call-section/action-call-section.component';
import { TeamMemberSectionComponent } from '../../../component/team-member-section/team-member-section.component';
import { AboutUsSectionComponent } from '../../../component/about-us-section/about-us-section.component';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [
    AboutUsSectionComponent,
    ActionCallSectionComponent,
    TeamMemberSectionComponent
  ],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss'
})
export class AboutUsPageComponent {

}
