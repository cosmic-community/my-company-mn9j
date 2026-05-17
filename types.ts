export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name?: string;
    short_description?: string;
    full_description?: string;
    icon?: string;
    featured_image?: CosmicImage;
    key_features?: string[] | string;
    starting_price?: string | number;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name?: string;
    job_title?: string;
    photo?: CosmicImage;
    bio?: string;
    email?: string;
    linkedin_url?: string;
    years_experience?: number;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_title?: string;
    client_name?: string;
    industry?: string;
    hero_image?: CosmicImage;
    challenge?: string;
    solution?: string;
    results?: string;
    related_services?: Service[];
    team_lead?: TeamMember;
    project_date?: string;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    author_name?: string;
    author_title?: string;
    company?: string;
    author_photo?: CosmicImage;
    rating?: number;
    related_case_study?: CaseStudy;
    featured?: boolean;
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}