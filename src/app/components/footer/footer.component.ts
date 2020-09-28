import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  listMenu = [
    { icone: 'home', link: 'menu' },
    { icone: 'search', link: 'consultas' },
    { icone: 'chat', link: 'chat' },
    { icone: 'sino', link: '' },
    { icone: 'settings', link: '' },
  ];

  constructor(private route: Router) {}

  ngOnInit(): void {}

  redirect(item) {
    switch (item) {
      case 'chat':
        this.route.navigate(['/chat']);
        break;
      case 'consultas':
        this.route.navigate(['/consultas']);
        break;
      case 'menu':
        this.route.navigate(['/menu']);
        break;
      case '':
        this.route.navigate(['/']);
    }
  }
}
