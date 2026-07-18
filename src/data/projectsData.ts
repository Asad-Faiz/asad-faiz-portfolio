import evendoLogo from '../assets/evendo_preview.png';
import offmaxLogo from '../assets/offmax_preview.png';
import ocrLogo from '../assets/ocr_scanner_preview.png';
import excelLogo from '../assets/excel_converter_preview.png';
import aichatbotlogo from '../assets/Ai_Chat_bot.png';
import fontkeren from '../assets/font_keren.png';
import articleRewriter from '../assets/article_rewritter.png';
import repharser from '../assets/repharaser.png';
import extractTextFromImage from '../assets/extract_text_from.png';
import aiHumanizer from '../assets/ai_humanizer.png';

export interface Project {
  id: number;
  title: string;
  logo: string;        // Imported image or local asset path
  rating: string;      // App rating (e.g. "4.8")
  downloads: string;   // App downloads (e.g. "100K+")
  description: string; // Compact description shown on back side of the card
  tags: string[];      // Core tags/technologies used
  playstoreLink?: string;
  appstoreLink?: string;
}

export const projectsList: Project[] = [
  {
    id: 10,
    title: "AI Humanizer & Detector",
    logo: aiHumanizer,
    rating: "4.8",
    downloads: "100k+",
    description: "Use AI Humanizer & Detector App to Detect and Humanize AI content of GPT, Claude, Copilot, Gemini, and any other AI generator",
    tags: ["Flutter", "Dart", "RESTAPI", "Hive", "RiverPod", "AdMob", "MethodChannel", "In-App-Purchase"],
    playstoreLink: "https://play.google.com/store/apps/details?id=com.editpad.aitext.humanizer&pcampaignid=web_share",
  },
  {
    id: 10,
    title: "Extract Text From Image",
    logo: extractTextFromImage,
    rating: "4.8",
    downloads: "50K+",
    description: "Use this app to easily convert your image to text, JPG to Word, Image to PDF, PDF to Word, & PDF to Text. Plus, it offers a PDF Reader to help you conveniently read PDFs.",
    tags: ["Flutter", "Dart", "RESTAPI", "Hive", "RiverPod", "AdMob", "MethodChannel", "In-App-Purchase"],
    playstoreLink: "https://play.google.com/store/apps/details?id=com.extracttextfromimage.textscanner&pcampaignid=web_share",
  },
  {
    id: 9,
    title: "Paraphrase Tool - Ai Writer",
    logo: repharser,
    rating: "4.5",
    downloads: "50K+",
    description: "Our Paraphrasing & Rephrase Sentences app helps you Rewrite your Text with a Plagiarism Checker also Grammar Checker quickly on the go. Rewording app can Paraphraser all types of Content, such as Blogs, Emails, and Assignments, easily on your phone using our Paraphrase app. The Ai Paraphrase Tool can Rephrase your Paragraph, Essay, and Story",
    tags: ["Flutter", "Dart", "RESTAPI", "ToStore", "RiverPod", "AdMob", "Firebase", "In-App-Purchase"],
    playstoreLink: "https://play.google.com/store/apps/details?id=com.allmath.paraphrase&pcampaignid=web_share",
  },
  {
    id: 8,
    title: "Article Rewriter - Paraphraser",
    logo: articleRewriter,
    rating: "4.0",
    downloads: "10k",
    description: "Use our Rewrite AI and paraphrase app to rephrase text instantly, correct spelling & grammar, check plagiarism, and generate summary of any content with rewrite article app. ",
    tags: ["Flutter", "Dart", "RESTAPI", "ToStore", "RiverPod", "AdMob", "Firebase", "In-App-Purchase"],
    playstoreLink: "https://play.google.com/store/apps/details?id=com.enzipe.article.rewriter&pcampaignid=web_share",
  },
  {
    id: 7,
    title: "Cool Fonts Keyboard App",
    logo: fontkeren,
    rating: "4.8",
    downloads: "50k",
    description: "Explore a wide range of unique, attractive, stylish text and Cool Fonts to make your text look more creative. Let our app’s Keyboard Fonts revolutionize the way you express yourself.\nOur Cool Fonts Keyboard App can help you easily transform simple text into fancy, cool, and stylish text. It provides access to 80+ cool fonts of different categories. With our font style keyboard for typing, you can create graceful messages, names, bios, and comments to stand out on social media. ",
    tags: ["Flutter", "Dart", "JNI", "JNIGEN", "hive", "RiverPod", "AdMob", "Firebase", "In-App-Purchase"],
    playstoreLink: "https://play.google.com/store/apps/details?id=com.enzipe.fontkeren.fontapp&pcampaignid=web_share",
  },
  {
    id: 6,
    title: "AI Chatbot",
    logo: aichatbotlogo,
    rating: "4.0",
    downloads: "1M",
    description: "AI chatbot for writing stories, recipes & essays, solve mathematical problems, generate codes & more. Use it as a virtual tutor in almost any field",
    tags: ["Flutter", "Dart", "RestApi", "hive", "Firebase", "In-App-Purchase"],
    playstoreLink: "https://play.google.com/store/apps/details?id=com.open.ai.chat.bot.ask.questions&pcampaignid=web_share",
    appstoreLink: "https://apps.apple.com/us/app/ai-chat-smart-ai-assistant/id6449362725"
  },
  {
    id: 1,
    title: "Evendo — Digital Travel Guide",
    logo: evendoLogo,
    rating: "3.9",
    downloads: "5k+",
    description: "Your ultimate travel guide, offering tailored guides for thousands of cities and destinations worldwide. Features offline maps integration, local recommendations, and location markers.",
    tags: ["Flutter", "Dart", "RestApi", "Google Maps", "SqfLite", "Firebase"],
    playstoreLink: "https://play.google.com/store/apps/details?id=com.evendo.global_guide&pcampaignid=web_share",
    appstoreLink: "https://apps.apple.com/us/app/evendo-travel-guide/id6692629987"
  },
  {
    id: 2,
    title: "OffMax Driver — Logistics & GPS",
    logo: offmaxLogo,
    rating: "3.3",
    downloads: "1K+",
    description: "Allows logistics drivers to accept load requests, manage cargo shipments, and view real-time maps. Integrated dispatcher controls and GPS path route tracking.",
    tags: ["Flutter", "Dart", "Google Maps", "Hive Db", "PolyLines", "OneSignal",],
    playstoreLink: "https://play.google.com/store/apps/details?id=com.holosoftinc.offmaxlogistics&pcampaignid=web_share",
    appstoreLink: "https://apps.apple.com/us/app/off-max-driver/id1663428708"
  },
  {
    id: 3,
    title: "Text Scanner OCR — PDF Scanner",
    logo: ocrLogo,
    rating: "4.7",
    downloads: "100K+",
    description: "High-accuracy OCR text scanner to extract digital text from photos. Includes translation capabilities, PDF document compilation, offline scanning, and multiple language translation.",
    tags: ["Flutter", "MLKit OCR", "Hive Db", "RevenueCat", "OpenAI API", ""],
    // playstoreLink: "https://play.google.com/store/apps/details?id=et.image.text.converter.doc.ocr.scanner.pdf&pcampaignid=web_share",
    appstoreLink: "https://apps.apple.com/pk/app/text-scanner-ocr-scan-text/id1588056235"
  },
  {
    id: 4,
    title: "Business Card Scanner — VCF Contacts",
    logo: ocrLogo, // Reusing ocrLogo as placeholder, you can change to a specific logo asset
    rating: "4.9",
    downloads: "5K+",
    description: "Detects contact cards from scanned business cards, parsing phone numbers and names to export to VCF format. Integrates cloud profile backup and batch captures.",
    tags: ["Flutter", "MLKit", "Hive Db", "Local Notifications", "Firebase"],
    appstoreLink: "https://apps.apple.com/pk/app/business-card-scanner-reader/id1533647561"
  },
  {
    id: 5,
    title: "Image to Excel Converter — XLSX",
    logo: excelLogo,
    rating: "4.9",
    downloads: "5K+",
    description: "Convert photos of documents, receipts, or forms into editable Excel spreadsheets effortlessly. Supports export to CSV, PDF, XLSX, HTML, and other tabular file structures.",
    tags: ["Flutter", "OpenAI API", "Hive", "Firebase", "Google Ads"],
    playstoreLink: "https://play.google.com/store/apps/details?id=com.image.excel.converter.xlsx.sheets&pcampaignid=web_share",
    appstoreLink: "https://apps.apple.com/jo/app/image-to-excel-converter-xlsx/id6633430093"
  }
];
