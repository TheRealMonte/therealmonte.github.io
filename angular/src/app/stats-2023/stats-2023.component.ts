import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { Router, ActivatedRoute } from '@angular/router';
import { CanvasService } from '../canvas.service';

@Component({
  selector: 'app-stats-2023',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './stats-2023.component.html',
  styleUrl: '../home/home.component.css'
})
export class Stats2023Component implements OnInit {
  showAllStats: boolean = true;
  username: string ="";
  
  ngOnInit(): void {
    let paramUsername = this.route.snapshot.paramMap.get('id');
    if (paramUsername != null) {
      this.username = paramUsername;
    }
  }

  constructor(
    private canvasService: CanvasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
}
