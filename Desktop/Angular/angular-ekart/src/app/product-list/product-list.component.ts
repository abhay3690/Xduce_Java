import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // name = "Abhay Suthar";
  addToCart: number = 0;
  product={
    name: 'Iphone 13',
  price:  899,
  color: 'red',  
  discount: 8.5,
  inStocks : 5,
  pImage:'assets/images/iphone.png'
  }
  getDicountedPrice(){
    this.product.price-(this.product.discount*this.product.price/100)
  }
  onNameChange(event:any){
// this.name = event.target.value;    
  }
  decrementValue(){
     if(this.addToCart>0){
      this.addToCart--;
    }
  }
  incrementValue(){
    if(this.addToCart<this.product.inStocks){
      this.addToCart++;
    } 
   }
}
