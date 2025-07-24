// src/app/product.service.ts
import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [];

  constructor() {
    const stored = localStorage.getItem('products');
    this.products = stored ? JSON.parse(stored) : [
      { id: 1, name: 'Laptop', price: 1000, image: 'laptop.jpg', description: 'A laptop' },
      { id: 2, name: 'Phone', price: 500, image: 'phone.jpg', description: 'A phone' },
    ];
  }

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    // Gán ID mới
    product.id = this.getNextId();
    this.products.push(product);
    this.save();
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
    this.save();
  }

  private save() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  private getNextId(): number {
    const ids = this.products.map(p => p.id);
    return ids.length ? Math.max(...ids) + 1 : 1;
  }
}
