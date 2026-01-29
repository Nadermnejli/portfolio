import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Full-Stack Developer',
      company: 'MediAlerte',
      location: 'Bligg Tunisie, Ariana, Tunisia',
      duration: '08/2025 - Present',
      description: 'Developed MediAlerte, a comprehensive platform for managing unscheduled Care with a Territorial Professional Health Community (CPTS)',
      achievements: [
        'Streamlined communication between primary care stakeholders',
        'Implemented SNP request handling and alerts for fragile or dependent patients',
        'Integrated with national SAS platform for enhanced healthcare coordination',
        'Applied SCRUM methodology for agile development'
      ],
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Dapper', 'Clean Architecture', 'Docker', 'GitLab CI/CD']
    },
    {
      title: 'Full-Stack Developer',
      company: 'Medipil',
      location: 'Bligg Tunisie, Ariana, Tunisia',
      duration: '01/2024 - Present',
      description: 'Led the development of Medipil, an innovative medical agenda and appointment management solution',
      achievements: [
        'Designed and developed patient scheduling system to help healthcare professionals optimize daily planning',
        'Contributed to frontend and backend development with a focus on performance and scalability',
        'Applied SCRUM methodology for efficient project delivery'
      ],
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Dapper', 'Clean Architecture', 'Docker', 'GitLab CI/CD']
    },
    {
      title: 'Full-Stack Developer',
      company: 'FoodMe',
      location: 'Dyno&Motiva Systemes, Ariana, Tunisia',
      duration: '07/2023 - 01/2024',
      description: 'Developed FoodMe, a platform enabling users to compare restaurant and delivery service menus',
      achievements: [
        'Improved user decision-making by providing clear visibility on pricing, options, and ratings',
        'Implemented comprehensive restaurant comparison features',
        'Applied SCRUM methodology for iterative development'
      ],
      technologies: ['Angular', '.NET Core', 'PostgreSQL', 'Clean Architecture']
    },
    {
      title: 'End-of-Study Project',
      company: 'Mobile Ticketing',
      location: 'Dyno&Motiva Systemes, Ariana, Tunisia',
      duration: '02/2023 - 06/2023',
      description: 'Designed and developed a mobile application for the digitalization of restaurant meal vouchers',
      achievements: [
        'Created comprehensive mobile solution for meal voucher management',
        'Implemented secure payment and voucher validation system',
        'Applied SCRUM methodology for project management'
      ],
      technologies: ['Flutter', '.NET Core', 'PostgreSQL', 'Figma']
    },
    {
      title: 'PI-DEV Integration Project',
      company: 'Online Recruitment',
      location: 'ISET Béja, Tunisia',
      duration: '10/2022 - 01/2023',
      description: 'Designed and developed a web and mobile recruitment platform',
      achievements: [
        'Built comprehensive recruitment management system',
        'Implemented both web and mobile interfaces',
        'Applied SCRUM methodology for development lifecycle'
      ],
      technologies: ['Android', 'Angular', 'Spring Boot', 'MySQL']
    },
    {
      title: 'Advanced Training Internship',
      company: 'Tunisie Telecom',
      location: 'Béja, Tunisia',
      duration: '01/2022 - 02/2022',
      description: 'Designed and developed an e-learning web platform',
      achievements: [
        'Created comprehensive learning management system',
        'Implemented user-friendly interface for educational content delivery'
      ],
      technologies: ['Angular', 'Spring Boot', 'MySQL']
    },
    {
      title: 'Initiation Internship',
      company: 'Tunisie Telecom',
      location: 'Béja, Tunisia',
      duration: '01/2021 - 02/2021',
      description: 'Developed a web application for SIM card management and an online sales platform',
      achievements: [
        'Built SIM card management system with comprehensive tracking',
        'Developed online sales platform with secure payment integration'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL']
    }
  ];
}