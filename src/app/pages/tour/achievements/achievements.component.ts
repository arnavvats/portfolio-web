import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  achievements =[
    {
      photo: 'hkkrnk.PNG',
      title: '5-star Hackerrank Practice badges'
    }, {
    photo: 'hacknitp.jpg',
    title: 'HackNITP organizer, gathering a sponsorship of worth Rs. 2.5L'
  }, {
      photo: 'sih195.jpg',
      title: 'Winner, Smart India Hackathon 2019, World\'s Biggest Hackathon'
    }, {
      photo: 'b-hack-2.jpg',
      title: 'Bihar Hackathon 2017 Runner Up'
    },
    {
      photo: 'sih18.jpg',
      title: 'Smart India Hackathon 2018 Finalist'
    }, {
    photo: 'swweek.jpg',
    title: 'Startup Weekend Patna 2018 Runner Up'
    }
    ];
  constructor() { }

  ngOnInit() {
  }

}
