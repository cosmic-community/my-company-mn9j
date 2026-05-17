import { createBucketClient } from '@cosmicjs/sdk';
import { Service, TeamMember, CaseStudy, Testimonial, hasStatus } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}

export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects.find({ type: 'services' }).depth(1);
    return response.objects as Service[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw error;
  }
}

export async function getService(slug: string): Promise<Service | null> {
  try {
    const response = await cosmic.objects.findOne({ type: 'services', slug }).depth(1);
    return response.object as Service;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw error;
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects.find({ type: 'team-members' }).depth(1);
    return response.objects as TeamMember[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw error;
  }
}

export async function getTeamMember(slug: string): Promise<TeamMember | null> {
  try {
    const response = await cosmic.objects.findOne({ type: 'team-members', slug }).depth(1);
    return response.object as TeamMember;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw error;
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects.find({ type: 'case-studies' }).depth(1);
    return response.objects as CaseStudy[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw error;
  }
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const response = await cosmic.objects.findOne({ type: 'case-studies', slug }).depth(1);
    return response.object as CaseStudy;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw error;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects.find({ type: 'testimonials' }).depth(1);
    return response.objects as Testimonial[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw error;
  }
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  const all = await getTestimonials();
  return all.filter((t) => t.metadata?.featured === true);
}