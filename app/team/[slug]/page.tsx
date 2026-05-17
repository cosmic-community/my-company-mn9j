// app/team/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getTeamMember } from '@/lib/cosmic';
import { getMetafieldValue } from '@/lib/cosmic';

export default async function TeamMemberDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = await getTeamMember(slug);

  if (!member) notFound();

  const name = getMetafieldValue(member.metadata?.full_name) || member.title;
  const jobTitle = getMetafieldValue(member.metadata?.job_title);
  const bio = getMetafieldValue(member.metadata?.bio);
  const email = getMetafieldValue(member.metadata?.email);
  const linkedin = getMetafieldValue(member.metadata?.linkedin_url);
  const years = member.metadata?.years_experience;
  const photo = member.metadata?.photo;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          {photo && (
            <img
              src={`${photo.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
              alt={name}
              width={400}
              height={400}
              className="w-full rounded-2xl shadow-lg"
            />
          )}
        </div>
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{name}</h1>
          {jobTitle && <p className="text-xl text-primary-600 font-semibold mb-4">{jobTitle}</p>}
          {years && (
            <p className="text-gray-600 mb-6">
              <strong>{years}</strong> years of experience
            </p>
          )}
          {bio && (
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{bio}</p>
            </div>
          )}
          <div className="flex flex-wrap gap-3">
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center px-5 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition"
              >
                Email
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}