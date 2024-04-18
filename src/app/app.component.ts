import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PresentationComponent } from './presentation/presentation.component';
import { ServicesComponent } from './services/services.component';
import { WorksComponent } from './works/works.component';
import { TestimonyComponent } from './testimony/testimony.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PresentationComponent, ServicesComponent, WorksComponent, TestimonyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
}
