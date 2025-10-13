import React from "react";

export default function Home() {
  return (
    <section>
      <div className="card hero">
        <div className="left">
          <h1>Bem-vindo à Academia StackX</h1>
          <p>Aprenda desenvolvimento web com cursos práticos e projetos reais.</p>
        </div>
      </div>

      <div className="card">
        <h3>O que oferecemos</h3>
        <ul>
          <li>Trilhas práticas em Frontend e Backend</li>
          <li>Projetos reais para portfólio</li>
          <li>Mentoria e revisão de código</li>
        </ul>
      </div>
    </section>
  );
}
