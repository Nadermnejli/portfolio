import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SuccessDialogComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitStatus: 'success' | 'error' | null = null;
  showSuccessDialog = false;
  errorMessage = '';

  constructor(private emailService: EmailService) {}

  async onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.submitStatus = null;
    this.errorMessage = '';

    try {
      // Send email using the email service
      await this.emailService.sendContactFormEmail(this.formData);
      
      // Show success dialog
      this.submitStatus = 'success';
      this.showSuccessDialog = true;
      
      // Reset form on success
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
    } catch (error: any) {
      console.error('Failed to send email:', error);
      this.submitStatus = 'error';
      this.errorMessage = error.message || 'Failed to send message. Please try again.';
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        this.submitStatus = null;
        this.errorMessage = '';
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }

  closeSuccessDialog() {
    this.showSuccessDialog = false;
    this.submitStatus = null;
  }
}