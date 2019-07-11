import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {
  tourPaths = [
    {
      route: 'skills',
      title: 'Skills',
      image: 'dumbbell.png',
      description: 'I am skilled in tools/languages such as Node.js, Angular.js, React.js, C++,Python, TensorFlow, PyTorch'
    }, {
      route: 'experience',
      title: 'Experience',
      image: 'experience.png',
      description: 'Apart from doing internships, I have also been actively participating in and organizing events.'
    }, {
      route: 'certifications',
      title: 'Certificaitions',
      image: 'certification.png',
      description: 'Have a look at the relevant certifications I have gained as proof of my skills in the domains.'
    }, {
      route: 'achievements',
      title: 'Achievements',
      image: 'achievements.png',
      description: 'The most memorable events in my career .'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
