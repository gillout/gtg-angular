import { Component, OnInit } from '@angular/core';
import {Link} from "../../shared/models/link";

@Component({
  selector: 'app-vietnam',
  templateUrl: './vietnam.component.html',
  styleUrls: ['./vietnam.component.scss']
})
export class VietnamComponent implements OnInit {
  recetteLinks: Link[] = [{label: 'Pho', url: '#'}, {label: 'Bo Kho', url: '#'}];

  constructor() { }

  ngOnInit(): void {
  }

}
