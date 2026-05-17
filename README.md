# My Company Website

![App Preview](https://imgix.cosmicjs.com/187a90f0-51a7-11f1-8305-f921d082af6c-autopilot-photo-1519085360753-af0119f7cbe7-1778991353720.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, professional company website built with Next.js 16 and Cosmic CMS, featuring services, team members, case studies, and client testimonials.

## Features

- 🏠 Beautiful homepage with featured content
- 🛠️ Services pages with detailed information
- 👥 Team member profiles
- 📊 Case studies with results
- 💬 Client testimonials with star ratings
- 📱 Fully responsive design
- ⚡ Built with Next.js 16 App Router
- 🎨 Styled with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a09401aa6022ba8889067f6&clone_repository=6a0941b5a6022ba888906880)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
> 
> User instructions: A company website with services, team members, case studies, and testimonials"

### Code Generation Prompt

> Build a Next.js application for a company website called "My Company". The content is managed in Cosmic CMS with the following object types: services, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: A company website with services, team members, case studies, and testimonials

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic CMS SDK

## Getting Started

### Prerequisites
- Bun (or Node.js 18+)
- A Cosmic account and bucket

### Installation

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch single case study with related data
const { object: caseStudy } = await cosmic.objects
  .findOne({ type: 'case-studies', slug: 'my-slug' })
  .depth(1)
```

## Cosmic CMS Integration

This app uses 4 content types from your Cosmic bucket:
- **services**: Service offerings
- **team-members**: Team profiles
- **case-studies**: Client projects (linked to services and team)
- **testimonials**: Client quotes (linked to case studies)

## Deployment

Deploy to Vercel or Netlify with environment variables:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`
<!-- README_END -->