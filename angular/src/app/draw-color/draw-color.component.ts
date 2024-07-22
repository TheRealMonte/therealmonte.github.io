import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-draw-color',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './draw-color.component.html',
  styleUrl: './draw-color.component.css'
})
export class DrawColorComponent implements OnInit {
  colorName: string = "";
  colorUrl: string = "";
  imgSRC: string = "";

  ngOnInit(): void {
    let paramColor = this.route.snapshot.paramMap.get('id');
    if (paramColor != null) {
      let colorParts: string[] = paramColor.split("-");
      if (colorParts.length>1) {
        let first = colorParts[0];
        let second = colorParts[1].charAt(0).toUpperCase() + colorParts[1].slice(1);
        this.colorUrl = first + second;
        this.colorName = paramColor.replace("-", " ");
      } else {
        this.colorName = paramColor;
        this.colorUrl = paramColor;
      }
    }
    this.imgSRC = `https://raw.githubusercontent.com/TheRealMonte/therealmonte.github.io/main/pixel%20color%20images/${this.colorUrl}.png`;
  }

  constructor(
    private route: ActivatedRoute
  ) {}

}
