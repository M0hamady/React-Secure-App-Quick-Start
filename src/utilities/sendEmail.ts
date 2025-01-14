import emailjs from 'emailjs-com';
import { marked } from 'marked';

// Update the interface to make fullName optional
interface EmailConfig {
  fullName?: string;  // Full name is now optional
  email: string;
  phone?: string;     // Phone is still optional
  message: string;
}

export async function sendEmail({ fullName, email, phone, message }: EmailConfig): Promise<void> {
  // Validate required fields
  if (!email || !message) {
    throw new Error('Email and message are required.');
  }

  // Convert the message to HTML format
  const messageHtml = marked(`
    Full Name: ${fullName}
    
    Email: ${email}
    
    Phone Number:  ${phone}
    
    Message:
    
    ${message}
  `);
  
  try {
    // Define the template parameters
    const templateParams = {
      from_name: fullName || 'Not provided', // Default value if fullName is not provided
      from_email: email,
      phone_number: phone || 'Not provided', // Default value if phone is not provided
      message: messageHtml,
    };

    // Send the email
    const response = await emailjs.send(
      'service_18fzjpm', // Replace with your EmailJS Service ID
      'template_88pilhv', // Replace with your EmailJS Template ID
      templateParams,
      'lZlJM3FwXbXLkTufN' // Replace with your EmailJS Public Key
    );

    // Check the response status
    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }

    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
