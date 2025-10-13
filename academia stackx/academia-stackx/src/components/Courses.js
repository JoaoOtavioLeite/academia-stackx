import React from "react";
import courses from "../data/courses";

export default function Courses() {
  return (
    <section>
      <div className="card">
        <h3>Cursos disponíveis</h3>
        <div className="courses-grid">
          {courses.map((c) => (
            <article key={c.id} className="course">
              <h4>{c.title}</h4>
              <p>{c.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
