import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-projekt';
  something = '';
  things = ['Home', 'car', 'Try Out'];

  setName(event: Event) {
    this.something = (event.target as HTMLInputElement).value;
  }

  click() {
    console.log(this.something)
    this.things.push.apply(this.something);
    this.things.push("hello");
  }

}
