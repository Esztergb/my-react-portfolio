import React from "react";
import resume from '../assets/resume.pdf'

export default function Resume() {
    return (
      <section id="resume">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <p>
            Download my <a href={resume}>resume</a>
          </p>
        </div>
      </section>
    );

}