import IconInstagram from "@lucide/astro/icons/instagram";
import IconTwitter from "@lucide/astro/icons/twitter";
import IconEmail from "@lucide/astro/icons/mail";
import IconGithub from "@lucide/astro/icons/github";
import IconLinkedin from "@lucide/astro/icons/linkedin";

interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon?: any;
}

interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  image: string;
  social: SocialLink[];
}

export const siteConfig: SiteConfig = {
  name: "Greg Hunt",
  title: "Software Engineer",
  description: "Personal website of Greg Hunt",
  url: "https://greghunt.dev",
  image: "https://img.ghunt.io/greghunt.jpeg",
  social: [
    {
      platform: "Instagram",
      url: "https://instagram.com/gregandboo",
      username: "gregandboo",
      icon: IconInstagram,
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/freshbreweddev",
      username: "freshbreweddev",
      icon: IconTwitter,
    },
    {
      platform: "GitHub",
      url: "https://github.com/greghunt",
      username: "greghunt",
      icon: IconGithub,
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/greghunt/",
      username: "greghunt",
      icon: IconLinkedin,
    },
    {
      platform: "Email",
      url: "mailto:treat-sunlit0b@icloud.com",
      username: "treat-sunlit0b@icloud.com",
      icon: IconEmail,
    },
  ],
} as const;

// Type for the config
export type { SiteConfig, SocialLink }; 