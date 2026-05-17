// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getService } from '@/lib/cosmic';
import { getMetafieldValue } from '@/lib/cosmic';

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) notFound();

  const name = getMetafieldValue(service.metadata?.name) || service.title;
  const shortDesc = getMetafieldValue(service.metadata?.short_description);
  const fullDesc = getMetafieldValue(service.metadata?.full_description);
  const icon = getMetafieldValue(service.metadata?.icon) || '🛠️';
  const image = service.metadata?.featured_image;
  const startingPrice = getMetafieldValue(service.metadata?.starting_price);
  const keyFeatures = service.metadata?.key_features;

  let featuresArr: string[] = [];
  if (Array.isArray(keyFeatures)) {
    featuresArr = keyFeatures;
  } else if (typeof keyFeatures === 'string' && keyFeatures.length > 0) {
    featuresArr = keyFeatures.split('\n').filter(Boolean);
  }

  return (
    <article>
      {image && (
        <div className="h-64 md:h-96 bg-gray-100 overflow-hidden">
          <img
            src={`${image.imgix_url}?w=2000&h=800&fit=crop&auto=format,compress`}
            alt={name}
            width={1200}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-5xl mb-4">{icon}</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{name}</h1>
        {shortDesc && <p className="text-xl text-gray-600 mb-8">{shortDesc}</p>}
        {startingPrice && (
          <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-lg font-semibold mb-8">
            Starting at ${startingPrice}
          </div>
        )}
        {fullDesc && (
          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{fullDesc}</p>
          </div>
        )}
        {featuresArr.length > 0 && (
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="space-y-2">
              {featuresArr.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}