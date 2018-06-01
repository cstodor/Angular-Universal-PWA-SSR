import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransferState, makeStateKey, StateKey } from '@angular/platform-browser';

import { AngularFirestore } from 'angularfire2/firestore';
import { tap, startWith } from 'rxjs/operators';

import { SeoService } from '../seo.service';

const FRUIT_KEY = makeStateKey<any>('fruit');

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.component.html',
  styleUrls: ['./fruit-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FruitDetailsComponent implements OnInit {

  fruit$;

  constructor(
    private fsDb: AngularFirestore,
    private route: ActivatedRoute,
    private ss: SeoService,
    private state: TransferState
  ) { }

  ngOnInit() {
    // get the fruit id from route
    const id = this.route.snapshot.paramMap.get('name').toLowerCase();

    // get the fruit details from firestore
    this.fruit$ = this.ssrFirestoreDoc(`fruits/${id}`);
  }

  ssrFirestoreDoc(path: string) {
    const exists = this.state.get(FRUIT_KEY, {} as any);
    return this.fsDb.doc<any>(path).valueChanges()
      .pipe(
        tap(fruit => {
          this.state.set(FRUIT_KEY, fruit);
          // Set Meta Title
          this.ss.setSeoMetaTags(fruit.name);
          // Set Twitter Meta Tags
          this.ss.setTwitterMetaTags('summary', '@cstodor', fruit.name, fruit.descr, fruit.img);
        }),
        startWith(exists)
      );
  }

}
