import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CanvasService {
    constructor(
        private http: HttpClient
    ) { }

    getPixelData() {
        return this.http.get('https://raw.githubusercontent.com/TheRealMonte/therealmonte.github.io/main/pixels.csv', {responseType: 'text'});
    }

    getUsers(year: number) {
        return this.http.get(`https://raw.githubusercontent.com/TheRealMonte/therealmonte.github.io/main/${year}%20Stats/users_${year}.csv`, {responseType: 'text'});
    }

    getColorCount(year: number) {
        return this.http.get(`https://raw.githubusercontent.com/TheRealMonte/therealmonte.github.io/main/${year}%20Stats/color_count_${year}.csv`, {responseType: 'text'});
    }
}