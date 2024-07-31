import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NavbarComponent, FooterComponent, LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showYear: number = 2024;
  username: string = "";

  constructor(
    private router: Router
  ) {}

  changeYear() {
    if (this.showYear === 2023) {
      this.showYear = 2024;
    } else {
      this.showYear = 2023;
    }
  }

  showColorIMG(color: string) {
    this.router.navigateByUrl(`/draw-color/${color}`);
  }

  seeAllUser() {
    this.router.navigateByUrl(`/users/${this.showYear}`);
  }
  view2024Graphs() {
    this.router.navigateByUrl('/graphs/2024');
  }
}
