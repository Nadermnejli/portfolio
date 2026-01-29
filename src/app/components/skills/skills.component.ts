import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', level: 85, icon: 'fab fa-cuttlefish' },
        { name: 'C++', level: 80, icon: 'fab fa-cuttlefish' },
        { name: 'C#', level: 90, icon: 'fab fa-microsoft' },
        { name: 'PHP', level: 75, icon: 'fab fa-php' },
        { name: 'JavaScript', level: 88, icon: 'fab fa-js-square' },
        { name: 'Dart', level: 82, icon: 'fas fa-code' },
        { name: 'Java', level: 85, icon: 'fab fa-java' }
      ]
    },
    {
      title: 'Web & Backend Technologies',
      skills: [
        { name: '.NET Core', level: 92, icon: 'fab fa-microsoft' },
        { name: 'Angular', level: 90, icon: 'fab fa-angular' },
        { name: 'Spring Boot', level: 80, icon: 'fas fa-leaf' },
        { name: 'Node.js', level: 75, icon: 'fab fa-node-js' },
        { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
        { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt' },
        { name: 'Bootstrap', level: 85, icon: 'fab fa-bootstrap' },
        { name: 'XML', level: 80, icon: 'fas fa-code' },
        { name: 'Dapper', level: 85, icon: 'fas fa-database' }
      ]
    },
    {
      title: 'Mobile Technologies',
      skills: [
        { name: 'Flutter', level: 85, icon: 'fas fa-mobile-alt' },
        { name: 'Android', level: 80, icon: 'fab fa-android' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'Oracle', level: 75, icon: 'fas fa-database' },
        { name: 'MySQL', level: 88, icon: 'fas fa-database' },
        { name: 'PostgreSQL', level: 85, icon: 'fas fa-database' },
        { name: 'SQL Server', level: 90, icon: 'fas fa-database' }
      ]
    },
    {
      title: 'DevOps & Cloud Technologies',
      skills: [
        { name: 'Git', level: 90, icon: 'fab fa-git-alt' },
        { name: 'Docker', level: 80, icon: 'fab fa-docker' },
        { name: 'Kubernetes', level: 70, icon: 'fas fa-dharmachakra' },
        { name: 'Azure DevOps', level: 75, icon: 'fab fa-microsoft' },
        { name: 'AWS', level: 70, icon: 'fab fa-aws' }
      ]
    }
  ];

  methodologies: string[] = [
    'Clean Architecture',
    'SCRUM',
    'Agile Development',
    'Test-Driven Development',
    'Microservices Architecture',
    'RESTful APIs',
    'CI/CD',
    'Code Review',
    'Version Control',
    'Database Design'
  ];
}