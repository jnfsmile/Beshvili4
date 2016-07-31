import {
  it,
  inject,
  injectAsync,
  describe,
  beforeEachProviders,
  TestComponentBuilder
} from '@angular/core/testing';

import {TestComponentBuilder} from '@angular/compiler/testing';

import {Component, provide} from '@angular/core';

// Load the implementations that should be tested
import {ContactComponent} from './contact.component';

describe('Contact', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        Contact
    ]);

    it('should log ngOnInit', inject([Contact], (contact) => {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();

        contact.ngOnInit();
        expect(console.log).toHaveBeenCalled();
    }));

});
