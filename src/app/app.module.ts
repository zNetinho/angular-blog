import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavbarComponent } from '../components/menu-navbar/menu-navbar.component';
import { BannerHomeComponent } from '../components/banner-home/banner-home.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { BigCardComponent } from '../components/big-card/big-card.component';
import { SmallCardComponent } from '../components/small-card/small-card.component';
import { PostSingleComponent } from './pages/view/post-single/post-single.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavbarComponent,
    BannerHomeComponent,
    PageHomeComponent,
    BigCardComponent,
    SmallCardComponent,
    PostSingleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
