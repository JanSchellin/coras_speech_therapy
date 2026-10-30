import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-services-page',
  //imports: [NgOptimizedImage],
  templateUrl: './services.html',
  styleUrl: './services.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesPage {
  protected readonly therapyAreas = [
    'Sprachentwicklungsstörungen',
    'Sprachentwicklungsverzögerungen',
    'Fütterstörungen',
    'Facialisparesen',
    'Legasthenie',
    'Myofunktionelle Störungen',
    'Parkinson',
    'Aphasie',
    'Dysarthrie',
    'Dysphagie',
    'Stimmstörungen',
    'Stottern',
    'Poltern',
    'u. v. m.',
  ];
}
