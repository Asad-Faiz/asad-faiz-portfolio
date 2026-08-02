import evendoLogo from '../assets/evendo_preview.png';
import offmaxLogo from '../assets/offmax_preview.png';
import ocrLogo from '../assets/ocr_scanner_preview.png';
import excelLogo from '../assets/excel_converter_preview.png';
import aichatbotlogo from '../assets/Ai_Chat_bot.png';
import fontkeren from '../assets/font_keren.png';
import articleRewriter from '../assets/article_rewritter.png';
import aiEssay from '../assets/ai_essay.png';
import extractTextFromImage from '../assets/extract_text_from.png';
import aiPoem from '../assets/ai_poem.png';
// import aiHumanizer from '../assets/ai_humanizer.png';

import imageToText from '../assets/image_to_text.png';
import aiWritter from '../assets/ai_writter.png';

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
  // {
  //   id: 10,
  //   title: "AI Humanizer & Detector",
  //   logo: aiHumanizer,
  //   rating: "4.8",
  //   downloads: "100k+",
  //   description: "Use AI Humanizer & Detector App to Detect and Humanize AI content of GPT, Claude, Copilot, Gemini, and any other AI generator",
  //   tags: ["Flutter", "Dart", "RESTAPI", "Hive", "RiverPod", "AdMob", "MethodChannel", "In-App-Purchase"],
  //   playstoreLink: "https://play.google.com/store/apps/details?id=com.editpad.aitext.humanizer&pcampaignid=web_share",
  // },

  {
    id: 13,//-------------------------------------------------- Done ------------------------------------------
    title: "AI Essay Writer",
    logo: aiEssay,
    rating: "4.8",
    downloads: "10k+",
    description: "Write smarter with the help of our fast AI Writer App. It is a one-pack solution to help you write emails, stories, poems, and paragraphs",
    tags: ["Flutter", "Dart", "RESTAPI", "Hive", "RiverPod", "AdMob", "MethodChannel", "In-App-Purchase"],
    playstoreLink: "https://play.google.com/store/apps/details?id=com.app.essaywriter&pcampaignid=web_share",
    appstoreLink: "https://apps.apple.com/us/app/ai-essay-writer-essay-ai/id6502164613"
  },
  {
    id: 12,//-------------------------------------------------- Done ------------------------------------------
    title: "AI Writer",
    logo: aiWritter,
    rating: "4.8",
    downloads: "10k+",
    description: "Write smarter with the help of our fast AI Writer App. It is a one-pack solution to help you write emails, stories, poems, and paragraphs",
    tags: ["Flutter", "Dart", "RESTAPI", "Hive", "RiverPod", "AdMob", "MethodChannel", "In-App-Purchase"],
    playstoreLink: "https://play.google.com/store/apps/details?id=com.writein.ai_writer&pcampaignid=web_share",
    appstoreLink: "https://apps.apple.com/us/app/ai-writer-essay-story-email/id6739533362"
  },
  {
    id: 10,//-------------------------------------------------- Done ------------------------------------------
    title: "Image to Text: Picture To Text",
    logo: imageToText,
    rating: "4.8",
    downloads: "100k+",
    description: "Convert photos, screenshots, scanned documents and handwritten notes into editable text using our advanced ocr scanner app. This smart Picture To Text combines accurate text scanner ocr technology with fast image processing to help users save time and improve productivity.",
    tags: ["Flutter", "Dart", "RESTAPI", "Hive", "RiverPod", "AdMob", "MethodChannel", "In-App-Purchase"],
    playstoreLink: "https://play.google.com/store/apps/details?id=com.prepost.imagetotext&pcampaignid=web_share",
    appstoreLink: "https://apps.apple.com/us/app/image-to-text-ocr-app/id6467405518"
  },
  {
    id: 10, //android 
    title: "Extract Text From Image",
    logo: extractTextFromImage,
    rating: "4.8",
    downloads: "50K+",
    description: "Use this app to easily convert your image to text, JPG to Word, Image to PDF, PDF to Word, & PDF to Text. Plus, it offers a PDF Reader to help you conveniently read PDFs.",
    tags: ["Flutter", "Dart", "RESTAPI", "Hive", "RiverPod", "AdMob", "MethodChannel", "In-App-Purchase"],
    playstoreLink: "https://play.google.com/store/apps/details?id=com.extracttextfromimage.textscanner&pcampaignid=web_share",
  },
  {
    id: 9, //-------------------------------------------------- Done ------------------------------------------
    title: "AI Poem Generator",
    logo: aiPoem,
    rating: "4.2",
    downloads: "50K+",
    description: "Use our AI Poem Generator app to create poems in seconds! Generate poems for any occasion, just enter a keyword or topic and let our AI write a beautiful poem for you",
    tags: ["Flutter", "Dart", "RESTAPI", "Hive", "RiverPod", "AdMob", "Firebase", "In-App-Purchase"],
    playstoreLink: "https://play.google.com/store/apps/details?id=com.ai.poem.generator.poem_generator&pcampaignid=web_share",
    appstoreLink: "https://apps.apple.com/us/app/ai-poem-generator/id6738043431"
  },
  {
    id: 8,//-------------------------------------------------- Done ------------------------------------------
    title: "Article Rewriter & Paraphraser",
    logo: articleRewriter,
    rating: "4.1",
    downloads: "50k+",
    description: "n AI writing tool that helps you rewrite, paraphrase, and rephrase sentences with better clarity and style.Use our rephrase sentences app to instantly rewrite articles or improve any text within seconds. It is a simple, fast, and accurate rewriting app to refine existing content pieces",
    tags: ["Flutter", "Dart", "RESTAPI", "ToStore", "RiverPod", "AdMob", "Firebase", "In-App-Purchase"],
    playstoreLink: "https://play.google.com/store/apps/details?id=com.spinner.articlerewriter&pcampaignid=web_share",
    appstoreLink: "https://apps.apple.com/us/app/article-rewriter-spinner/id6467834409"
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

  //-------------------------------------------------- OLD  ------------------------------------------
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
