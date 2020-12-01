import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { NowPlayingComponent} from './now-playing/now-playing.component';
import { TrendingComponent} from './trending/trending.component';

const routes: Routes = [
  {path:'trending', component: TrendingComponent},
  {path:'comingsoon', component: ComingSoonComponent},
  {path:'nowplaying', component: NowPlayingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
