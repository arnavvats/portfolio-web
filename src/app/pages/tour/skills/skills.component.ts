import { Component, OnInit } from '@angular/core';
const BEGIN = 'beginner';
const INTER = 'intermediate';
const ADV = 'advanced';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = {
    web: [
      {
        name: 'angular', image: 'angular.png', level: ADV
      },
      {
        name: 'Laravel', image: 'laravel.jpg', level: INTER
      },
      {
        name: 'MongoDB', image: 'mdb.jpg', level: INTER
      },
      {
        name: 'MySQL', image: 'mysql.jpg', level: INTER
      }, {
        name: 'NodeJS', image: 'node2.jpg', level: ADV
      },
      {
      name: 'React', image: 'react.png', level: INTER
      }
    ],
    datascience: [
      {
        name: 'SciKitlearn', image: 'sklearn.png', level: ADV
      },
      {
        name: 'TensorFlow', image: 'tf.png', level: INTER
      },
      {
        name: 'PyTorch', image: 'pytorch.jpeg', level: INTER
      },
      {
        name: 'colab', image: 'colab.png', level: ADV
      },
      {
        name: 'Keras', image: 'keras.png', level: INTER
      },
    ],
    devOps: [
      {
        name: 'Docker', image: 'docker.jpg', level: BEGIN
      },
      {
        name: 'git', image: 'git.png', level: ADV
      },
    ],
    programmingLanguages: [
      {
        name: 'PhP', image: 'php.png', level: INTER
      }, {
        name: 'Python', image: 'python.png', level: ADV
      },
      {
        name: 'C++', image: 'cpp.png', level: ADV
      },

      {
        name: 'Java', image: 'java.jpg', level: INTER
      }, {
      name: 'JavaScript', image: 'node.png', level: ADV
      }
    ]
  };
  subjectMatters = ['Data Structures and Algorithms', 'Statistics', 'Fuzzy Logic and Neural Networks'];
  constructor() { }

  ngOnInit() {
  }

}
