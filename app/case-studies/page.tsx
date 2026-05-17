import { getCaseStudies } from '@/lib/cosmic';
import CaseStudyCard from '@/components/CaseStudyCard';

export const metadata = { title: 'Case Studies | My Company' };

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real clients.
          </p>
        </div>
        {caseStudies.length === 0 ? (
          <p className="text-center text-gray-500">No case studies yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}