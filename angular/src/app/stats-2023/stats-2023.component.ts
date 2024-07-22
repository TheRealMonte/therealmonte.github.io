import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { Router, ActivatedRoute } from '@angular/router';
import { CanvasService } from '../canvas.service';
import { User, UserColors2023 } from '../models';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-stats-2023',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, LoadingComponent],
  templateUrl: './stats-2023.component.html',
  styleUrl: '../home/home.component.css'
})
export class Stats2023Component implements OnInit {
  showStats: boolean = false;
  username: string ="";
  user!: User;
  userColors!: UserColors2023;
  wasUserFound: boolean = true;
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
      this.canvasService.getUsers(2023).subscribe(data => {
        const list = data.split('\n');
        for (let line of list) {
          let cols = line.split(",");
          if (cols[0] === this.username) {
            console.log(`user found: ${this.username}`);
            this.user = new User(cols[0], +cols[1], +cols[2], +cols[3], +cols[4], +cols[5]);
            console.log(this.user);
            this.wasUserFound = true;
            this.showStats = true;
          }
        }
        if (this.user == undefined) {
          this.showStats = false;
          this.wasUserFound = false;
          this.loading = false;
        } else {
          this.getColorData();
          this.loading = false;
        }
      });
    }

    getColorData() {
      console.log("getting color counts...")
      this.canvasService.getColorCount(2023).subscribe(data => {
        const list = data.split('\n');
        for (let line of list) {
          let cols = line.split(",");
          if (cols[0] === this.username) {
            console.log("found user")
            console.log(line)
            this.userColors = new UserColors2023(+cols[1], +cols[2], +cols[3], +cols[4], +cols[5], +cols[6], +cols[7], +cols[8], +cols[9], +cols[10], +cols[11], +cols[12], +cols[13], +cols[14], +cols[15], +cols[16], +cols[17], +cols[18], +cols[19], +cols[20], +cols[21], +cols[22], +cols[23], +cols[24], +cols[25], +cols[26], +cols[27], +cols[28], +cols[29], +cols[30], +cols[31], +cols[32]);
          }
        }
        console.log("for loop complete")
      });
    }

  sendUserTo2024Stats() {
    this.router.navigateByUrl(`/2024/${this.username}`);
  }

  sendToUsersList(year: number) {
    this.router.navigateByUrl(`/users/${year}`);
  }
  
}
