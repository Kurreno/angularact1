import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  posts = [
    {
      title: 'Mon premier post',
      content: 'blablablablablablablabla',
      loveIts: 0,
      created_at: this.lastUpdate
    },
    {
      title: 'Mon deuxième post',
      content: 'blablablablablablablabla',
      loveIts: 0,
      created_at: this.lastUpdate
    },
    {
      title: 'Encore un post',
      content: 'blablablablablablablabla',
      loveIts: 0,
      created_at: this.lastUpdate
    }
  ];

  constructor() {
  }
}
