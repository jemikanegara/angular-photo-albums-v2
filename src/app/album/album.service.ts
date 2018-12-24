import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class AlbumService {
  constructor(private http: Http) {}

  getAlbums() {
    return this.http
      .get("https://jsonplaceholder.typicode.com/albums")
      .map(res => res.json());
  }
}
