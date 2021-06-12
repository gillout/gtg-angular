import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  imageRubriques = [
    { src: 'assets/images/algebre_de_boole.jpg', alt: 'Boole' },
    { src: 'assets/images/algorithmie.png', alt: 'Algorithmie' },
    { src: 'assets/images/uml.png', alt: 'UML' },
    { src: 'assets/images/modelisation_bdd.png', alt: 'Model_BdD' },
    { src: 'assets/images/html.png', alt: 'HTML' },
    { src: 'assets/images/css.png', alt: 'CSS' },
    { src: 'assets/images/javascript.png', alt: 'JavaScript' },
    { src: 'assets/images/php.png', alt: 'PHP' },
    { src: 'assets/images/java.png', alt: 'Java' },
    { src: 'assets/images/sql.png', alt: 'SQL' },
    { src: 'assets/images/mysql.png', alt: 'MySQL' },
    { src: 'assets/images/oracle.png', alt: 'Oracle' }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
