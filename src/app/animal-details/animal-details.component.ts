import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransferState, makeStateKey, StateKey } from '@angular/platform-browser';

import { AngularFireDatabase } from 'angularfire2/database';
import { tap, startWith } from 'rxjs/operators';

import { SeoService } from '../seo.service';

const ANIMAL_KEY = makeStateKey<any>('animal');

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AnimalDetailsComponent implements OnInit {

  animal$;

  constructor(
    private afDb: AngularFireDatabase,
    private route: ActivatedRoute,
    private ss: SeoService,
    private state: TransferState
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('name').toLowerCase();

    this.animal$ = this.getAnimalDetails(`animals/${id}`);
  }

  getAnimalDetails(path: string) {
    const exists = this.state.get(ANIMAL_KEY, {} as any);
    return this.afDb.object<any>(path).valueChanges()
      .pipe(
        tap(animal => {
          this.state.set(ANIMAL_KEY, animal);
          // Set Meta Title
          this.ss.setSeoMetaTags(animal.name);
          // Set Twitter Meta Tags
          this.ss.setTwitterMetaTags('summary', '@cstodor', animal.name, animal.descr, animal.img);
        }),
        startWith(exists)
      );
  }

}
