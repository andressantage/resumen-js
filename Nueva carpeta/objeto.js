class Rectangle {
    constructor(base, height) {
      this.base = base;
      this.height = height;
    }
  
    get perimeter() {
      return `${this.calcPerimeter(this.base, this.height)}cm`;
    }
  
    get area() {
      return `${this.calcArea(this.base, this.height)}cm2`;
    }
  
    calcPerimeter(base, height) {
      return base * 2 + height * 2;
    }
  
    calcArea(base, height) {
      return base * height;
    }
  }
  
  class Circle {
    constructor(radio) {
      this.radio = radio;
    }
  
    get perimeter() {
      return `${this.calcPerimeter(this.radio)}cm`;
    }
  
    get area() {
      return `${this.calcArea(this.radio)}cm2`;
    }
  
    calcPerimeter(radio) {
      return 2 * Math.PI * radio;
    }
  
    calcArea(radio) {
      return Math.PI * radio ** 2;
    }
  }