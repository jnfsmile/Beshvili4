import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeComponent } from './home/index';
import { AboutComponent } from './about/index';
import { ContactComponent } from './contact/index';
import { NotYetComponent } from './notyet/index';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'personal',
    component: NotYetComponent
    //component: PersonalComponent
  },
  {
    path: 'workshop',
    component: NotYetComponent
    //component: WorkshopComponent
  },
  {
    path: 'lecture',
    component: NotYetComponent
    //component: LectureComponent
  },
  {
    path: 'blog',
    component: NotYetComponent
    //component: BlogComponent
  },
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
