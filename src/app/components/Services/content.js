import { Smartphone, ServerCog, Cloud, BarChart3, CodeXml } from 'lucide-react';
import img1 from '../../../../public/services/1.webp'
import img2 from '../../../../public/services/2.webp'
import img3 from '../../../../public/services/3.webp'
import img4 from '../../../../public/services/hosting.webp'
import img5 from '../../../../public/services/5.webp'



export const servicesData = [
  {
    id: "01",
    title: "End to End Web Solutions",
    description:
      "From landing pages to complex web apps and e‑commerce platforms. I build fast, scalable websites that work flawlessly on all devices. Whether you need a sleek portfolio, an online store, or a custom dashboard like a CRM or ERP, I bring it to life using modern tech from front to back. Design, development, integrations – all covered.",
    image: img1,
    Icon: CodeXml,
  },
  {
    id: "02",
    title: "Mobile App Development",
    description:
      "Need an app for both iOS and Android without breaking the bank? I’ve got you. I craft smooth, high performance mobile apps using React Native – all while making sure they’re user friendly, bug free, and ready for the app stores. One codebase, every platform.",
    image: img2,
    Icon: Smartphone,
  },
  {
    id: "03",
    title: "Backend & API Development",
    description:
      "Your app's power lies behind the scenes. I create scalable, secure, and clean backends using modern tools like Node.js, NestJS, and PostgreSQL. From crafting APIs to managing databases, I make sure your app’s data flows smoothly and securely.",
    image: img3,
    Icon: ServerCog,
  },
  {
    id: "04",
    title: "Web Hosting & Deployment",
    description:
      "Your website deserves rock solid hosting. I take care of everything from DNS to deployment—whether it’s Vercel, AWS, cPanel, or Cloudflare. Expect blazing fast load times, rock solid uptime, and smooth CI/CD workflows so your product gets live and stays live.",
    image: img4,
    Icon: Cloud,
  },
  {
    id: "05",
    title: "Marketing, Analytics & Optimization",
    description:
      "It’s not just about building it—it’s about getting it seen. I combine the power of SEO, Google Analytics, and smart digital marketing to help your brand reach the right audience. From boosting search rankings to tracking what’s working, I help you grow with data driven strategies.",
    image: img5,
    Icon: BarChart3,
  },
];





export const projectSequenceData = [
  {
    step: "01",
    title: "Strategic Planning",
    description:
      "We begin with a conversation about your goals, target audience, and design expectations. From there, I’ll craft a tailored website strategy aligned with your vision."
  },
  {
    step: "02",
    title: "Visual Design",
    description:
      "Based on the plan, I design an engaging and brand aligned interface. You'll receive regular previews to ensure the design evolves in line with your preferences."
  },
  {
    step: "03",
    title: "Development Phase",
    description:
      "Once the design is approved, I start building your website using modern tech and best practices. Throughout the process, I’ll keep you updated and incorporate your feedback."
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "After final testing and your approval, your site goes live. I also offer ongoing support to make sure everything stays smooth and up to date."
  }
];

