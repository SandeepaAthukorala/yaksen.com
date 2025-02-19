import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["sandeepaathukorala.personal@gmail.com"], 
      subject: `New Contact Form Submission from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    res.status(200).json({ success: true, data });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Resend Error:", error.message);
      res.status(500).json({ error: error.message });
    } else {
      console.error("Unknown Error:", error);
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
}
