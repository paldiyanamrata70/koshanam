import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import hangerImg from './assets/images/hangerrr.png';
import sareeImg from './assets/images/Balaram_Saha_Dhonekali_Saree_63ad7d5a-2478-4993-ba3f-7c7927977f14-Picsart-AiImageEnhancer.png';

// Set CSS custom properties for images
document.documentElement.style.setProperty('--cursor-img', `url(${hangerImg})`);
document.documentElement.style.setProperty('--faces-bg', `url(${sareeImg})`);

// Disable right-click context menu
// document.addEventListener('contextmenu', (e) => {
//   e.preventDefault();
// });

createRoot(document.getElementById("root")!).render(<App />);
