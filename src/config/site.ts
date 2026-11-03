import ogImage from "@/assets/images/profile/AW_profile.jpg";

export const siteConfig = {
  name: "Austin Widmer",
  description:
    "Aerospace engineering research, professional experience, and weightlifting coaching.",
  url: "https://austinwidmer.github.io",
  lang: "en",
  locale: "en_US",
  author: "Austin Widmer",
  twitter: "",
  ogImage: ogImage,
  socialLinks: {
    github: "https://github.com/austinwidmer",
    linkedin: "https://www.linkedin.com/in/austin-widmer",
    instagram: "https://www.instagram.com/widmer102kg/",
    email: "mailto:austin.widmer@tamu.edu",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "About", href: "/about/" },
    { text: "Experience", href: "/cv/" },
    { text: "Publications", href: "/publications/" },
    { text: "Projects", href: "/projects/" },
  ],
};
