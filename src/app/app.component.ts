import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // currency pipe
  precio: number;
  decimal: number;
  date: Date;
  random: number;
  user: any;
  cadena: string;
  lista: string[];
  max: number;
  min: number;
  prom: Promise<string>;
  promPosts: Promise<any[]>;
  constructor(private postService: PostService) {
    this.precio = 198.87344;
    this.decimal = 19.87344454;
    this.date = new Date(); // devuelve fecha actual
    this.random = Math.random();
    this.user = { name: 'John', age: 28, country: 'Argentina' };
    this.cadena = 'Esta es una cadena de prueba';
    this.lista = ['casa', 'barco', 'ciudad', 'tierra', 'campo', 'escuela', 'mar'];
    this.max = this.lista.length;
    this.min = 0;

    this.prom = new Promise<string>((resolve, reject) => {
      setTimeout(() => resolve('La promesa se ha resuelto'), 3000);
    });
    this.promPosts = this.postService.getAll();

  }

  ngOnInit() {
    setInterval(() => this.date = new Date(), 1000);
  }
}
