import { Component, OnInit } from '@angular/core';
import { Ranking, TopCord, User, UserColorCount, UserColors2024, WarCord } from '../models';
import { CanvasService } from '../canvas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-stats-2024',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, LoadingComponent],
  templateUrl: './stats-2024.component.html',
  styleUrl: '../home/home.component.css'
})
export class Stats2024Component implements OnInit {
  showResults: boolean = true;
  username: string ="";
  user!: User;
  userColors!: UserColors2024;
  wasUserFound: boolean = false;
  loading: boolean = true;

  ngOnInit(): void {
    let paramUsername = this.route.snapshot.paramMap.get('id');
    if (paramUsername != null) {
      this.username = paramUsername;
    }
    this.getUserData();
    this.loading = false;
  }

  constructor(
    private canvasService: CanvasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getUserData() {
    this.canvasService.getUsers(2024).subscribe(data => {
      const list = data.split('\n');
      for (let line of list) {
        let cols = line.split(",");
        if (cols[0] === this.username) {
          console.log(`user found: ${this.username}`);
          this.user = new User(cols[0], +cols[1], +cols[2], +cols[3], +cols[4], +cols[5]);
          console.log(this.user);
          this.wasUserFound = true;
          this.showResults = true;
        }
      }
      this.getColorData();
    });
  }

  getColorData() {
    console.log("getting color counts...")
    this.canvasService.getColorCount(2024).subscribe(data => {
      const list = data.split('\n');
      for (let line of list) {
        let cols = line.split(",");
        if (cols[0] === this.username) {
          console.log("found user")
          console.log(line)
          this.userColors = new UserColors2024(+cols[1], +cols[2], +cols[3], +cols[4], +cols[5], +cols[6], +cols[7], +cols[8], +cols[9], +cols[10], +cols[11], +cols[12], +cols[13], +cols[14], +cols[15], +cols[16], +cols[17], +cols[18], +cols[19], +cols[20], +cols[21], +cols[22], +cols[23], +cols[24], +cols[25], +cols[26], +cols[27], +cols[28], +cols[29], +cols[30], +cols[31], +cols[32], +cols[33], +cols[34]);
        }
      }
      console.log("for loop complete")
    });
  }

  sendUserTo2023Stats() {
    this.router.navigateByUrl(`/2023/${this.username}`);
  }

  sendUserToDraw() {
    this.router.navigateByUrl(`/draw-user/${this.username}`);
  }

}
