import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule } from "@angular/common/http";
import { ImgurApiService } from './imgur-api.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,AppRoutingModule
  ],
  providers: [ImgurApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
