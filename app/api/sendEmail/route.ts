import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export async function POST(request: Request) {
  const { username, email, phone, company, message } = await request.json();

  const msg = {
    to: "thomas@hiho.co.nz",
    from: "thomas@hiho.co.nz",
    subject: "New message from Thomas Profile",
    text: `
        Name: ${username}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Message: ${message}
      `,
  };

  try {
    await sgMail.send(msg);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.log(error.response.body);
    return new Response(JSON.stringify({ error: "Error sending email" }), {
      status: 500,
    });
  }
}
