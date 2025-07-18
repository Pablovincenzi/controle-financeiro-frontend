import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  standalone: true,
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  protected title = 'shell';
}
