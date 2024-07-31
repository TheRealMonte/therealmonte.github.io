import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DrawComponent } from './draw/draw.component';
import { Stats2024Component } from './stats-2024/stats-2024.component';
import { Stats2023Component } from './stats-2023/stats-2023.component';
import { DrawColorComponent } from './draw-color/draw-color.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Graphs2024Component } from './graphs-2024/graphs-2024.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: '2024/:id', component: Stats2024Component},
    {path: '2023/:id', component: Stats2023Component},
    {path: 'draw-user/:id', component: DrawComponent},
    {path: 'draw-color/:id', component: DrawColorComponent},
    {path: 'users/:id', component: AllUsersComponent},
    {path: 'graphs/2024', component: Graphs2024Component},
    {path: '**', component: NotFoundComponent}
];
