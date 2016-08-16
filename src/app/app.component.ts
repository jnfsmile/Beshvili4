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
  <header>

    <nav class="navbar navbar-default" role="navigation">

        <!-- navbar-header -->
        <div class="navbar-header">

          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" routerLink="/home" title="בשבילי - אימון והדרכה">
            <img [src]="siteLogo" alt="לוגו" />
            בשבילי
            <br/>
            <span>הכוונה והדרכה מול אתגרי הפוריות</span>
          </a>

          <!--span class="navbar-brand">
            <a class="clearfix" routerLink="/home">
              <img [src]="siteLogo" class="hidden-xs" />
              <div>
                <h1>בשבילי</h1>
                <h2 class="hidden-xs hidden-sm">הכוונה והדרכה מול אתגרי הפוריות</h2>
              </div>
            </a>
          </span!-->

        </div><!-- /navbar-header -->

        <!-- navbar -->
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-left">
            <li><a routerLink="/home" routerLinkActive="active">ראשי</a></li>
            <li><a routerLink="/personal" routerLinkActive="active">תהליך אישי</a></li>
            <li><a routerLink="/workshop" routerLinkActive="active">סדנאות</a></li>
            <li><a routerLink="/lecture" routerLinkActive="active">הרצאות</a></li>
            <li><a routerLink="/blog" routerLinkActive="active">בלוג</a></li>
            <li><a routerLink="/about" routerLinkActive="active">אודות</a></li>
            <li><a routerLink="/contact" routerLinkActive="active">צרי קשר</a></li>
          </ul>

        </div><!-- /navbar -->

    </nav>
  </header>
      <router-outlet></router-outlet>


      <footer>

      </footer>

  `
})
export class App {
  siteLogo = 'assets/images/site-logo.png';
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
