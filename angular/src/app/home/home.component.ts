import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorCount } from '../colorCount.model';
import { ranking } from '../ranking';
import { userCordCount } from '../userCordCount';
import { userColorCount } from '../userColorList';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username: string = ""
  showResults:boolean = false;
  userRanking: number = 0;
  pixelsPlaced: number =0;
  colors!: ColorCount;
  topCord: string = "";
  cordCount: number = 0;

  onSubmit(): void {
    this.getRanking()
    let cordArray = userCordCount[this.username];
    this.topCord = `(${cordArray[0]}, ${cordArray[1]})`
    this.cordCount = cordArray[2];
    this.colors = this.setColorNumbers(userColorCount[this.username]);
    this.showResults = true;
  }

  getRanking() {
    ranking.forEach((user, index) => {
      let userNameparts = user.replace("(","").replace(")","").split(",")
      if (userNameparts[0] == this.username) {
        this.userRanking = index + 1;
        this.pixelsPlaced = +userNameparts[1];
      }
      
    });
  }

  setColorNumbers(colorDict: string[]) {
    let colorsObj: ColorCount = new ColorCount();
    colorDict.forEach((color, index) => {
      switch(color) {
        case '149CFF': {
          colorsObj.setAzure(+colorDict[index + 1]);
          break;
        }
        case '000000': {
          colorsObj.setBlack(+colorDict[index + 1]);
          break;
        }
        case '0334BF': {
          colorsObj.setBlue(+colorDict[index + 1]);
          break;
        }
        case '242367': {
          colorsObj.setNavy(+colorDict[index + 1]);
          break;
        }
        case '99011A': {
          colorsObj.setRose(+colorDict[index + 1]);
          break;
        }
        case '550022': {
          colorsObj.setMaroon(+colorDict[index + 1]);
          break;
        }
        case '8DF5FF': {
          colorsObj.setAqua(+colorDict[index + 1]);
          break;
        }
        case 'FF9F17': {
          colorsObj.setOrange(+colorDict[index + 1]);
          break;
        }
        case 'F14FB4': {
          colorsObj.setMagenta(+colorDict[index + 1]);
          break;
        }
        case 'F66E08': {
          colorsObj.setRust(+colorDict[index + 1]);
          break;
        }
        case '1F1E26': {
          colorsObj.setDarkGrey(+colorDict[index + 1]);
          break;
        }
        case 'B9C3CF': {
          colorsObj.setLightGrey(+colorDict[index + 1]);
          break;
        }
        case '777F8C': {
          colorsObj.setMediumGrey(+colorDict[index + 1]);
          break;
        }
        case 'F30F0C': {
          colorsObj.setRed(+colorDict[index + 1]);
          break;
        }
        case 'FFFFFF': {
          colorsObj.setWhite(+colorDict[index + 1]);
          break;
        }
        case '531D8C': {
          colorsObj.setDarkPurple(+colorDict[index + 1]);
          break;
        }
        case 'FDE111': {
          colorsObj.setYellow(+colorDict[index + 1]);
          break;
        }
        case '16777E': {
          colorsObj.setDarkTeal(+colorDict[index + 1]);
          break;
        }
        case '424651': {
          colorsObj.setDeepGrey(+colorDict[index + 1]);
          break;
        }
        case '054523': {
          colorsObj.setForest(+colorDict[index + 1]);
          break;
        }
        case '61E021': {
          colorsObj.setGreen(+colorDict[index + 1]);
          break;
        }
        case 'unset': {
          break;
        }
        case 'FFFFA5': {
          colorsObj.setPastelYellow(+colorDict[index + 1]);
          break;
        }
        case '18862F': {
          colorsObj.setDarkGreen(+colorDict[index + 1]);
          break;
        }
        case 'E973FF': {
          colorsObj.setMauve(+colorDict[index + 1]);
          break;
        }
        case '382215': {
          colorsObj.setDarkChocolate(+colorDict[index + 1]);
          break;
        }
        case '01BFA5': {
          colorsObj.setLightTeal(+colorDict[index + 1]);
          break;
        }
        case 'FEAD6C': {
          colorsObj.setPeach(+colorDict[index + 1]);
          break;
        }
        case 'A630D2': {
          colorsObj.setPurple(+colorDict[index + 1]);
          break;
        }
        case 'FFA4D0': {
          colorsObj.setPink(+colorDict[index + 1]);
          break;
        }
        case 'FFD2B1': {
          colorsObj.setBeige(+colorDict[index + 1]);
          break;
        }
        case '7C3F20': {
          colorsObj.setChocolate(+colorDict[index + 1]);
          break;
        }
        case 'B1FF37': {
          colorsObj.setLime(+colorDict[index + 1]);
          break;
        }
        case 'C06F37': {
          colorsObj.setBrown(+colorDict[index + 1]);
          break;
        }
        case 'FF7872': {
          colorsObj.setWatermelon(+colorDict[index + 1]);
          break;
        }
        default: {
          break;
        }
      }
    });
    return colorsObj;
  }

  


}
