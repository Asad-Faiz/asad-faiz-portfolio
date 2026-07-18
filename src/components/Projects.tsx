import React, { useState } from 'react';
import { projectsList } from '../data/projectsData';
import './Projects.css';

export const Projects: React.FC = () => {
  // Track which card IDs are flipped
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Published Mobile Apps</h2>
        <p className="section-subtitle">
          Explore mobile applications designed, developed, and published on Google Play and Apple App Store.
        </p>
      </div>

      <div className="projects-grid">
        {projectsList.map((project) => {
          const isFlipped = !!flippedCards[project.id];
          return (
            <div
              key={project.id}
              className={`project-card-container ${isFlipped ? 'flipped' : ''}`}
            >
              <div className="project-card-inner">
                {/* Front Side of Card */}
                <div className="project-card-front">
                  <div className="project-header">
                    <div className="logo-wrapper">
                      <img src={project.logo} alt={project.title} className="project-logo" />
                    </div>
                    <div className="project-header-info">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-stats">
                        <span className="project-rating">
                          <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                          {project.rating}
                        </span>
                        <span className="project-stat-separator">•</span>
                        <span className="project-downloads">
                          <svg className="download-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
                          </svg>
                          {project.downloads}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="project-store-links">
                    {project.playstoreLink && (
                      <a
                        href={project.playstoreLink}
                        target="_blank"
                        rel="noreferrer"
                        className="store-link playstore"
                      >
                        <svg className="store-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5 3.25c-.28 0-.53.11-.72.29l10.22 10.2 2.92-2.92L5.47 3.51c-.14-.16-.3-.26-.47-.26zm-1 .97v15.56c0 .16.03.32.1.46L13.84 11.5 4 1.76c-.03.04-.04.09-.04.13c0 .11.02.22.04.33zm11.28 11.28L4.39 20.48c.19.18.44.27.7.27c.18 0 .36-.05.52-.14l11.96-7.29l-3.29-3.32zM15 11l4 2.44c.64.39.64 1.33 0 1.72l-2.83 1.72L12.9 13.1L15 11z" />
                        </svg>
                        <span>Google Play</span>
                      </a>
                    )}
                    {project.appstoreLink && (
                      <a
                        href={project.appstoreLink}
                        target="_blank"
                        rel="noreferrer"
                        className="store-link appstore"
                      >
                        <svg className="store-icon" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.51-.62.73-1.16 1.87-1.01 2.98 1.1.09 2.25-.56 2.96-1.43z" />
                        </svg>
                        <span>App Store</span>
                      </a>
                    )}
                  </div>

                  <button className="details-toggle-btn" onClick={() => toggleFlip(project.id)}>
                    Show Details
                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                  </button>
                </div>

                {/* Back Side of Card */}
                <div className="project-card-back">
                  <h4 className="back-title">About the App</h4>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-tags-container">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    className="details-toggle-btn back-btn"
                    onClick={() => toggleFlip(project.id)}
                  >
                    <svg className="arrow-icon back-arrow" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                    </svg>
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
