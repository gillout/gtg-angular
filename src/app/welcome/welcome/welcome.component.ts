import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  imageRubriques = [
    { name: 'algebre_de_boole.jpg', alt: 'Boole' },
    { name: 'algorithmie.png', alt: 'Algorithmie' },
    { name: 'uml.png', alt: 'UML' },
    { name: 'modelisation_bdd.png', alt: 'Model_BdD' },
    { name: 'html.png', alt: 'HTML' },
    { name: 'css.png', alt: 'CSS' },
    { name: 'javascript.png', alt: 'JavaScript' },
    { name: 'php.png', alt: 'PHP' },
    { name: 'java.png', alt: 'Java' },
    { name: 'sql.png', alt: 'SQL' },
    { name: 'mysql.png', alt: 'MySQL' },
    { name: 'oracle.png', alt: 'Oracle' }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
