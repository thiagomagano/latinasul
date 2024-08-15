import type { APIRoute } from "astro";
import { sendEmail } from "@lib/utils/email";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  // Get the form data submitted by the user on the home page
  const formData = await request.formData();
  const nome = formData.get("nome") as string | null;
  const email = formData.get("email") as string | null;
  const mensagem = formData.get("mensagem") as string | null;

  const to = "othymag@gmail.com";
  const subject = `${nome} enviou uma mensagem via site da latina sul`;

  // Throw an error if we're missing any of the needed fields.
  if (!nome || !email || !mensagem) {
    throw new Error("Campos Faltando");
  }

  // Try to send the email using a `sendEmail` function we'll create next. Throw
  // an error if it fails.
  try {
    const html = `
    <div>
      <h1>${nome} diz:</h1> 
      <p style="font-size:20px;">${mensagem}</p>


      <p style="margin-top:80px;"><b>Contato</b>: ${email}</p>
    </div>
    `;
    await sendEmail({ to, subject, html });
  } catch (error) {
    throw new Error("Falha ao enviar email");
  }

  // Redirect the user to a success page after the email is sent.
  return redirect("/sucesso");
};
