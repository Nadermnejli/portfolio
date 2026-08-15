import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  type: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  duration: string;
  imageError?: boolean;
  featured?: boolean;
  tagline?: string;
  badge?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Nutreeto',
      type: 'Digital Health Platform',
      tagline: 'Redefining nutritional care through AI and real-time connectivity',
      badge: '⭐ Flagship Project',
      featured: true,
      description: 'An integrated digital nutrition platform built for nutrition professionals and their patients. Nutreeto bridges the gap between clinical expertise and daily patient reality — combining AI-powered meal plan generation, real-time monitoring, OCR-based body composition analysis, and bidirectional messaging into one unified system.',
      features: [
        'AI-powered meal plan generation using large language models',
        'Real-time patient monitoring & bidirectional messaging via WebSockets',
        'OCR-based body composition analysis from scanned documents',
        'Smart automated notifications and progress alerts',
        'Reusable clinical template library for nutrition professionals',
        'Secure patient portal with full health journey tracking'
      ],
      technologies: ['Angular', '.NET Core', 'AI / LLM', 'WebSockets', 'OCR', 'SQL Server', 'Clean Architecture', 'Docker'],
      image: 'favicon.png',
      date: '2025',
      duration: '8 months'
    },
    {
      title: 'MediAlerte',
      type: 'Healthcare Platform',
      description: 'A comprehensive platform for managing unscheduled Care with a Territorial Professional Health Community (CPTS). Streamlines communication between primary care stakeholders and integrates with national healthcare systems.',
      features: [
        'Real-time communication between healthcare professionals',
        'SNP request handling and alert system',
        'Integration with national SAS platform',
        'Patient management and scheduling',
        'Healthcare analytics and reporting'
      ],
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Dapper', 'Clean Architecture', 'Docker', 'GitLab CI/CD'],
      image: 'medialerte.png',
      date: '2025',
      duration: '6+ months'
    },
    {
      title: 'Medipil',
      type: 'Medical Management System',
      description: 'An innovative medical agenda and appointment management solution designed to help healthcare professionals optimize their daily planning and improve patient care efficiency.',
      features: [
        'Advanced appointment scheduling system',
        'Patient management dashboard',
        'Calendar integration and synchronization',
        'Automated reminders and notifications',
        'Performance analytics and insights'
      ],
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Dapper', 'Clean Architecture', 'Docker', 'GitLab CI/CD'],
      image: 'medipil.png',
      date: '2024',
      duration: '12+ months'
    },
    {
      title: 'FoodMe',
      type: 'Restaurant Comparison Platform',
      description: 'A platform enabling users to compare restaurant and delivery service menus, providing clear visibility on pricing, options, and ratings to improve decision-making.',
      features: [
        'Restaurant menu comparison',
        'Price analysis and comparison',
        'User ratings and reviews system',
        'Advanced search and filtering',
        'Delivery service integration'
      ],
      technologies: ['Angular', '.NET Core', 'PostgreSQL', 'Clean Architecture'],
      image: 'foodme.png',
      date: '2023-2024',
      duration: '6 months'
    },
    {
      title: 'Mobile Ticketing',
      type: 'Mobile Application',
      description: 'A mobile application for the digitalization of restaurant meal vouchers, providing a secure and convenient way to manage and use meal vouchers digitally.',
      features: [
        'Digital meal voucher management',
        'Secure payment processing',
        'QR code voucher validation',
        'Transaction history tracking',
        'Multi-restaurant support'
      ],
      technologies: ['Flutter', '.NET Core', 'PostgreSQL', 'Figma'],
      image: 'dyno.png',
      date: '2023',
      duration: '4 months'
    },
    {
      title: 'Online Recruitment Platform',
      type: 'Web & Mobile Application',
      description: 'A comprehensive recruitment platform with both web and mobile interfaces, designed to streamline the hiring process for companies and job seekers.',
      features: [
        'Job posting and management',
        'Candidate application tracking',
        'Resume parsing and matching',
        'Interview scheduling system',
        'Mobile app for job seekers'
      ],
      technologies: ['Android', 'Angular', 'Spring Boot', 'MySQL'],
      image: 'recrutment.jpg',
      date: '2022-2023',
      duration: '3 months'
    },
    {
      title: 'E-Learning Platform',
      type: 'Educational Web Platform',
      description: 'An e-learning web platform developed for Tunisie Telecom, providing comprehensive learning management system with user-friendly interface for educational content delivery.',
      features: [
        'Course management system',
        'Interactive learning modules',
        'Progress tracking and analytics',
        'User authentication and roles',
        'Content delivery optimization'
      ],
      technologies: ['Angular', 'Spring Boot', 'MySQL'],
      image: 'elerning.avif',
      date: '2022',
      duration: '2 months'
    }
  ];

  onImageError(event: any, project: Project) {
    console.log('Image failed to load:', project.image);
    console.log('Full image path attempted:', event.target.src);
    project.imageError = true;
    // Hide the broken image
    event.target.style.display = 'none';
  }

  onImageLoad(event: any, project: Project) {
    console.log('Image loaded successfully:', project.image);
    project.imageError = false;
  }
}