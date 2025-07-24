import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList implements OnInit {
  categories: any[] = [];

  ngOnInit() {
    const stored = localStorage.getItem('categories');
    this.categories = stored ? JSON.parse(stored) : [
      { id: 1, name: 'Electronics', image: 'electronics.jpg', description: 'Thiết bị điện tử' },
      { id: 2, name: 'Books', image: 'books.jpg', description: 'Sách' },
      { id: 3, name: 'Clothing', image: 'clothing.jpg', description: 'Thời trang' },
      { id: 4, name: 'Home & Kitchen', image: 'home.jpg', description: 'Gia dụng' },
      { id: 5, name: 'Sports & Outdoors', image: 'sports.jpg', description: 'Thể thao & ngoài trời' },
    ];
    localStorage.setItem('categories', JSON.stringify(this.categories)); // Lưu lần đầu nếu chưa có
  }

  deleteCategory(id: number) {
    if (confirm('Bạn có chắc muốn xóa danh mục này?')) {
      this.categories = this.categories.filter(cat => cat.id !== id);
      localStorage.setItem('categories', JSON.stringify(this.categories));
    }
  }
}
