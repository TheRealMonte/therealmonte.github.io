import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
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
      if (this.year === 2024) {
        this.router.navigateByUrl(`/2024/${this.username}`);
      } else {
        this.router.navigateByUrl(`/2023/${this.username}`);
      }
      
    setTimeout(() => {
      window.location.reload();
    }, 50);
    }
  }

  seeAllUser() {
    this.router.navigateByUrl(`/users/${this.year}`);
  }
}
