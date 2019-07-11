import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  projects = [
    {
      title: 'TCF NITP',
      description: 'A set of websites that regulated registrations, tests and certifications for Techno Cultural Fest of NIT Patna',
      github: 'https://github.com/arnavvats/corona18',
      link: 'https://sac-nit-patna-69299.firebaseapp.com'
    }, {
    title: 'Motion Detector Game',
      description: 'Play a retro game using your head movement as control. Uses OpenCV.js for machine learning in the browser.',
      github: 'https://github.com/arnavvats/motion-capture-app',
      link: 'https://motion-capture-app.firebaseapp.com'
    }, {
      title: 'Interactive ML',
      description: 'See how machine learning algorithms work by visualizations. Uses tensorflow.js for machine learning in the browser.',
      github: 'https://github.com/arnavvats/interactive-ml',
      link: 'https://interactive-ml.firebaseapp.com'
    }, {
      title: 'MedEpi',
      description: 'A prototype application which is used to notify people of some impending outbreak of a disease by predicting them in real time. Implemented at SIH 2019.'
    },{
      title: 'PyTorch CNNs',
      description: 'Colab notebooks implementing several CNN architectures.',
      github: 'https://github.com/arnavvats/pytorch-cnns'
    },
    {
      title: 'Open Source Contributions to Mozilla Voice-Web',
      description: 'Proud Contributor to Mozilla\'s open source project voice-web',
      github: 'https://github.com/mozilla/voice-web/pull/2004'
    }
  ];
  experiences = [
    {
      title: 'Software Development Internship, PenPencil',
      description: 'I worked on optimization of the deployment pipeline, ' +
        'the maintainability of a SaaS product was getting low because of' +
        ' several versions of the application. The problem was fixed using Git submodules and a small cli tool. Apart from that I worked on an Angular web app',
      date: 'May - June 2018',
      photo: 'penpencil'
    },
    {
      title: 'Smart India Hackathon 2019',
      description:  'We decided to solve the problem of inefficient alerts to people during outbreaks of diseases. We solved the problem by scraping the past weather and patterns of epidemics in an area,' +
        'and applying a deep neural network to it with careful optimization. We used this model to predict a disease outbreak in real time and notifying people in the area.',
      date: 'May - June 2018',
      photo: 'penpencil'
    },
    {
      title: 'Tech Lead, Corona & Melange 2019',
      description: 'A hectic and stunning experience. Had to develop websites for online tests and registrations for the annual Techno - Cultural festival , mw and the team deployed extensive solutions from registration portals, test portal to certificate generators.',
      date: 'October 2018 - Jan 2019',
      photo: 'penpencil'
    }, {
      title: 'Global Entrepreneurship Summit 2018',
      description: 'The team represented National Institute of Technology, Patna at Indian Institute of technology , Patna 2018.',
      date: 'Feb 2018',
      photo: 'penpencil'
    },  {
      title: 'Positions of Responsibility',
      description: 'Currently I hold various positions of responsibility in my College clubs. I am a senior member of the Coding Club and the Incubation Center at NIT Patna.',
      date: 'Currently Ongoing',
      photo: 'penpencil'
    }
  ];
  constructor() { }
  ngOnInit() {
  }

}
