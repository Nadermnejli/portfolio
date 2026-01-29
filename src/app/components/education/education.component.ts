import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  specialization?: string;
  achievements?: string[];
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education: Education[] = [
    {
      degree: 'Software Engineering',
      institution: 'Tek-Up University',
      location: 'Ariana, Tunisia',
      duration: '2023 - 2026',
      description: 'Engineering program focused on software development, system design, and modern architectures',
      specialization: 'Full-Stack Development & System Architecture',
      achievements: [
        'Focus on modern software development practices',
        'Advanced coursework in system design and architecture',
        'Hands-on experience with industry-standard technologies'
      ]
    },
    {
      degree: 'Bachelor\'s Degree in Information Technology',
      institution: 'Higher Institute of Technological Studies',
      location: 'Béja, Tunisia',
      duration: '2020 - 2023',
      description: 'Comprehensive training in software development, databases, and information systems',
      specialization: 'Software Development & Database Management',
      achievements: [
        'Strong foundation in programming and software engineering',
        'Extensive database design and management training',
        'Multiple successful project implementations'
      ]
    },
    {
      degree: 'High School Diploma in Computer Science',
      institution: 'Ali Balhaven High School',
      location: 'Béja, Tunisia',
      duration: '2019 - 2020',
      description: 'Graduated with a specialization in Computer Science',
      specialization: 'Computer Science & Mathematics'
    }
  ];
}