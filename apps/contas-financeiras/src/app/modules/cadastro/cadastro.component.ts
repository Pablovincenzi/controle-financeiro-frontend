import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  ngOnInit(): void {
    console.log('teste');
  }
}
