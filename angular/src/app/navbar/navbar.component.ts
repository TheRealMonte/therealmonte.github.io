import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() year: number = 2024;
  @Input() username: string = '';
  searchString: string = '';
  @Input() showSearch: boolean = true;
  constructor(
    private router: Router
  ) {}

  onSubmit() {
    if (this.searchString != this.username) {
      this.username = this.searchString;
      this.router.navigateByUrl(`/${this.year}/user/${this.username}`);
      
    setTimeout(() => {
      window.location.reload();
    }, 50);
    }
  }

  seeAllUser() {
    this.router.navigateByUrl(`/${this.year}/users`);
  }

  getLogoYear() {
    return `https://raw.githubusercontent.com/TheRealMonte/images/main/${this.year}/logo${this.year}.png`
  }
}
