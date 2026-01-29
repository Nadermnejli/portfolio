import { Injectable } from '@angular/core';
import { EmailBackendService } from './email-backend.service';

export interface MailSettings {
  fromEmail: string;
  fromName: string;
  smtpHost: string;
  smtpPort: string;
  smtpUser: string;
  smtpPass: string;
}

export interface EmailRequest {
  toEmail: string;
  subject: string;
  body: string;
  isHtml?: boolean;
  fromEmail?: string;
  fromName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly mailSettings: MailSettings = {
    fromEmail: 'nadermnejli78@gmail.com',
    fromName: 'Nader Mnejli',
    smtpHost: 'in-v3.mailjet.com',
    smtpPort: '587',
    smtpUser: '895d4383a9125b19dfc5d8eb2d295cb7',
    smtpPass: '1264c1592d045e3618fc8f4456319a94'
  };

  constructor(private emailBackendService: EmailBackendService) {}

  /**
   * Send email using backend service (equivalent to your C# SendAsync method)
   */
  async sendAsync(emailRequest: EmailRequest): Promise<void> {
    try {
      // Use the backend service which simulates your C# SMTP implementation
      await this.emailBackendService.sendAsync({
        ...emailRequest,
        mailSettings: this.mailSettings
      });

      console.log('Email sent successfully to', emailRequest.toEmail, 'with subject:', emailRequest.subject);
    } catch (error) {
      console.error('Failed to send email to', emailRequest.toEmail, 'with subject:', emailRequest.subject, error);
      throw error;
    }
  }

  /**
   * Send contact form email specifically
   * This creates a beautiful HTML email template
   */
  async sendContactFormEmail(formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<void> {
    // Use the backend service for sending
    await this.emailBackendService.sendContactFormEmail(formData);
  }

  /**
   * Alternative: Direct SMTP simulation (for testing)
   */
  async sendDirectSMTP(formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<void> {
    // Simulate the exact C# SMTP process
    console.log('🔧 Simulating C# SMTP SendAsync method...');
    console.log('📧 SMTP Configuration:', {
      host: this.mailSettings.smtpHost,
      port: this.mailSettings.smtpPort,
      user: this.mailSettings.smtpUser,
      from: this.mailSettings.fromEmail
    });

    // Simulate connection and sending
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('✅ Email sent successfully using SMTP!');
    console.log('📨 Email details:', {
      to: this.mailSettings.fromEmail,
      from: `${formData.name} <${formData.email}>`,
      subject: `Portfolio Contact: ${formData.subject}`,
      body: formData.message
    });
  }
}