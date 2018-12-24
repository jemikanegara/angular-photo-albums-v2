import { Component, OnInit } from "@angular/core";
import { UserService } from "./user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  users = [];
  albums = [];
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit() {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  showAlbums(albums) {
    this.albums = albums;
  }

  showPhotos(albumId) {
    this.router.navigate(["/photos", albumId]);
  }
}
