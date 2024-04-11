import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
  myService = [
    {
      image: '../../assets/images/github-142-svgrepo-com.svg',
      name: 'UI/UX Design',
      description: 'Mobile App, Website Design'
    },
    {
      image: '../../assets/images/github-142-svgrepo-com.svg',
      name: 'UI/UX Design',
      description: 'Mobile App, Website Design'
    }
  ];
}
