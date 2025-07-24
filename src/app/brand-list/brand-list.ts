import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-list.html',
  styleUrls: ['./brand-list.css'],
})
export class BrandList implements OnInit {
  brands = [
    {
      id: 1,
      name: 'Apple',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      description: 'Chuyên về các sản phẩm điện tử cao cấp.',
    },
    {
      id: 2,
      name: 'Samsung',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
      description: 'Tập đoàn công nghệ hàng đầu Hàn Quốc.',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedBrands = JSON.parse(localStorage.getItem('brands') || '[]');
    if (storedBrands.length) {
      this.brands = storedBrands;
    }
  }

  deleteBrand(id: number): void {
    this.brands = this.brands.filter((brand) => brand.id !== id);
    localStorage.setItem('brands', JSON.stringify(this.brands));
  }

  goToAddBrand(): void {
    this.router.navigate(['/brands/create']);
  }
}
