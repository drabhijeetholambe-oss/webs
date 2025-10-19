"use server";
import nodemailer from "nodemailer";

export async function sendContactMail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS, // App password
    },
  });

  await transporter.sendMail({
    from: email,
    to: process.env.GMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  });

  return { success: true };
}

/**
 * CURRENTLY NOT IN USE - Kept for potential future use
 *
 * This function was previously used by the Book Appointment form component.
 * The appointment booking feature has been removed in favor of WhatsApp-based bookings.
 *
 * If you need to re-enable form-based appointment booking in the future,
 * you can uncomment this function and create a new appointment form component.
 */
/*export async function bookAppointment(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const sessionType = formData.get("session-type") as string;
  const date = formData.get("date") as string;
  const time = formData.get("time") as string;
  const additionalNotes = formData.get("additional-notes") as string;

  if (!name || !email || !phone || !sessionType || !date || !time) {
    throw new Error("All required fields must be filled");
  }

  // Setup transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Compose email
  await transporter.sendMail({
    from: email,
    to: process.env.GMAIL_USER,
    subject: `New Appointment Booking from ${name}`,
    html: `
      <h2>New Appointment Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Session Type:</strong> ${sessionType}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Additional Notes:</strong> ${additionalNotes || "None"}</p>
    `,
  });

  return { success: true, message: "Appointment request sent successfully!" };
}*/