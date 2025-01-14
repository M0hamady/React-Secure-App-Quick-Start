import React, { useState } from 'react';
import { Grid, TextField, Button, Typography, Box } from '@mui/material';
import { sendEmail } from '../../utilities/sendEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { contactData } from '../../store/global/contact/contactData';
const Contact: React.FC = () => {
  // State for form fields and submission status
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setErrorMessage(null);

    try {
      await sendEmail({ fullName, email, phone, message });
      setIsSuccess(true);
      setFullName('');
      setPhone('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setErrorMessage('Failed to send the message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ padding: { xs: '20px', md: '100px 60px' }, backgroundColor: '#29372A', color: '#fff' }}>
        {/* Contact Information */}
        <Grid container spacing={4} className="lg:min-h-[50vh]">
        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" component="div" sx={{ fontFamily: 'Poppins', textTransform: 'uppercase' }}>
            Contact Now
          </Typography>
          <Typography variant="h3" component="div" sx={{ fontFamily: 'Luckiest Guy', margin: '10px 0' }}>
            GET IN TOUCH NOW
          </Typography>
          <Typography variant="body1" component="div" sx={{ fontFamily: 'Lora', marginBottom: '30px' }}>
            We specialize in the import and export of high-quality agricultural products. Our commitment to excellence ensures we provide our clients with the freshest products, sourced sustainably and delivered efficiently.
          </Typography>

          {/* Phone */}
          <Typography variant="subtitle1" component="div" sx={{ textTransform: 'uppercase', fontFamily: 'Lora' }}>
            Phone <PhoneIcon sx={{ marginRight: '8px' }} />
          </Typography>
          {contactData.phoneNumbers.map((phoneData, index) => (
            <Typography key={index} variant="body2" component="div" sx={{ fontFamily: 'Livvic', marginBottom: '20px' }}>
              <a href={phoneData.link} style={{ color: '#fff', textDecoration: 'none' }}>
                {phoneData.number}
              </a>
            </Typography>
          ))}

          {/* Email */}
          <Typography variant="subtitle1" component="div" sx={{ textTransform: 'uppercase', fontFamily: 'Lora' }}>
            Email <MailIcon sx={{ marginRight: '8px' }} />
          </Typography>
          {contactData.emails.map((emailData, index) => (
            <Typography key={index} variant="body2" component="div" sx={{ fontFamily: 'Livvic', marginBottom: '20px' }}>
              {emailData.email}
            </Typography>
          ))}

          {/* Address */}
          <Typography variant="subtitle1" component="div" sx={{ textTransform: 'uppercase', fontFamily: 'Lora' }}>
            Address
          </Typography>
          <Typography variant="body2" component="div" sx={{ fontFamily: 'Livvic' }}>
            {contactData.address}
          </Typography>
        </Grid>

        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              sx={{
                marginBottom: '20px',
                '& .MuiInputBase-root': { backgroundColor: '#263C28', color: '#fff' },
                '& .MuiOutlinedInput-root': { borderRadius: '10px' }
              }}
            />
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{
                marginBottom: '20px',
                '& .MuiInputBase-root': { backgroundColor: '#263C28', color: '#fff' },
                '& .MuiOutlinedInput-root': { borderRadius: '10px' }
              }}
            />
            <TextField
              fullWidth
              multiline
              label="Your Email"
              variant="outlined"
              type='mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                marginBottom: '20px',
                '& .MuiInputBase-root': { backgroundColor: '#263C28', color: '#fff' },
                '& .MuiOutlinedInput-root': { borderRadius: '10px' }
              }}
            />
            <TextField
              fullWidth
              label="Your Message"
              variant="outlined"
              multiline
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                marginBottom: '20px',
                '& .MuiInputBase-root': { backgroundColor: '#263C28', color: '#fff' },
                '& .MuiOutlinedInput-root': { borderRadius: '10px' }
              }}
            />
            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              sx={{
                backgroundColor: '#f7c35f',
                color: '#29372A',
                borderRadius: '20px',
                padding: '15px',
                textTransform: 'uppercase',
                fontFamily: 'Livvic',
                '&:hover': {
                  backgroundColor: '#f5b94d',
                },
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
          {isSuccess && (
            <Typography variant="body1" component="div" sx={{ color: '#4caf50', marginTop: '20px' }}>
              Thank you for your message! We will get back to you soon.
            </Typography>
          )}
          {errorMessage && (
            <Typography variant="body1" component="div" sx={{ color: '#f44336', marginTop: '20px' }}>
              {errorMessage}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
