import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-add.html',
  styleUrls: ['./user-add.css'],
})
export class UserAdd {
  user = {
    id: 0,
    name: '',
    email: '',
    password: '',
  };

  constructor(private router: Router) {}

  addUser() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(this.user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Thêm người dùng thành công!');
    this.router.navigate(['/users']);
  }
}
