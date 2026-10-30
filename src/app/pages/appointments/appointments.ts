import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-appointments-page',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './appointments.html',
  styleUrl: './appointments.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentsPage {}
