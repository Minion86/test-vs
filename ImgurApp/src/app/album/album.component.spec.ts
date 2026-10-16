import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { provideRouter, Router } from '@angular/router';
import { of } from 'rxjs';
import { vi } from 'vitest';
import { AlbumComponent } from './album.component';
import { ImgurApiService } from '../imgur-api.service';

describe('AlbumComponent', () => {
  it('renders returned albums and navigates to their gallery', async () => {
    const images = [{ link: 'https://example.test/cat.jpg' }];
    await TestBed.configureTestingModule({ declarations: [AlbumComponent], imports: [CommonModule], providers: [provideRouter([]), { provide: ImgurApiService, useValue: { getAlbums: () => of({ data: [{ title: 'Cats', images }] }) } }] }).compileComponents();
    const navigate = vi.spyOn(TestBed.inject(Router), 'navigate').mockResolvedValue(true);
    const fixture = TestBed.createComponent(AlbumComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Cats');
    fixture.nativeElement.querySelector('button').click();
    expect(navigate).toHaveBeenCalledWith(['/gallery'], { queryParams: { myArray: JSON.stringify(images) } });
  });
});
