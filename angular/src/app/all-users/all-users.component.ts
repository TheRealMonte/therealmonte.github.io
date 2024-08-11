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
  users: { username: string, userRank: number }[] = [];
  loading: boolean = true
  ngOnInit(): void {
    let paramYear = this.route.snapshot.paramMap.get('year');
    if (paramYear != null) {
      this.year = +paramYear;
    }
    this.canvasService.getUsers(this.year).subscribe(data => {
      const list = data.split('\n');
      list.forEach(line => {
        let cols = line.split(",");
        let currUsername = cols[0];
        let currUserRank = +cols[1];
        let currUser = { username: currUsername, userRank: currUserRank };
        if (!isNaN(currUser.userRank)) {
          this.users.push(currUser);
        }
      });
    });

    this.loading = false;
  }

  constructor(
    private route: ActivatedRoute,
    private canvasService: CanvasService,
    private router: Router
  ) { }

  goToUser(username: string) {
    this.router.navigateByUrl(`/${this.year}/user/${username}`);
  }
}
