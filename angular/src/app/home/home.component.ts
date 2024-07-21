import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showYear: number = 2024;
  errorAlert: string = "";
  username: string = "";

  constructor(
    private router: Router
  ) {}

  onSubmit() {
    if (this.showYear === 2024) {
      this.router.navigateByUrl(`/2024/${this.username}`);
    }
    if (this.showYear === 2023) {
      this.router.navigateByUrl(`/2023/${this.username}`);
    }
  }

  changeYear(year: number) {
    this.showYear = year;
  }

  showColorIMG(color: string) {
    this.router.navigateByUrl(`/draw-color/${color}`);
  }

  

  
  
}
