import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  imports: [FormsModule, NzMenuModule, NzSwitchModule],
})
export class ShellComponent {}
