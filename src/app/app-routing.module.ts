import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'games', loadChildren: './games/games.module#GamesModule' },
    { path: 'fanju', loadChildren: './fanju/fanju.module#FanjuModule' },
    { path: 'escn-daily', loadChildren: './escn-daily/escn-daily.module#EscnDailyModule' },
    { path: 'game-detail', loadChildren: './game-detail/game-detail.module#GameDetailModule' },
    { path: 'game-detail/:id', loadChildren: './game-detail/game-detail.module#GameDetailModule' },
    { path: '', redirectTo: 'fanju', pathMatch: 'full' },
    { path: '**', redirectTo: 'fanju' }
];

const config: ExtraOptions = {
    useHash: true,
    // enableTracing: true
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
