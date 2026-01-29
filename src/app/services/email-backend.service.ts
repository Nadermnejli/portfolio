import { Injectable } from '@angular/core';

export interface BackendEmailRequest {
  toEmail: string;
  subject: string;
  body: string;
  isHtml?: boolean;
  fromEmail?: string;
  fromName?: string;
  mailSettings: {
    fromEmail: string;
    fromName: string;
    smtpHost: string;
    smtpPort: string;
    smtpUser: string;
    smtpPass: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class EmailBackendService {
  
  /**
   * This simulates your C# SendAsync method
   * In production, this would call your actual backend API
   */
  async sendAsync(request: BackendEmailRequest): Promise<void> {
    try {
      // Simulate API call to your backend
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Email sent successfully via backend:', result);
      
    } catch (error) {
      console.error('Failed to send email via backend:', error);
      
      // For demo purposes, simulate success after 2 seconds
      // Remove this in production
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Demo: Email would be sent with SMTP settings:', request.mailSettings);
      
      // Uncomment the line below to test error handling
      // throw new Error('SMTP connection failed');
    }
  }

  /**
   * Send contact form email using your exact SMTP configuration
   */
  async sendContactFormEmail(formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<void> {
    const emailBody = this.createEmailTemplate(formData);
    
    const emailRequest: BackendEmailRequest = {
      toEmail: 'nadermnejli78@gmail.com', // Your email
      subject: `Portfolio Contact: ${formData.subject}`,
      body: emailBody,
      isHtml: true,
      fromEmail: formData.email,
      fromName: formData.name,
      mailSettings: {
        fromEmail: 'nadermnejli78@gmail.com',
        fromName: 'Nader Mnejli',
        smtpHost: 'in-v3.mailjet.com',
        smtpPort: '587',
        smtpUser: '895d4383a9125b19dfc5d8eb2d295cb7',
        smtpPass: '1264c1592d045e3618fc8f4456319a94'
      }
    };

    await this.sendAsync(emailRequest);
  }

  private createEmailTemplate(formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #58a6ff 0%, #1f6feb 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f8f9fa; padding: 20px; }
          .message-box { background: white; padding: 20px; border-left: 4px solid #58a6ff; margin: 20px 0; }
          .footer { background: #21262d; color: #8b949e; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; }
          .info-row { margin: 10px 0; }
          .label { font-weight: bold; color: #2c3e50; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Contact Form Submission</h1>
            <p>Someone reached out through your portfolio!</p>
          </div>
          
          <div class="content">
            <h2>Contact Information</h2>
            <div class="info-row">
              <span class="label">Name:</span> ${formData.name}
            </div>
            <div class="info-row">
              <span class="label">Email:</span> ${formData.email}
            </div>
            <div class="info-row">
              <span class="label">Subject:</span> ${formData.subject}
            </div>
            
            <div class="message-box">
              <h3>Message:</h3>
              <p>${formData.message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          
          <div class="footer">
            <p>This email was sent from your portfolio contact form</p>
            <p>Sent at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}