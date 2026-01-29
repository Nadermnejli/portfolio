import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  delay: number;
}

interface TechIcon {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit, OnDestroy {
  isLoading = true;
  loadingProgress = 0;
  currentTextIndex = 0;
  currentQuote = '';

  loadingTexts = [
    'Initializing Portfolio...',
    'Loading Projects...',
    'Preparing Experience...',
    'Setting up Skills...',
    'Almost Ready...',
    'Welcome!'
  ];

  quotes = [
    'Creating innovative solutions that bridge technical complexity with user-friendly experiences',
    'Passionate about clean code, modern architecture, and continuous learning',
    'Building the future, one line of code at a time',
    'Where creativity meets technology'
  ];

  techStack: TechIcon[] = [
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: '.NET', icon: 'fab fa-microsoft' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Git', icon: 'fab fa-git-alt' }
  ];

  particles: Particle[] = [];

  private textInterval: any;
  private progressInterval: any;
  private quoteInterval: any;

  ngOnInit() {
    this.generateParticles();
    this.startLoadingAnimation();
    this.startTextRotation();
    this.startQuoteRotation();
    
    // Auto-hide loader after animation completes
    setTimeout(() => {
      this.isLoading = false;
    }, 6000);
  }

  ngOnDestroy() {
    if (this.textInterval) clearInterval(this.textInterval);
    if (this.progressInterval) clearInterval(this.progressInterval);
    if (this.quoteInterval) clearInterval(this.quoteInterval);
  }

  generateParticles() {
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3
      });
    }
  }

  startLoadingAnimation() {
    this.progressInterval = setInterval(() => {
      if (this.loadingProgress < 100) {
        // Simulate realistic loading progress
        const increment = Math.random() * 15 + 5;
        this.loadingProgress = Math.min(100, this.loadingProgress + increment);
      }
    }, 300);
  }

  startTextRotation() {
    this.textInterval = setInterval(() => {
      this.currentTextIndex = (this.currentTextIndex + 1) % this.loadingTexts.length;
    }, 1000);
  }

  startQuoteRotation() {
    this.currentQuote = this.quotes[0];
    let quoteIndex = 0;
    
    this.quoteInterval = setInterval(() => {
      quoteIndex = (quoteIndex + 1) % this.quotes.length;
      this.currentQuote = this.quotes[quoteIndex];
    }, 2000);
  }
}