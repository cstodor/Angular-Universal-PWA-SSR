import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { tap, startWith } from 'rxjs/operators';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { SeoService } from '../seo.service';

const ANIMALS_KEY = makeStateKey<any>('fruits');

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AnimalsListComponent implements OnInit {

  animals$;

  constructor(
    private afDb: AngularFireDatabase,
    private seoService: SeoService,
    private state: TransferState
  ) { }

  ngOnInit() {
    this.setMetaTags();

    // If state is available, start with it your observable
    const exists = this.state.get(ANIMALS_KEY, [] as any);

    this.animals$ = this.afDb.list('animals').valueChanges()
      .pipe(
        tap(list => {
          this.state.set(ANIMALS_KEY, list);
        }),
        startWith(exists)
      );
  }

  setMetaTags() {
    // Set SEO Meta Title
    this.seoService.setSeoMetaTags('Animals List');
    // this.title.setTitle('Fruits List');

    // Set Twitter Meta Tags
    this.seoService.setTwitterMetaTags(
      'summary',
      '@cstodor',
      'Angular Firestore Animals',
      'Server-rendered list of animals from Firebase Real Time Database',
      'http://www.amreading.com/wp-content/uploads/MP1414-WILD-ANIMALS-group-827x514-e1471912044205.jpg'
    );
  }

}
