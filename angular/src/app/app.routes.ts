import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DrawComponent } from './draw/draw.component';
import { DrawColorComponent } from './draw-color/draw-color.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { GraphsComponent } from './graphs/graphs.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: ':year', component: HomeComponent},
    {path: ':year/user/:username', component: UserStatsComponent},
    {path: ':year/draw-user/:username', component: DrawComponent},
    {path: 'draw-color/:year/:name', component: DrawColorComponent},
    {path: ':year/users', component: AllUsersComponent},
    {path: ':year/graphs', component: GraphsComponent},
    {path: '**', component: NotFoundComponent}
];
