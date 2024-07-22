import { Component, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';
import { CanvasService } from '../canvas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-draw',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, LoadingComponent],
  templateUrl: './draw.component.html',
  styleUrl: './draw.component.css'
})
export class DrawComponent implements AfterViewInit {
  @ViewChild('pixelCanvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;
  private context!: CanvasRenderingContext2D;
  private isDrawing: boolean = false;
  pixels: any[] = []
  finishedDrawing = false;
  username: string = "";

  constructor(
    private canvasService: CanvasService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngAfterViewInit() {
    let paramUsername = this.route.snapshot.paramMap.get('id');
    if (paramUsername != null) {
      this.username = paramUsername;
    }
    let contElm = this.canvas.nativeElement.getContext('2d');
    if (contElm != null) {
      this.context = contElm;
    }
    this.canvasService.getPixelData().subscribe(data => {
      const list = data.split('\n');
      this.context.fillStyle = "#ffffff";
    this.context.fillRect(0, 0, 1000, 500);
      list.forEach(e => {
        let cols = e.split(",");
        if (cols[0] == paramUsername) {
          setTimeout(() => {
            this.drawPixels(e);
          }, 1000);
        }
      });
      this.finishedDrawing = true;
    });
  }
  downloadImage() {
    let canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    if (canvas != null) {
      var dataURL = canvas.toDataURL("image/png");
    var a = document.createElement('a');
    a.href = dataURL
    let userShortened = this.username.split('@')[0]
    a.download = `${userShortened}.png`;
    a.click();
    }
    
}

  drawPixels(row: string) {
    console.log(row);
    let cols = row.split(',');
    let username = cols[0]
    let xCord = +cols[1];
    let yCord = +cols[2];
    let color = "#" + cols[3];
    this.context.fillStyle = color;
    this.context.fillRect(xCord, yCord, 1, 1);
    console.log(color);
  }

  sendUserTo2024Stats() {
    this.router.navigateByUrl(`/2024/${this.username}`);
  }
    
}
