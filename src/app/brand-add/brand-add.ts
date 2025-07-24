import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brand-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './brand-add.html',
  styleUrls: ['./brand-add.css'],
})
export class BrandAdd {
  brand = {
    id: 0,
    name: '',
    logo: '',
    description: '',
  };

  constructor(private router: Router) {}

  addBrand(): void {
    const existingBrands = JSON.parse(localStorage.getItem('brands') || '[]');
    existingBrands.push(this.brand);
    localStorage.setItem('brands', JSON.stringify(existingBrands));
    alert('Thêm Brand thành công!');
    this.router.navigate(['/brands']);
  }
}
