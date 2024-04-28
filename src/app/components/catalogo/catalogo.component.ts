import { Component } from '@angular/core';
import {CartServicesService} from './../../services/cart-services.service';
import { ApiService } from '../../services/api.service';
import { Producto } from '../dto/Producto.Dto';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})


export class CatalogoComponent {

  public products: Producto[] = [];

	// inyectar la dependencia del servicio en el constructor.
  constructor(
    private cartServicesService: CartServicesService,
    private apiService: ApiService 
  ){}

ngOnInit(): void {
  this.apiService.getProducts()
    .subscribe((res:any) => {
      this.products = res;
    });
}

  
  // actualizar el método para añadir un producto al carrito mediante el servicio
  addToCart(product: any) { 
	  // utilizacion del metodo addTocart del servicio cartServicesService 
    this.cartServicesService.addToCart(product)
    // utilizacion del metodo getCart del servicio cartServicesService 
    //para mostrar en el console.log los producto añadidos
    console.log( this.cartServicesService.getCart() )
  }
	

}