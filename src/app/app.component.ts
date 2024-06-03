import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SiteNavComponent } from './site/component/site-nav/site-nav.component';
import { SiteFooterComponent } from './site/component/site-footer/site-footer.component';
import { SiteCopyrightFooterComponent } from './site/component/site-copyright-footer/site-copyright-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SiteNavComponent, SiteFooterComponent, SiteCopyrightFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sulphurfarm';
}
