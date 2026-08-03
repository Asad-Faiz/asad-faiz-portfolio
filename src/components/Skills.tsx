import React from 'react';
import './Skills.css';

interface SkillGroup {
  category: string;
  items: string[];
}

export const Skills: React.FC = () => {
  const skillGroups: SkillGroup[] = [
    {
      category: "Core Mobile Development",
      items: ["Flutter", "Dart", "GetX", "BLoC", "RiverPod", "Provider State Management", "Localization", "OneSignal Notification"]
    },
    {
      category: "APIs & Databases",
      items: ["RestApi (http / dio)", "Hive", "SqfLite", "Google Maps Api", "Firebase", "Firebase Auth"]
    },
    {
      category: "Integrations",
      items: ["Git", "Payment Integration", "Google Ads", "Firebase Crashlytics"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          A comprehensive overview of my technical stack, tools, and platforms I specialize in for engineering cross-platform and web systems.
        </p>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="skills-card">
            <h3 className="category-title">{group.category}</h3>
            <div className="skills-list">
              {group.items.map((skill, sIdx) => (
                <div key={sIdx} className="skill-badge-container">
                  <span className="skill-dot"></span>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
