import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-add.html',
  styleUrls: ['./product-add.css']
})
export class ProductAdd {
  product = {
    id: 0,
    name: '',
    price: 0,
    image: '',
    description: ''
  };

  constructor(private productService: ProductService, private router: Router) {}

  saveProduct() {
    this.productService.addProduct(this.product);
    alert('thêm thành công sản phẩm mới!');
    this.router.navigate(['/products']);
  }
}
