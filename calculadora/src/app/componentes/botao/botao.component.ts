import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent {
  @Input() label: string = '';
  @Output() clicar = new EventEmitter<void>();

  aoClicar() {
    this.clicar.emit();
  }
}
