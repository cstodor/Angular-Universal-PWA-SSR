import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { tap, startWith } from 'rxjs/operators';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { SeoService } from '../seo.service';

const FRUITS_KEY = makeStateKey<any>('fruits');

@Component({
  selector: 'app-fruits-list',
  templateUrl: './fruits-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FruitsListComponent implements OnInit {

  fruits$;

  constructor(
    private fsDb: AngularFirestore,
    private seoService: SeoService,
    private state: TransferState
  ) { }

  ngOnInit() {

    this.setMetaTags();

    // If state is available, start with it your observable
    const exists = this.state.get(FRUITS_KEY, [] as any);

    // Get the animals from the database
    this.fruits$ = this.fsDb.collection('fruits').valueChanges()
      .pipe(
        tap(list => {
          this.state.set(FRUITS_KEY, list);
        }),
        startWith(exists)
      );
  }

  // ssrFirestoreDoc(path: string) {
  //   const exists = this.state.get(FRUIT_KEY, {} as any);
  //   return this.fsDb.doc<any>(path).valueChanges()
  //     .pipe(
  //       tap(fruit => {
  //         this.state.set(FRUIT_KEY, fruit);
  //         // Set Meta Title
  //         this.ss.setSeoMetaTags(fruit.name);
  //         // Set Twitter Meta Tags
  //         this.ss.setTwitterMetaTags('summary', '@cstodor', fruit.name, fruit.descr, fruit.img);
  //       }),
  //       startWith(exists)
  //     );
  // }

  setMetaTags() {
    // Set SEO Meta Title
    this.seoService.setSeoMetaTags('Fruits List');
    // this.title.setTitle('Fruits List');

    // Set Twitter Meta Tags
    this.seoService.setTwitterMetaTags(
      'summary',
      '@cstodor',
      'Angular Firestore Fruits',
      'Server-rendered list of fruits from Cloud Firestore in Angular',
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg'
    );
  }

}
