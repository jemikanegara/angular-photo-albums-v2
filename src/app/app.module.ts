import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { MaterialModule } from "./material.module";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { UserComponent } from "./user/user.component";
import { AlbumComponent } from "./album/album.component";
import { PhotoComponent } from "./photo/photo.component";
import { UserService } from "./user/user.service";
import { AlbumService } from "./album/album.service";
import { PhotoService } from "./photo/photo.service";
import { HttpModule } from "@angular/http";

const router = [{ path: "photos/:id", component: PhotoComponent }];

@NgModule({
  declarations: [AppComponent, UserComponent, AlbumComponent, PhotoComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [UserService, AlbumService, PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
