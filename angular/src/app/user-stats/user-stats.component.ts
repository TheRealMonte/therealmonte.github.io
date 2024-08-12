import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { Router, ActivatedRoute } from '@angular/router';
import { CanvasService } from '../canvas.service';
import { User, UserColors2024 } from '../models';
import { LoadingComponent } from "../loading/loading.component";
import { CommonModule } from '@angular/common';

class YearStats {
  constructor(
      public year: number,
      public numberOfusers: number,
      public otherYear: number[]
  ) {}
}

@Component({
  selector: 'app-user-stats',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, LoadingComponent, CommonModule],
  templateUrl: './user-stats.component.html',
  styleUrl: '../home/home.component.css'
})

export class UserStatsComponent implements OnInit {
  year: number = 0;
  username: string = "";
  showResults: boolean = false;
  user!: User;
  userColors!: UserColors2024;
  wasUserFound: boolean = true;
  loading: boolean = true;
  years = [new YearStats(2024, 1914, [2023]), new YearStats(2023, 2208, [2024])];
  yearStat!: YearStats;
  buttonColors: string[] = ['btn magenta', 'btn azure', 'btn rust', 'btn red'];

  constructor(
    private canvasService: CanvasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let paramYear = this.route.snapshot.paramMap.get('year');
    if (paramYear != null) {
      this.year = +paramYear;
      let getYearStats = this.years.find(year => {
        return year.year === this.year;
      });
      if (getYearStats != null) {
        this.yearStat = getYearStats;
      } else {
        this.yearStat = this.years[0];
        this.year = this.yearStat.year;
      }
    }
    let paramUsername = this.route.snapshot.paramMap.get('username');
    if (paramUsername != null) {
      this.username = paramUsername;
    }
    this.getUserData(this.year);
  }

  getUserData(year: number) {
    this.canvasService.getUsers(year).subscribe(data => {
      const list = data.split('\n');
      for (let line of list) {
        let cols = line.split(",");
        if (cols[0] === this.username) {
          this.user = new User(cols[0], +cols[1], +cols[2], +cols[3], +cols[4], +cols[5]);
          this.wasUserFound = true;
          this.showResults = true;
        }
      }
      if (this.user == undefined) {
        this.showResults = false;
        this.wasUserFound = false;
        this.loading = false;
      } else {
        this.getColorData(year);
        this.loading = false;
      }
    });
  }

  getColorData(year: number) {
    this.canvasService.getColorCount(year).subscribe(data => {
      const list = data.split('\n');
      for (let line of list) {
        let cols = line.split(",");
        if (cols[0] === this.username) {
          if (this.year !== 2023) {
            this.userColors = new UserColors2024(+cols[1], +cols[2], +cols[3], +cols[4], +cols[5], +cols[6], +cols[7], +cols[8], +cols[9], +cols[10], +cols[11], +cols[12], +cols[13], +cols[14], +cols[15], +cols[16], +cols[17], +cols[18], +cols[19], +cols[20], +cols[21], +cols[22], +cols[23], +cols[24], +cols[25], +cols[26], +cols[27], +cols[28], +cols[29], +cols[30], +cols[31], +cols[32], +cols[33], +cols[34]);
          } else {
            this.userColors = new UserColors2024(+cols[1], +cols[2], +cols[3], +cols[4], +cols[5], +cols[6], +cols[7], +cols[8], +cols[9], +cols[10], +cols[11], +cols[12], +cols[13], +cols[14], +cols[15], +cols[16], +cols[17], +cols[18], +cols[19], +cols[20], +cols[21], +cols[22], +cols[23], +cols[24], +cols[25], +cols[26], +cols[27], +cols[28], +cols[29], +cols[30], +cols[31], +cols[32], 0, 0);
          }
          
        }
      }
    });
  }

  sendToUsersList() {
    this.router.navigateByUrl(`/${this.year}/users`);
  }

  sendUserToAnotherStatsYear(year: number) {
    this.router.navigateByUrl(`/${year}/user/${this.username}`);
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }

  sendUserToDraw() {
    this.router.navigateByUrl(`/${this.year}/draw-user/${this.username}`);
  }

}
