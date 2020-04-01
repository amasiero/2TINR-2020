import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parangaricutirimiruaru';
  photos = [
    {
      url: 'http://i.annihil.us/u/prod/marvel/i/mg/a/10/528d369de3e4f.jpg',
      description: 'Spider-Girl (Anya Corazon)'
    },
    {
      url: 'http://i.annihil.us/u/prod/marvel/i/mg/1/70/4c003adccbe4f.jpg',
      description: 'Spider-Girl (May Parker)'
    },
    {
      url: 'http://i.annihil.us/u/prod/marvel/i/mg/c/90/54edf8eb8f102.jpg',
      description: 'Spider-Gwen (Spider-Gwen)'
    },
    {
      url: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg',
      description: 'Spider-Man'
    }
  ];
}
