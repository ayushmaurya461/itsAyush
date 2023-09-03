import { Component } from '@angular/core';
import { skewAnimation } from 'src/app/animations.module';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css'],
  animations: [skewAnimation],
})
export class BiographyComponent {
  cardData = 'experience';

  public experience = [
    {
      company: 'KATARIA SOFTWARE SOLUTIONS',
      position: 'FULL STACK DEVELOPER',
      duration: '2023 March - Present',
      description: `As a Full Stack Developer, I'm currently part of a dynamic team, crafting innovative web solutions and pushing the boundaries of technology.`,
    },
    {
      company: 'TATA CONSULTANCY SERVICES',
      position: 'FRONT END DEVELOPER',
      duration: '2021 August - 2023 March',
      description: `During my tenure as a Front-End Developer, I played a pivotal role in designing and implementing cutting-edge user interfaces, contributing to exceptional user experiences.`,
    },
  ];

  public education = [
    {
      degree: 'Masters In Computer Application',
      specialization: 'Information Technology',
      duration: '2022 - 2024',
      description: `I am currently pursuing my master's degree with a specialization in Information Technology at Jain University, Bangalore, where I am immersing myself in the latest advancements in the field.`,
      college: 'Jain University, Banglore',
    },
    {
      degree: 'Bachelor In Computer Application',
      specialization: 'Information Technology',
      duration: '2022 - 2024',
      description: `During my undergraduate years at Mukand Lal National College, Haryana, I gained a strong foundation in Information Technology, setting the stage for my career in web development and technology exploration.`,
      college: 'Mukand Lal National College, Haryana',
    },
  ];

  public skills = [
    {
      language: 'Angular',
      rating: 8,
    },
    {
      language: 'React',
      rating: 6,
    },
    {
      language: 'NodeJs',
      rating: 7,
    },
    {
      language: 'Javascript/Typescript',
      rating: 7,
    },
    {
      language: 'HTML/CSS',
      rating: 8,
    },
  ];

  handleCardsData(value: string) {
    this.cardData = value;
  }
}
