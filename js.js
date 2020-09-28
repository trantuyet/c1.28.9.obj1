function Rectangle (width, height) {
    this.width= width ;
    this.height = height;

    this.getPerimeter = function  () {
        let perimeter = (this.width + this.height ) *2 ;
        return perimeter ;
    }
    this.getWidth = function () {
        return this.width ;
    }

}
let Rectangle1 = new Rectangle(30, 50) ;