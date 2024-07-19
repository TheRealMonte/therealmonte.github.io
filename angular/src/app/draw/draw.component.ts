import { Component, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-draw',
  standalone: true,
  imports: [],
  templateUrl: './draw.component.html',
  styleUrl: './draw.component.css'
})
export class DrawComponent implements AfterViewInit {
  @ViewChild('pixelCanvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;
  private context!: CanvasRenderingContext2D;
  private isDrawing: boolean = false;
  count:string = "";

  ngAfterViewInit() {
    let contElm = this.canvas.nativeElement.getContext('2d');
    if (contElm != null) {
      this.context = contElm;
    }
    this.drawPixels();
  }
  rows = ['771,322,#FDE111', '341,268,#F14FB4', '199,135,#F30F0C', '321,222,#000000', '264,239,#149CFF', '455,176,#000000', '233,261,#000000', '282,238,#000000', '325,223,#000000', '240,280,#382215', '197,298,#000000', '279,236,#0334BF', '29,496,#FFD2B1', '437,439,#16777E', '103,327,#0334BF', '106,327,#0334BF', '204,2,#777F8C', '311,237,#149CFF', '311,229,#000000', '109,327,#0334BF', '15,260,#E973FF', '113,327,#0334BF', '13,260,#E973FF', '355,263,#000000', '125,195,#242367', '273,264,#000000', '135,468,#000000', '115,134,#FFFFFF', '215,271,#000000', '137,370,#7C3F20', '259,248,#149CFF', '347,436,#0334BF', '273,265,#000000', '111,458,#16777E', '469,379,#FFA4D0', '135,284,#000000', '129,362,#7C3F20', '535,330,#FFA4D0', '152,268,#16777E', '348,197,#8DF5FF', '213,461,#000000', '143,280,#000000', '348,199,#8DF5FF', '174,258,#000000', '446,177,#000000', '353,383,#000000', '347,190,#8DF5FF', '472,312,#8DF5FF', '113,308,#0334BF', '448,178,#000000', '111,454,#16777E', '364,327,#000000', '136,236,#242367', '410,311,#F30F0C', '244,256,#000000', '281,238,#000000', '281,239,#000000', '399,386,#000000', '174,259,#000000', '475,212,#B9C3CF', '115,308,#0334BF'];
  
  drawPixels() {
    for (let i=0; i<this.rows.length;i++) {
      let cols = this.rows[i].split(',');
      let xCord = +cols[0];
      let yCord = +cols[1];
      let color = cols[2];
      this.context.fillStyle = color;
      this.context.fillRect(xCord, yCord, 1, 1);
    }
  }
    
}
