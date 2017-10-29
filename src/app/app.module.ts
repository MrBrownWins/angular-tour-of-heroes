import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {HeroDetailComponent} from './heroes/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService} from './heroes/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RoutingModule} from './routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
