import { Resend } from "resend";

export async function sendConfirmationEmail(
  customerName: string,
  customerEmail: string,
) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is missing");
  }

  const resend = new Resend(apiKey);

  const result = await resend.emails.send({
    
    from: "Celestial Compass <onboarding@resend.dev>",
    to: customerEmail,
    subject: "Consultation Request Received",
    html: `
      <h2>Hello ${customerName},</h2>

      <p>Thank you for contacting <b>Pandit Vikas Chandra Tripathi</b>.</p>

      <p>We have received your consultation request successfully.</p>

      <p>I will contact you as soon as possible.</p>

      <br/>

      <p>Regards,</p>
      <p><b>Vikas Chandra Tripathi</b></p>
    `,
  });

  console.log("Resend Response:", result);

return result;
}