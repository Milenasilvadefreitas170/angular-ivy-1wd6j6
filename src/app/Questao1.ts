export class Triangulo{
  lado1: number;
  lado2: number;
  lado3: number;

  VerificarTriangulo(): boolean {
  if (
      (this.lado1 < this.lado2 + this.lado3)
      && (this.lado2 < this.lado1 + this.lado3)
      && (this.lado3 < this.lado1 + this.lado2)
     ) {
       return true;
       } else {
       return false;
}
}
}