import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ranking, WarCord, TopCord, UserColorCount } from '../models';
import { CanvasService } from '../canvas.service';
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
export class HomeComponent implements OnInit {
  allRankings = new Array<Ranking>();
  allUserColorCounts = new Array<UserColorCount>();
  allTopCords = new Array<TopCord>();
  allWarCords = new Array<WarCord>();

  errorAlert: string = "";
  username: string = ""
  showResults:boolean = false;
  showAllStats = true;
  userRanking!: Ranking;
  userColorCount!: UserColorCount;
  topCord!: TopCord;
  warCord: WarCord = new WarCord("", []);
  paramUsername: string = "";

  constructor(
    private canvasService: CanvasService,
    private router: Router
  ) {}

  ngOnInit(): void {
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
  }

  onSubmit() {
    this.errorAlert = "";
    let result = this.allRankings.find(user => {
      return user.userName == this.username;
    });
    if (result == undefined) {
      this.errorAlert = "User not found.";
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
    let paramUsername = this.username.replace('.', '[]');
    this.router.navigateByUrl(`/draw/${this.username}`);
  }
  
}
