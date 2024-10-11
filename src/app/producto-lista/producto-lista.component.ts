import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-lista.component.html',
})
export class ProductoListaComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productoServicio: ProductoService,
    private enrutador: Router
  ) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  private obtenerProductos(): void {
    this.productoServicio.obtenerProductosLista().subscribe({
      next: (datos) => {
        this.productos = datos;
      },
      error: (error) => {
        console.error('Error al obtener los productos:', error);
      },
    });
  }

  editarProducto(idProducto: number) {
    this.enrutador.navigate(['editar', idProducto]);
  }
}
