import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// AngularFire2 Modules
import { AngularFireModule, FirebaseOptionsToken } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
// Service Worker
import { ServiceWorkerModule } from '@angular/service-worker';
// Material Modules
import { MatCardModule } from '@angular/material';
// FLex Layout
import { FlexLayoutModule } from '@angular/flex-layout';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { FruitDetailsComponent } from './fruit-details/fruit-details.component';
import { FruitsListComponent } from './fruits-list/fruits-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrimaryMenuComponent } from './shared/primary-menu/primary-menu.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitDetailsComponent,
    FruitsListComponent,
    HeaderComponent,
    FooterComponent,
    PrimaryMenuComponent,
    AnimalsListComponent,
    AnimalDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule, // For State Transfer
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatCardModule,
    FlexLayoutModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [], // Regsiters Service Worker
    AppRoutingModule,
  ],
  providers: [
    { provide: FirebaseOptionsToken, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
