import React from 'react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="badge">Available for onsite & remote roles</div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Asad Faiz</span>
          </h1>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 1rem 0', color: 'var(--text-h)' }}>
            Professional Flutter Developer
          </h2>
          <p className="hero-subtitle">
            I engineer high-performance cross-platform applications across Android, iOS, and macOS. Specialized in robust architectures, performance optimization, and seamless API integrations.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">My Work</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="glow-effect"></div>
          <div className="visual-card">
            <div className="card-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="card-body">
              <pre className="code-block">
                <code>
                  {`class FlutterDeveloper {
  final String name = 'Asad Faiz';
  final String role = 'Flutter Dev';
  final List<String> platforms = [
    'Android', 'iOS', 'macOS'
  ];
  
  void buildAmazingApps() {
    final tools = [
      'Bloc', 'RiverPod',
      'RestApi', 'Hive'
    ];
    print('Delivering quality!');
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
