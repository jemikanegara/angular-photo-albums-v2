import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AlbumService } from "../album/album.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @Output() albumToShow = new EventEmitter<any>();

  @Input() user = {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: { street: "", suite: "", city: "", zipcode: "" },
    phone: "",
    website: "",
    company: { name: "" }
  };

  albums = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe(res => {
      let albums = [];
      for (let album of res) {
        if (album.userId === this.user.id) {
          albums.push(album);
        }
      }
      this.albums = albums;
    });
  }

  showAlbums() {
    this.albumToShow.emit(this.albums);
  }
}
