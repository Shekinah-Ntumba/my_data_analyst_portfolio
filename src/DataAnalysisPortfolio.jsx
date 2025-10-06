/*
Data-Analyst-Portfolio.jsx
Single-file React component for a data analyst portfolio website.
How to use:
 1. Create a React app (Vite / Create React App / Next.js) and drop this file into src/.
 2. Import and render <DataAnalystPortfolio /> from App.jsx.
 3. Replace placeholder text, images and project links with your real content.

Notes:
 - This file uses plain CSS in a <style> tag so no external CSS frameworks are required.
 - The projects array contains example entries — update as needed.
 - The contact form sends an email using a mailto: link. For a real form, connect to a backend or an email service.
*/

import React from 'react';

const projects = [
  {
    title: 'Student Engagement Analysis with Excel',
    desc: 'Analyzed engagement differences between free and paid plan students across quarters; included statistical tests and visualizations.',
    tags: ['Excel', 'ToolPak', 'formulas' ],
    link: 'https://github.com/Shekinah-Ntumba/Student-Engagement-Data-Analysis',
    image: '/projects/engagement_project.png'
  },
  {
    title: 'Calculating Free-to-Paid Conversion Rate with Sql and Python',
    desc: 'Analyzed student behavior data to evaluate how users move from registration to engagement, and finally to paid conversion on an online learning platform.',
    tags: ['sql', 'Python', 'Pandas', 'Numpy', 'Matplotlib', 'seaborn', 'sciPy' ],
    link: 'https://github.com/Shekinah-Ntumba/Calculating_Free-to-Paid_Conversion_Rate_with_Sql_Project',
    image: '/projects/Free-to-Paid_conversion_project.png'
  },
  {
    title: 'Career Track Analysis with SQL and Tableau',
    desc: 'Analyzed learner performance and engagement within different career learning tracks.',
    tags: ['SQL', 'Tableau'],
    link: 'https://github.com/Shekinah-Ntumba/career_track_analysis_with_sql_and_tableu_project',
    image: '/projects/career_track_project.png'
  },
  {
    title: ' HR Analytics Dashboard with R Shiny',
    desc: 'Analyzing employee data to gain insights into workforce composition, salary distribution, and departmental performance. ',
    tags: ['R', 'Shiny', 'ShinyDashboard', 'ggplot2', 'dplyr'],
    link: 'https://github.com/Shekinah-Ntumba/Human_Resource_Management_Analytics_Dashboard_in_R',
    image: '/projects/Hr_analysis_project.png'
  },
  {
    title: ' Employee Performance Analysis with R',
    desc: ' Focused on exploring and visualizing key patterns in employee performance using R programming.  ',
    tags: ['R', 'tidyverse', 'corrplot', 'ggplot2', 'lubridate'],
    link: 'https://github.com/Shekinah-Ntumba/Employee-Performance-Analysis-in-R',
    image: '/projects/employee_performance.png'
  },
  {
    title: ' NewsFeed Analysis Dashboard with Tableau',
    desc: ' Analyzed engagement trends across news categories and time periods; identified top-performing topics and audience interaction patterns using interactive visualizations. ',
    tags: ['Tableau'],
    link: 'https://public.tableau.com/app/profile/shekinah.ntumba/viz/newsfeed_analysis_17596723854750/NewsFeedAnalysisDashboard?publish=yes',
    image: '/projects/newsfeed_analysis_project.png'
  },
  {
    title: ' Housing Market Trends Analysis with Python',
    desc: ' Focuses on exploring and visualizing key trends in the housing market using Python programming. ',
    tags: ['Python', 'Pandas', 'Numpy', 'Matplotlib', 'seaborn'],
    link: 'https://github.com/Shekinah-Ntumba/Housing-Market-Trends-with-Python',
    image: '/projects/housing_trend_project.png'
  },
  {
    title: ' Car Sales and Performance Dashboard',
    desc: ' Interactive Excel dashboard that analyzes and visualizes key performance metrics of car manufacturers and models. ',
    tags: ['Excel', 'PivotTables & PivotCharts', 'Slicers', 'Chart'],
    link: 'https://github.com/Shekinah-Ntumba/Car-Sales-and-Performance-Dashboard',
    image: '/projects/car_sale_project.png'
  }
];


