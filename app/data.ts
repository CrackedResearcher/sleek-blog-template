import { BLOG_DATA } from "./blog-data";

type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Moody AI',
    description:
      'AI powered mood tracker to help you monitor your emotional patterns.',
    link: 'https:moody-ai.onrender.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'SyncPost',
    description: 'Sync your blog posts across all your social media accounts with AI.',
    link: 'https://sync-post.vercel.app/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Tesla Motors',
    title: 'Full Stack Software Engr',
    start: 'September 2024',
    end: 'Present',
    link: 'https://tesla.com/',
    id: 'work1',
  },
  {
    company: 'CalmEmail',
    title: 'Founder & CEO',
    start: 'March 2024',
    end: 'August 2024',
    link: 'https://calmemail.xyz',
    id: 'work2',
  },

]

export const BLOG_POSTS: BlogPost[] = BLOG_DATA;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/crackedresearcher',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/0xayush1',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ayushfrs',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/zuck',
  },
]

export const EMAIL = 'ayushkv10204@gmail.com'
