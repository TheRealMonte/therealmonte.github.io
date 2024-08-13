import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { LoadingComponent } from "../loading/loading.component";
import { overviewData, Overview, ColorCount, Link, Tag } from './homeData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NavbarComponent, FooterComponent, LoadingComponent, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  showYear: number = 2024;
  yearOverview!: Overview;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    let paramYear = this.route.snapshot.paramMap.get('year');
    if (paramYear != null) {
      this.showYear = +paramYear;
      let findOverview = overviewData.find(overview => {
        return overview.year === this.showYear;
      });
      if (findOverview) {
        this.yearOverview = findOverview;
      } else {
        this.router.navigateByUrl('/2024');
      }
    } else {
      this.showYear = 2024;
      this.yearOverview = overviewData[0];
    }
  }

  navigateTo(link: string) {
    this.router.navigateByUrl(link);
  }

  showColorIMG(color: string) {
    this.router.navigateByUrl(`/draw-color/${this.showYear}/${color}`);
  }

  seeAllUser() {
    this.router.navigateByUrl(`${this.showYear}/users`);
  }
  view2024Graphs() {
    this.router.navigateByUrl(`${this.showYear}/graphs`);
  }
}
