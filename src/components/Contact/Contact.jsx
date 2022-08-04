import React from 'react'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    Card,
    CardContent,
    InputAdornment,
    TextField,
    Typography,
    Button,
  } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import MessageIcon from "@mui/icons-material/Message";
import './Contact.css'


  

export default function Contact() {

  const [successMessage, setsuccessMessage] = useState(false);

    const form = useRef();

  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_frad4yg', 'template_cl31ukk', form.current, 't2XWmEDFNLIP16RH8')
        .then((result) => {
            console.log(result.text);
            setsuccessMessage(true)
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  
  return (
    <div className='contact-container' id='contact'>
       <div className="contact-form">
         
    <Card sx={{maxWidth: 550, height: 630, color: 'primary.main', borderRadius: 10, border: '3px solid black', opacity: 0.9}}>
      <CardContent sx={{height: 630, bgcolor: 'grey', opacity: 1, maxWidth: 550}}>
        <Typography textAlign='center' color='secondary' variant="h4">Contact Me</Typography>
        <form ref={form} onSubmit={sendEmail}>
        <TextField
          sx={{paddingTop: 3, color: 'white', border: '2px solid white'}}  
          required
          fullWidth
          label="Name"
          placeholder="Name"
          name="user_name"
          variant="filled"
          InputProps={{
              startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
         sx={{paddingTop: 3}}  
        required
          fullWidth
          label="Email"
          placeholder="Your Email"
          name="user_email"
          type="email"
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
         sx={{paddingTop: 3}}  
        required
          fullWidth
          type="number"
          name="number"
          label="Phone Number"
          placeholder="Your Phone Number"
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactPhoneIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
         sx={{paddingTop: 3}}  
        required
          multiline rows={5}
          fullWidth
          label="Message"
          placeholder="Your Message"
          name="message"
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MessageIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <Button  sx={{marginTop: 3, fontSize: 20}} type="submit" value="Send" fullWidth color="secondary" variant="contained">Submit Message</Button>
        {successMessage ? <Typography sx={{mt: 2}} variant='h5' color='green'>Your message has been sent! I will get back to you shortly!</Typography> : null}
        </form>
      </CardContent>
    </Card>
  </div></div>
  )
}
