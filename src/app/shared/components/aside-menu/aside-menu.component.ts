import {Component, Input, OnInit} from '@angular/core';
import {Link} from "../../models/link";

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {
  @Input() title;
  @Input() links: Link[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
