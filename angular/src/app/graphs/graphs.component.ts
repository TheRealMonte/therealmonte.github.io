import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ActivatedRoute } from '@angular/router';
import { CanvasService } from '../canvas.service';

@Component({
  selector: 'app-graphs',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.css'
})
export class GraphsComponent implements OnInit {
  year: number = 0;
  piechartImageURL: string = "";
  pixelsPlacedImageURL: string = "";
  heatmapImageURL: string = "";

  constructor(
    private route: ActivatedRoute,
    private canvasService: CanvasService
  ) {}

  ngOnInit(): void {
    let paramYear = this.route.snapshot.paramMap.get('year');
    if (paramYear != null) {
      this.year = this.canvasService.checkIfYearHasStats(+paramYear);
      this.piechartImageURL = `https://raw.githubusercontent.com/TheRealMonte/images/main/${this.year}/graphs/pie-chart-total-color-count.png`;
      this.pixelsPlacedImageURL = `https://raw.githubusercontent.com/TheRealMonte/images/main/${this.year}/graphs/pixels-placed-per-minute.png`;
      this.heatmapImageURL = `https://raw.githubusercontent.com/TheRealMonte/images/main/${this.year}/graphs/heatmap-with-legend.png`;
    }
  }


  
}
