import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Links } from './links/links';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'links', component: Links },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
