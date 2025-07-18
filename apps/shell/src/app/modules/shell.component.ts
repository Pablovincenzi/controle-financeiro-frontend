import { NzInputGroupComponent } from 'ng-zorro-antd/input';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  template: `<h1>TESTE</h1>`,
  imports: [NzInputGroupComponent],
})
export class ShellComponent {}
