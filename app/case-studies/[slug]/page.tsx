// app/case-studies/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCaseStudy } from '@/lib/cosmic';
import { getMetafieldValue } from '@/lib/cosmic';

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  if (!caseStudy) notFound();

  const projectTitle = getMetafieldValue(caseStudy.metadata?.project_title) || caseStudy.title;
  const clientName = getMetafieldValue(caseStudy.metadata?.client_name);
  const industry = getMetafieldValue(caseStudy.metadata?.industry);
  const challenge = getMetafieldValue(caseStudy.metadata?.challenge);
  const solution = getMetafieldValue(caseStudy.metadata?.solution);
  const results = getMetafieldValue(caseStudy.metadata?.results);
  const heroImage = caseStudy.metadata?.hero_image;
  const teamLead = caseStudy.metadata?.team_lead;
  const relatedServices = caseStudy.metadata?.related_services;
  const projectDate = getMetafieldValue(caseStudy.metadata?.project_date);

  return (
    <article>
      {heroImage && (
        <div className="h-72 md:h-[28rem] bg-gray-100 overflow-hidden">
          <img
            src={`${heroImage.imgix_url}?w=2400&h=900&fit=crop&auto=format,compress`}
            alt={projectTitle}
            width={1200}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {industry && (
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-4">
            {industry}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{projectTitle}</h1>
        <div className="flex flex-wrap gap-4 text-gray-600 mb-10">
          {clientName && <span><strong>Client:</strong> {clientName}</span>}
          {projectDate && <span><strong>Date:</strong> {projectDate}</span>}
        </div>

        {challenge && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">The Challenge</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{challenge}</p>
          </section>
        )}

        {solution && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Solution</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{solution}</p>
          </section>
        )}

        {results && (
          <section className="mb-10 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Results</h2>
            <p className="text-gray-800 leading-relaxed whitespace-pre-line">{results}</p>
          </section>
        )}

        {teamLead && (
          <section className="mb-10 border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Project Lead</h2>
            <Link
              href={`/team/${teamLead.slug}`}
              className="inline-flex items-center gap-3 hover:opacity-80 transition"
            >
              {teamLead.metadata?.photo && (
                <img
                  src={`${teamLead.metadata.photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                  alt={getMetafieldValue(teamLead.metadata?.full_name) || teamLead.title}
                  width={60}
                  height={60}
                  className="w-14 h-14 rounded-full object-cover"
                />
              )}
              <div>
                <p className="font-semibold text-gray-900">
                  {getMetafieldValue(teamLead.metadata?.full_name) || teamLead.title}
                </p>
                <p className="text-sm text-gray-600">
                  {getMetafieldValue(teamLead.metadata?.job_title)}
                </p>
              </div>
            </Link>
          </section>
        )}

        {Array.isArray(relatedServices) && relatedServices.length > 0 && (
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Services</h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-primary-500 hover:text-primary-600 transition"
                >
                  {getMetafieldValue(service.metadata?.name) || service.title}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}