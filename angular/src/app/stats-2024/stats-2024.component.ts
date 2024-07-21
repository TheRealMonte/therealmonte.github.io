import { Component, OnInit } from '@angular/core';
import { Ranking, TopCord, UserColorCount, WarCord } from '../models';
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
  allRankings = new Array<Ranking>();
  allUserColorCounts = new Array<UserColorCount>();
  allTopCords = new Array<TopCord>();
  allWarCords = new Array<WarCord>();

  wasUserFound: boolean = true;
  username: string = ""
  showResults:boolean = false;
  showAllStats = true;
  userRanking!: Ranking;
  userColorCount!: UserColorCount;
  topCord!: TopCord;
  warCord: WarCord = new WarCord("", []);
  loading: boolean = true;

  ngOnInit(): void {
    let paramUsername = this.route.snapshot.paramMap.get('id');
    if (paramUsername != null) {
      this.username = paramUsername;
    }
    this.canvasService.getAllRankings().subscribe((data) => {
      this.allRankings = data;
    });
    this.canvasService.getAllUserColorCounts().subscribe((data) => {
      this.allUserColorCounts = data;
    });
    this.canvasService.getAllTopCords().subscribe((data) => {
      this.allTopCords = data;
    });
    this.canvasService.getAllWarCords().subscribe((data) => {
      this.allWarCords = data;
    });
    this.tryGetUserInfo();
    this.loading = false;
  }

  constructor(
    private canvasService: CanvasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  tryGetUserInfo() {
    this.wasUserFound = true;
    let result = this.allRankings.find(user => {
      return user.userName == this.username;
    });
    alert(JSON.stringify(result));
    if (result == undefined) {
      this.wasUserFound = false;
      this.showResults = false;
      this.showAllStats = true;
    } else {
      this.userRanking = result;
      this.showResults = true;
      this.showAllStats = false;
      let colorResult = this.allUserColorCounts.find(user => {
        return user.userName == this.username;
      });
      if (colorResult != undefined) {
        this.userColorCount = colorResult;
      }
      let userTopCored = this.allTopCords.find(user => {
        return user.userName == this.username;
      });
      if (userTopCored != undefined) {
        this.topCord = userTopCored;
      }
      let userWarCord = this.allWarCords.find(user => {
        return user.coordinate == this.topCord.topCord;
      });
      if (userWarCord == undefined) {
        this.warCord = new WarCord("", [])
      } else {
        this.warCord = userWarCord;
      }
    }
  }

  sendUserToDraw() {
    this.router.navigateByUrl(`/draw-user/${this.username}`);
  }

}
