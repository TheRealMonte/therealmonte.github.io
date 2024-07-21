import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CanvasService } from '../canvas.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, LoadingComponent],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent implements OnInit {
  year: number = 0;
  users: {username: string, userRank: number}[] =[];
  loading: boolean = true
  ngOnInit(): void {
    let paramYear = this.route.snapshot.paramMap.get('id');
    if (paramYear != null) {
      this.year = +paramYear;
    }
    if (this.year === 2023) {
      this.canvasService.get2023Users().subscribe(data => {
        const list = data.split('\n');
        list.forEach(line => {
          let cols = line.split(",");
          let currUsername = cols[0];
          let currUserRank = +cols[1];
          let currUser = {username: currUsername, userRank: currUserRank};
          this.users.push(currUser)
        });
      });
    }
    this.loading = false;
  }

  constructor(
    private route: ActivatedRoute,
    private canvasService: CanvasService,
    private router: Router
  ) {}

  goToUser(username: string) {
    if (this.year === 2024) {
      this.router.navigateByUrl(`/2024/${username}`);
    }
    if (this.year === 2023) {
      this.router.navigateByUrl(`/2023/${username}`);
    }
  }
}
