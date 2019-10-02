import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private idDep = new BehaviorSubject(1001);
  currentDep = this.idDep.asObservable();
  constructor() { }

  changeDep(id: number) {
    this.idDep.next(id);
  }
}
