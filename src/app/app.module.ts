import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }  from '@angular/common/http';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { TrendingComponent } from './trending/trending.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ComingSoonComponent,
    NowPlayingComponent,
    TrendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
