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
  colorName: string =""
  imgSRC: string = "";

  ngOnInit(): void {
    let paramColor = this.route.snapshot.paramMap.get('id');
    if (paramColor != null) {
      this.colorName = paramColor.replace("-", " ");
    }
    switch(this.colorName) {
      case 'aqua': {
        this.imgSRC = "https://raw.githubusercontent.com/TheRealMonte/therealmonte.github.io/main/pixel%20color%20images/Aqua.png";
        break;
      }
      case 'azure': {
        this.imgSRC = "https://raw.githubusercontent.com/TheRealMonte/therealmonte.github.io/main/pixel%20color%20images/Azure.png";
        break;
      }
      case 'beige': {
        this.imgSRC = "https://raw.githubusercontent.com/TheRealMonte/therealmonte.github.io/main/pixel%20color%20images/Beige.png";
        break;
      }
    }
    
  }

  constructor(
    private route: ActivatedRoute
  ) {}

}
