import express, { Request, Response } from 'express';
import { Resend } from 'resend';

const app = express();
const resend = new Resend('re_Sp8W2NPR_FkinWFo3UJBi1GhJrXSbxqvR');

app.use(express.json());

// POST route to handle contact form submission
app.post('/api/test', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  try {
    // Send email using Resend API
    const emailData = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['sandeepaathukorala.personal@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    res.status(200).json({ success: true, data: emailData });
  } catch (error: unknown) {
    console.error('Resend Error:', error);
    // Type narrowing for the `unknown` error
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
