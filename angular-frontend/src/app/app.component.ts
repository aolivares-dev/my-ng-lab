import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="content" role="main">
  <span>{{title}} app is runnig!</span>
</h1>
<router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ng-angular';
}
