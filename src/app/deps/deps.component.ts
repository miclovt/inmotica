import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-deps',
  templateUrl: './deps.component.html',
  styleUrls: ['./deps.component.scss']
})
export class DepsComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  selectDep(idDep: number) {
    this.data.changeDep(idDep);
    console.log(this.data.currentDep);
  }

}
