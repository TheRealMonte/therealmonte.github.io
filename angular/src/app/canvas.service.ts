import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Ranking, TopCord, UserColorCount, WarCord } from "./models";

@Injectable({ providedIn: 'root' })
export class CanvasService {

    constructor(
        private http: HttpClient
    ) { }

    getAllRankings(): Observable<Ranking[]> {
        return this.http.get<Ranking[]>('https://therealmonte.github.io/api/ranking.json');
    }

    getAllUserColorCounts(): Observable<UserColorCount[]> {
        return this.http.get<UserColorCount[]>('https://therealmonte.github.io/api/colorCount.json');
    }

    getAllTopCords(): Observable<TopCord[]> {
        return this.http.get<TopCord[]>('https://therealmonte.github.io/api/topCord.json');
    }

    getAllWarCords(): Observable<WarCord[]> {
        return this.http.get<WarCord[]>('https://therealmonte.github.io/api/warCord.json');
    }


}