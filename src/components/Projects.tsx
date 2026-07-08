import React from 'react';
import './Projects.css';
import evendoImg from '../assets/evendo_preview.png';
import offmaxImg from '../assets/offmax_preview.png';
import ocrImg from '../assets/ocr_scanner_preview.png';
import excelImg from '../assets/excel_converter_preview.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  playstoreLink?: string;
  appstoreLink?: string;
}

export const Projects: React.FC = () => {
  const projectsList: Project[] = [
    {
      id: 1,
      title: "Evendo — Digital Travel Guide",
      description: "Your ultimate travel guide, offering tailored guides for thousands of cities and destinations worldwide. Features offline maps integration, local recommendations, and location markers.",
      image: evendoImg,
      tags: ["Flutter", "Dart", "RestApi", "Google Maps", "SqfLite", "Firebase Crashlytics"],
      playstoreLink: "https://play.google.com/store/apps/details?id=com.evendo.global_guide&pcampaignid=web_share",
      appstoreLink: "https://apps.apple.com/us/app/evendo-travel-guide/id6692629987"
    },
    {
      id: 2,
      title: "OffMax Driver — Logistics & GPS",
      description: "Allows logistics drivers to accept load requests, manage cargo shipments, and view real-time maps. Integrated dispatcher controls and GPS path route tracking.",
      image: offmaxImg,
      tags: ["Flutter", "Dart", "RestApi", "Google Maps", "Hive Db", "PolyLines", "OneSignal"],
      playstoreLink: "https://play.google.com/store/apps/details?id=com.holosoftinc.offmaxlogistics&pcampaignid=web_share",
      appstoreLink: "https://apps.apple.com/us/app/off-max-driver/id1663428708"
    },
    {
      id: 3,
      title: "Text Scanner OCR — Camera PDF Tools",
      description: "High-accuracy OCR text scanner to extract digital text from photos. Includes translation capabilities, PDF document compilation, offline scanning, and multiple language translation.",
      image: ocrImg,
      tags: ["Flutter", "Dart", "MLKit OCR", "Hive Db", "RevenueCat", "OpenAI API", "Google Ads"],
      playstoreLink: "https://play.google.com/store/apps/details?id=et.image.text.converter.doc.ocr.scanner.pdf&pcampaignid=web_share",
      appstoreLink: "https://apps.apple.com/pk/app/text-scanner-ocr-scan-text/id1588056235"
    },
    {
      id: 4,
      title: "Business Card Scanner — VCF Contact Manager",
      description: "Detects contact cards from scanned business cards, parsing phone numbers and names to export to VCF format. Integrates cloud profile backup and batch captures.",
      image: ocrImg,
      tags: ["Flutter", "MLKit", "Hive Db", "Local Notifications", "Firebase", "Payment Integration"],
      appstoreLink: "https://apps.apple.com/pk/app/business-card-scanner-reader/id1533647561"
    },
    {
      id: 5,
      title: "Image to Excel Converter — Spreadsheets",
      description: "Convert photos of documents, receipts, or forms into editable Excel spreadsheets effortlessly. Supports export to CSV, PDF, XLSX, HTML, and other tabular file structures.",
      image: excelImg,
      tags: ["Flutter", "OpenAI API", "RestApi", "Hive", "Firebase", "Payment Integration", "Google Ads"],
      playstoreLink: "https://play.google.com/store/apps/details?id=com.image.excel.converter.convert.photos.jpg.pdf.png.jpeg.xlsx&pcampaignid=web_share",
      appstoreLink: "https://apps.apple.com/jo/app/image-to-excel-converter-xlsx/id6633430093"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Published Mobile Apps</h2>
        <p className="section-subtitle">
          Explore mobile applications designed, developed, and published on Google Play and Apple App Store.
        </p>
      </div>
      <div className="projects-grid">
        {projectsList.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                {project.playstoreLink && (
                  <a href={project.playstoreLink} target="_blank" rel="noreferrer" className="project-btn">Play Store</a>
                )}
                {project.appstoreLink && (
                  <a href={project.appstoreLink} target="_blank" rel="noreferrer" className="project-btn AppStore">App Store</a>
                )}
              </div>
            </div>
            <div className="project-info">
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>
              <div className="project-links">
                {project.playstoreLink && (
                  <a href={project.playstoreLink} target="_blank" rel="noreferrer" className="link-item">Google Play</a>
                )}
                {project.appstoreLink && (
                  <a href={project.appstoreLink} target="_blank" rel="noreferrer" className="link-item">App Store</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
