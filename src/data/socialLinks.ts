import TwitterIcon from '../assets/twitter.svg';
import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import LinkedInIcon from '../assets/linkedin.svg';
import MediumIcon from '../assets/medium.svg'

interface SocialLink {
  id: number;
  icon: string;
  social_link: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 0,
    icon: LinkedInIcon,
    social_link: 'https://www.linkedin.com/company/codespaceafrica',
  },
  {
    id: 1,
    icon: FacebookIcon,
    social_link: 'https://m.facebook.com/groups/946095563299608/?ref=share',
  },
  {
    id: 2,
    icon: InstagramIcon,
    social_link: 'https://www.instagram.com/codesspace',
  },
  {
    id: 3,
    icon: TwitterIcon,
    social_link: 'https://twitter.com/CodeSpaceHQ',
  },
  {
    id: 4,
    icon: MediumIcon,
    social_link: 'https://codespaceafrica.medium.com/',
  },
];
