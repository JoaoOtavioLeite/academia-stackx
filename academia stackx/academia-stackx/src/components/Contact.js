import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section>
      <div className="card">
        <h3>Fale conosco</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input placeholder="Seu nome" required />
          <input placeholder="Seu email" type="email" required />
          <textarea placeholder="Mensagem" rows={4} required />
          <button type="submit">Enviar</button>
        </form>
        {sent && <p style={{ color: "#7c3aed" }}>Mensagem enviada — obrigado!</p>}
      </div>
    </section>
  );
}
