import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { vi } from 'vitest';
import { GalleryComponent } from './gallery.component';
import { ImgurApiService } from '../imgur-api.service';

describe('GalleryComponent', () => {
  it('renders a gallery and requests its selected price', async () => {
    const getPrice = vi.fn(() => of({ message: 0.9 }));
    await TestBed.configureTestingModule({ declarations: [GalleryComponent], imports: [CommonModule, FormsModule], providers: [{ provide: ActivatedRoute, useValue: { snapshot: { queryParamMap: convertToParamMap({ myArray: JSON.stringify([{ link: 'https://example.test/cat.jpg' }]) }) } } }, { provide: ImgurApiService, useValue: { getPrice } }] }).compileComponents();
    const alert = vi.spyOn(window, 'alert').mockImplementation(() => {});
    const fixture = TestBed.createComponent(GalleryComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('img').src).toBe('https://example.test/cat.jpg');
    fixture.componentInstance.selectChangeType(1);
    fixture.componentInstance.selectChangeDiscount(2);
    fixture.nativeElement.querySelector('button').click();
    expect(getPrice).toHaveBeenCalledWith('wallet', 10);
    expect(alert).toHaveBeenCalledWith('Total price:0.9');
  });
});
