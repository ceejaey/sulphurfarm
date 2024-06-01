import { Routes } from '@angular/router';
import { HomePageComponent } from './static/pages/home/home-page/home-page.component';
import { AboutUsPageComponent } from './static/pages/about-us/about-us-page/about-us-page.component';
import { BlogIndexPageComponent } from './blog/pages/blog-index-page/blog-index-page.component';
import { BlogDetailPageComponent } from './blog/pages/blog-detail-page/blog-detail-page.component';

export const routes: Routes = [
    {path:'', component:HomePageComponent},
    {path:'about', component:AboutUsPageComponent},
    {path:'blog', component:BlogIndexPageComponent},
    {path:'blog/:postId', component:BlogDetailPageComponent},
];
