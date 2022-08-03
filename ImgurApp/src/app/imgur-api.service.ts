import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImgurApiService {

  constructor(private httpClient: HttpClient) { }


  key = "Client-ID 2d086962f60c89e";

  getAlbums() {
    let headers = new HttpHeaders().set('Authorization', this.key);
    return this.httpClient.get(
      `https://api.imgur.com/3/gallery/search?q_all=cats&q_type=album`,
      { headers: headers }
    );
  }


  getPrice(type: string, discount: number) {
    return this.httpClient.get(
      `http://localhost:6060/price/${type}/${discount}`,
    );
  }


}
