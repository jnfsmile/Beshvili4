import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeComponent } from './home/index';
import { AboutComponent } from './about/index';
import { ContactComponent } from './contact/index';

export const routes: RouterConfig = [
  /*{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },*/
  {
    path: '',
    component: HomeComponent
  }/*,
  {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: 'workshop',
    component: WorkshopComponent
  },
  {
    path: 'lecture',
    component: LectureComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }*/,
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
