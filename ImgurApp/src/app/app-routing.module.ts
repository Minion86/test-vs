import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlbumComponent } from "./album/album.component";
import { GalleryComponent } from "./gallery/gallery.component";

const routes: Routes = [{ path: "", component: AlbumComponent },{ path: 'gallery', component: GalleryComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}