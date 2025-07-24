import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css'],
})
export class UserList {
  users: any[] = [];

  ngOnInit() {
    const storedUsers = localStorage.getItem('users');
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
  }

  deleteUser(id: number): void {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa người dùng này không?');
    if (!confirmDelete) return;

    this.users = this.users.filter(user => user.id !== id);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
