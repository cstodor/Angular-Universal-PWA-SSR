import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class CheckForUpdateService {

  constructor(updates: SwUpdate) {
    interval(6 * 60 * 60).subscribe(() => updates.checkForUpdate());
  }
}
