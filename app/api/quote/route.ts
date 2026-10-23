import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { form, items, total } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Revelation Africa Safari" <${process.env.SMTP_USER}>`,
      to: "revelationafricansafaris@gmail.com",
      replyTo: form.email,
      subject: `Quote Request from ${form.name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${form.name}</p>
        <p><strong>Email:</strong> ${form.email}</p>
        <p><strong>Phone:</strong> ${form.countryCode} ${form.phone}</p>
        <h3>Safaris:</h3>
        <ul>
          ${items.map((item: any) => `
            <li>
              <strong>${item.title}</strong><br/>
              ${item.durationDays} Days / ${item.durationNights} Nights<br/>
              Travelers: ${item.travelers}<br/>
              Start Date: ${item.startDate || "TBD"}<br/>
              Subtotal: $${(item.priceUSD * item.travelers).toLocaleString()}
            </li>
          `).join("")}
        </ul>
        <p><strong>Total:</strong> $${total.toLocaleString()}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}