import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { ImgurApiService } from './imgur-api.service';

describe('ImgurApiService', () => {
  it('sends the album request with authorization', () => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    const service = TestBed.inject(ImgurApiService);
    const http = TestBed.inject(HttpTestingController);
    service.getAlbums().subscribe(result => expect(result).toEqual({ data: [] }));
    const request = http.expectOne('https://api.imgur.com/3/gallery/search?q_all=cats&q_type=album');
    expect(request.request.headers.get('Authorization')).toBe(service.key);
    request.flush({ data: [] });
    http.verify();
  });
});
