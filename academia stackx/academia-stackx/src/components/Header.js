import React from "react";

export default function Header({ onNavigate }) {
  const nav = [
    { id: "home", label: "Início" },
    { id: "courses", label: "Cursos" },
    { id: "about", label: "Sobre" },
    { id: "contact", label: "Contato" },
  ];

  const [active, setActive] = React.useState("home");

  function go(id) {
    setActive(id);
    onNavigate(id);
  }

  return (
    <header className="container header">
      <div className="brand">
        <div className="logo">AS</div>
        <div>
          <div style={{ fontWeight: 700 }}>Academia StackX</div>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>Aprenda dev, com prática</div>
        </div>
      </div>

      <nav className="nav">
        {nav.map((n) => (
          <button
            key={n.id}
            className={n.id === active ? "active" : ""}
            onClick={() => go(n.id)}
          >
            {n.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
