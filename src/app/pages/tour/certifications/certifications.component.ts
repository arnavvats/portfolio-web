import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  certificates = [
    {
      publisher: 'Coursera',
      certification: '5 Course Specialization in Deep Learning'
    }, {
      publisher: 'Coursera',
      certification: 'Introduction to Machine Learning'
    }, {
      publisher: 'PenPencil',
      certification: 'Certification of Fullstack Software Development Internship'
    }, {
      publisher: 'Smart India Hackathon 2019',
      certification: 'Winner\'s Certificate for SIH 2019'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
