// ```
// app.ts
// (c) 2016 David Newman
// blackshuriken@hotmail.com
// app.ts may be freely distributed under the MIT license
// ```

// *src/app/app.ts*

// This file contains the main class as well as the necessary
// decorators for creating the primary `app` `component`

/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {AppState} from './app.service';

import {routes} from './app.routes';

import {HomeComponent} from './home';

// Import NgFor directive
import {NgFor} from '@angular/common';

// Import Todo component
import {Todo} from './todo/todo.component';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [  ],
  directives: [ Todo,
                NgFor,
                ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
  pipes: [],
  // Load our main `Sass` file into our `app` `component`
  styleUrls: [require('!style!css!sass!../sass/main.scss').toString()],
  template: `
    <div class="navbar navbar-default" role="navigation">

        <!-- navbar-header -->
        <div class="navbar-header">

          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <span class="navbar-brand">{{title}}</span>

        </div><!-- /navbar-header -->

        <!-- navbar -->
        <div class="navbar-collapse collapse">
          <nav class="nav navbar-nav">
            <li><a [routerLink]="['/']" routerLinkActive="active">ראשי</a></li>
            <li><a href="#">תהליך אישי</a></li>
            <li><a href="#">סדנאות</a></li>
            <li><a href="#">הרצאות</a></li>
            <li><a href="#">בלוג</a></li>
            <li><a [routerLink]="['/about']">אודות</a></li>
            <li><a [routerLink]="['/contact']">צרי קשר</a></li>
          </nav>
        </div><!-- /navbar -->

    </div>

      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading">
      </md-progress-bar>

      <router-outlet></router-outlet>

      <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

      <footer>
        <img [src]="angularLogo" width="7%">
        <span>Angular 2 MEAN Webpack Starter by <a [href]="url">@datatype_void</a></span>
      </footer>

  `
})
export class App {
  angularLogo = 'assets/img/angular-logo.png';
  name = 'בשבילי';
  url = 'http://localhost:8080/';

  // Pass in our application `state`
  // Alternative to using `redux`
  constructor(public appState: AppState) {}

  // Fire off upon initialization
  ngOnInit() {

    console.log('Initial App State', this.appState.state);
  }
}

/*
 * For help or questions please contact us at @datatype_void on twitter
 * or our chat on Slack at http://www.davidniciforovic.com/wp-login.php?action=slack-invitation
 */
