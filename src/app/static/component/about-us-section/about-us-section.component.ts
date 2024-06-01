import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-about-us-section',
  standalone: true,
  imports: [],
  templateUrl: './about-us-section.component.html',
  styleUrl: './about-us-section.component.scss'
})
export class AboutUsSectionComponent {

  @Input() detail: boolean = true;

}
