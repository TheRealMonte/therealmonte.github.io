import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink, RouterOutlet],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  constructor(
    private router: Router,
  ) {}
  sendToUsersList(year: number) {
    this.router.navigateByUrl(`/users/${year}`);
  }
}
