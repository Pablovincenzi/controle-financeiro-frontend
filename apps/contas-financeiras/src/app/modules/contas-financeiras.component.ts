import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `<router-outlet></router-outlet>`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: var(--background);
      }
    `,
  ],
})
export class ContasFinanceirasComponent implements OnInit {
  ngOnInit(): void {
    console.log('tse');
  }
}
