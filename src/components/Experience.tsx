import React from 'react';
import './Experience.css';

interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      company: "HOLOSOFT",
      role: "Flutter Developer (Android / iOS)",
      location: "Onsite | Faisalabad, Punjab",
      period: "Feb 2025 - Present",
      bullets: [
        "Gained comprehensive hands-on experience in supporting real-world service mobile applications, focusing on continuous improvement and adherence to robust development standards.",
        "Collaborated effectively with experienced development teams and cross-functional stakeholders (including designers and testers) to implement best practices and ensure high-quality software delivery."
      ]
    },
    {
      company: "ECLIXTECH",
      role: "Flutter Developer (Android / iOS / macOS)",
      location: "Onsite | Faisalabad, Punjab",
      period: "Jan 2024 - Feb 2025",
      bullets: [
        "Drove the maintenance and performance optimization of published mobile applications across Android, iOS, and Mac platforms, consistently enhancing user satisfaction.",
        "Worked with experienced Developers to understand and implement best practices in mobile development."
      ]
    },
    {
      company: "RIFTCODES",
      role: "Flutter Developer (Android)",
      location: "Onsite | Faisalabad, Punjab",
      period: "March 2023 - Dec 2023",
      bullets: [
        "Developed and Published Mobile Applications on Google Playstore.",
        "Participated in code reviews and contributed with other developers to improve Applications.",
        "Refactored and debugged code to enhance performance and improve application stability."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h2 className="section-title">Professional Journey</h2>
        <p className="section-subtitle">
          My employment history and educational foundation in software engineering.
        </p>
      </div>

      <div className="experience-container">
        <div className="timeline">
          {jobs.map((job, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {idx !== jobs.length - 1 && <div className="marker-line"></div>}
              </div>
              <div className="timeline-content">
                <div className="job-header">
                  <div>
                    <h3 className="job-role">{job.role}</h3>
                    <h4 className="job-company">{job.company}</h4>
                  </div>
                  <div className="job-meta">
                    <span className="job-period">{job.period}</span>
                    <span className="job-location">{job.location}</span>
                  </div>
                </div>
                <ul className="job-bullets">
                  {job.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="education-box">
          <h3 className="education-title">Education</h3>
          <div className="education-card">
            <div className="edu-icon">🎓</div>
            <div className="edu-details">
              <h4>Bachelor of Software Engineering</h4>
              <p className="edu-inst">National Textile University</p>
              <p className="edu-meta">Faisalabad, Punjab • CGPA: 3.41 • 2019 - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
