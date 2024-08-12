import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CanvasService {
    constructor(
        private http: HttpClient
    ) { }

    checkIfYearHasStats(year: number) {
        const years: number[] = [2024, 2023]
        if (years.includes(year)) {
            return year;
        } else {
            return years[0];
        }
    }

    getPixelData(year: number) {
        return this.http.get(`https://raw.githubusercontent.com/TheRealMonte/data-files/main/${year}/pixels.csv`, {responseType: 'text'});
    }

    getUsers(year: number) {
        return this.http.get(`https://raw.githubusercontent.com/TheRealMonte/data-files/main/${year}/users_${year}.csv`, {responseType: 'text'});
    }

    getColorCount(year: number) {
        return this.http.get(`https://raw.githubusercontent.com/TheRealMonte/data-files/main/${year}/color_count_${year}.csv`, {responseType: 'text'});
    }
}