export default function DataAnalystPortfolio() {
  return (
    <div className="portfolio-root">
      <header className="hero">
        <div className="hero-inner">
          <img src="/avatar.png" alt="Test Avatar" width="150" />
          <div>
            <h1>Shekinah Mpinguyabo</h1>
            <p className="lead">Data Analyst — turning messy data into actionable stories</p>
            <p className="meta">Specialties: Exploratory Data Analysis · Tableau · ML · R · Visualization · SQL · Python</p>
            <div className="cta-row">
              <a className="btn" href="#projects">See projects</a>
              <a className="btn ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Download resume</a>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <section id="about" className="card">
          <h2>About me</h2>
          <p>
            I'm a data analyst currently upskilling in statistical modeling and machine learning. I love
            turning data into clear visuals and reproducible analysis that help teams decide faster.
          </p>
          <ul className="about-list">
            <li><strong>Tools:</strong> Python, pandas, numpy, scikit-learn, TensorFlow, SQL, R, Tableau, Excel, Git</li>
            <li><strong>Work style:</strong> Reproducible notebooks, modular pipelines, and clear documentation</li>
            <li><strong>Languages:</strong> English, French</li>
          </ul>
        </section>

        <section id="projects" className="card">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <article key={i} className="project">
                <img className="project-thumb" src={p.image} alt={p.title} />
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p className="small">{p.desc}</p>
                  <div className="tags">
                    {p.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}
                  </div>
                  <div className="proj-actions">
                    <a className="link" href={p.link} target="_blank" rel="noreferrer">View details</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="card">
          <h2>Skills</h2>
          <div className="skill-grid">
            <div className="skill">
              <h4>Data wrangling</h4>
              <p>Cleaning, merging, reshaping datasets; handling missing data and outliers.</p>
            </div>
            <div className="skill">
              <h4>Statistics</h4>
              <p>Hypothesis testing, confidence intervals, regression analysis.</p>
            </div>
            <div className="skill">
              <h4>Machine Learning</h4>
              <p>Classification, regression, model evaluation, explainability (SHAP).</p>
            </div>
            <div className="skill">
              <h4>Visualization</h4>
              <p>Matplotlib, seaborn, plotly; making dashboards and clear charts for stakeholders.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="card contact">
          <h2>Contact</h2>
          <p>If you'd like to talk about a project or opportunity, email me at:</p>
          <a className="email" href="mailto:smpinguyabo@gmail.com">My email</a>

          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); window.location = 'mailto:youremail@example.com?subject=Portfolio%20Inquiry&body=' + encodeURIComponent('Hi\n\nI saw your portfolio and would like to...'); }}>
            <input placeholder="Your name" aria-label="name" required />
            <input placeholder="Your email" aria-label="email" required />
            <textarea placeholder="A short message" aria-label="message" required />
            <button type="submit" className="btn">Send email</button>
          </form>
        </section>

      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Shekinah Mpinguyabo · Built with React</p>
          <div className="socials">
            <a href="https://github.com/Shekinah-Ntumba">GitHub</a>
            <a href="https://www.linkedin.com/in/shekinah-mpinguyabo-2234b2220/">LinkedIn</a>
            
          </div>
        </div>
      </footer>

      <style>{`
      :root{--bg:#0f1724;--card:#0b1220;--muted:#9aa4b2;--accent:#6ee7b7}
      *{box-sizing:border-box}
      body,html,#root{height:100%}
      .portfolio-root {font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #e6eef8; background: linear-gradient(180deg, #071022 0%, #0b1220 100%);  min-height: 100vh;
  width: 100vw; /* Full screen width */
  overflow-x: hidden; /* Prevent horizontal scroll */
}

.container {
  width: 90%; /* Instead of fixed max-width, make it scale with screen */
  max-width: 1400px; /* Still limit extremely large screens */
  margin: 0 auto;
  padding: 40px 0; /* More vertical breathing space */
}

      .hero {
  padding: 80px 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  background: radial-gradient(circle at top left, #112244, #0b1220);
  width: 100vw; /* Take full width */
}
.hero-inner {
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center; /* Center hero content */
  flex-wrap: wrap;
  text-align: center;
}
.avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 6px 18px rgba(0,0,0,0.6);
}

      h1{font-size:28px;margin:0 0 4px}
      .lead{margin:2px 0 8px;color:var(--muted)}
      .meta{color:#9fb0c7;font-size:13px}
      .cta-row{margin-top:12px;display:flex;gap:12px}
      .btn{background:#1f6feb;padding:8px 14px;border-radius:8px;color:white;text-decoration:none;font-weight:600}
      .btn.ghost{background:transparent;border:1px solid rgba(255,255,255,0.06)}
      .card{background:rgba(255,255,255,0.02);padding:20px;border-radius:12px;margin-top:20px}
      .projects-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin-top:12px}
      .project{display:flex;flex-direction:column;border-radius:10px;overflow:hidden;background:linear-gradient(180deg, rgba(255,255,255,0.01), transparent)}
      ..project-thumb {
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

      .project-body{padding:12px}
      .small{color:var(--muted);font-size:14px}
      .tags{margin-top:10px}
      .tag{display:inline-block;padding:6px 8px;margin-right:8px;border-radius:999px;background:rgba(255,255,255,0.03);font-size:12px}
      .proj-actions{margin-top:10px}
      .link{color:#bfe3ff;text-decoration:none}
      .skill-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:12px}
      .skill{padding:12px;background:rgba(255,255,255,0.01);border-radius:8px}
      .contact{display:grid;grid-template-columns:1fr 320px;gap:16px;align-items:start}
      .email{display:inline-block;margin:6px 0 12px;color:#bfe3ff}
      .contact-form input,.contact-form textarea{width:100%;padding:8px;margin-bottom:8px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit}
      .contact-form button{display:inline-block}
      .footer{border-top:1px solid rgba(255,255,255,0.03);margin-top:30px;padding:18px 0}
      .footer .container{display:flex;justify-content:space-between;align-items:center}
      .socials a{color:var(--muted);margin-left:12px;text-decoration:none}
      @media (max-width:780px){.contact{grid-template-columns:1fr}.hero-inner{flex-direction:row}.footer .container{flex-direction:column;gap:12px}}
      `}</style>
    </div>
  );
}
