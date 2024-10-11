import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductoListaComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'inventario-app';
}
