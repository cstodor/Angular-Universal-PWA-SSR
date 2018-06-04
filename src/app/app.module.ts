import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// Service Worker
import { ServiceWorkerModule } from '@angular/service-worker';
// Material Design
import { MatButtonModule, MatCardModule, MatCardTitle, MatCardContent, MatCardImage, MatToolbarModule } from '@angular/material';
// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';
// AngularFire2 Modules
import { AngularFireModule, FirebaseOptionsToken, FirebaseAppConfigToken } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// Environment
import { environment } from '../environments/environment';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Services
import { CheckForUpdateService } from './check-for-update.service';
import { LogUpdateService } from './log-update.service';
import { PromptUpdateService } from './prompt-update.service';
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
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatToolbarModule,
    FlexLayoutModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    { provide: FirebaseOptionsToken, useValue: environment.firebase },
    { provide: FirebaseAppConfigToken, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
