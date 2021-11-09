
import { Component, VERSION } from '@angular/core'
import { Triangulo } from './triangulo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
)}
export class AppComponent  {
  resultado: string;
  triangulo: Triangulo;
  
  construct() {
    this.triangulo = new Triangulo();
     }
     verificarClick(): void {
       this.resultado = this.triangulo.verificarTriangulo();
     }
}

