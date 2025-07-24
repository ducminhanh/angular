import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-add.html',
  styleUrl: './category-add.css',
})
export class CategoryAdd {
  category = {
    id: 0,
    name: '',
    image: '',
    description: '',
  };

  constructor(private router: Router) {}

  addCategory() {
    const stored = localStorage.getItem('categories');
    const categories = stored ? JSON.parse(stored) : [];

    this.category.id = categories.length ? Math.max(...categories.map((c: any) => c.id)) + 1 : 1;
    categories.push(this.category);
    localStorage.setItem('categories', JSON.stringify(categories));

    alert('✅ Đã thêm danh mục!');
    this.router.navigate(['/categories']);
  }
}
