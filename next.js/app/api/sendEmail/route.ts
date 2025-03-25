import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ 
        success: false, 
        message: 'Missing required fields' 
      }, { status: 400 });
    }

    // Send email via Brevo
    const response = await axios.post('https://api.brevo.com/v3/smtp/email', {
      sender: {
        name: 'Your Website Contact Form',
        email: 'teonx7@gmail.com' // Your verified sender email
      },
      to: [
        {
          email: 'teonx7@gmail.com', // Your receiving email
          name: 'Teon'
        }
      ],
      replyTo: {
        email: email,
        name: name
      },
      subject: `New Contact Form Submission from ${name}`,
      htmlContent: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    }, {
      headers: {
        'api-key': '70e328685640aa7f1ffeb71dd35af7c0bd3eaf749563dd4a6a1080ef7055646a-TqZEHNyF7YTE502M',
        'Content-Type': 'application/json'
      }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      data: response.data 
    });

  } catch (error: any) {
    console.error('Email sending error:', error);

    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.response ? error.response.data : error.message
    }, { status: 500 });
  }
}