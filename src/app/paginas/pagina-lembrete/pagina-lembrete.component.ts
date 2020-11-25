import { Component } from '@angular/core';
import { Lembrete } from 'src/app/lembretes/lembrete.model';

@Component({
  selector: 'app-pagina-lembrete',
  templateUrl: './pagina-lembrete.component.html',
  styleUrls: ['./pagina-lembrete.component.css']
})
export class PaginaLembreteComponent  {

  lembretes: Lembrete[] = [];
  onClienteAdicionado(lembrete) {
    this.lembretes = [...this.lembretes, lembrete];
  }

}
