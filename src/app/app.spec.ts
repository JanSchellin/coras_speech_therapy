import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('renders the shared navigation and exact copy for each route', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const navigationText = fixture.nativeElement.querySelector('header').textContent as string;
    expect(navigationText).toContain('Über mich');
    expect(navigationText).toContain('Leistungen');
    expect(navigationText).toContain('Terminvergabe');
    expect(navigationText).toContain('Kontakt');
    expect(navigationText).not.toContain('Impressum');
    expect(fixture.nativeElement.querySelector('footer').textContent).toContain('Impressum');

    const router = TestBed.inject(Router);
    const routeCopy = [
      ['/', "Every child has a song inside, it's our job to turn up the volume."],
      ['/leistungen', 'Sprachentwicklungsstörungen'],
      ['/terminvergabe', 'Was Sie zum ersten Termin mitbringen sollten'],
      ['/kontakt', 'Niedersachsenstraße 64'],
      ['/impressum', 'Praxis für Logopädie Cora-Zoé Grube'],
    ];

    for (const [url, expectedCopy] of routeCopy) {
      await router.navigateByUrl(url);
      fixture.detectChanges();
      await fixture.whenStable();
      expect(fixture.nativeElement.textContent).toContain(expectedCopy);
    }

    fixture.destroy();
  });
});
