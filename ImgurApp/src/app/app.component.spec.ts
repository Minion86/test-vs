import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('creates the root and routing outlet', async () => {
    await TestBed.configureTestingModule({ declarations: [AppComponent], imports: [RouterModule.forRoot([])] }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.title).toBe('ImgurApp');
    expect(fixture.nativeElement.querySelector('router-outlet')).toBeTruthy();
  });
});
