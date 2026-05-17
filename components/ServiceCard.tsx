import Link from 'next/link';
import { Service } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function ServiceCard({ service }: { service: Service }) {
  const name = getMetafieldValue(service.metadata?.name) || service.title;
  const shortDesc = getMetafieldValue(service.metadata?.short_description);
  const icon = getMetafieldValue(service.metadata?.icon) || '🛠️';
  const image = service.metadata?.featured_image;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary-500 transition-all duration-300"
    >
      {image && (
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
          {name}
        </h3>
        {shortDesc && <p className="text-gray-600 text-sm line-clamp-3">{shortDesc}</p>}
      </div>
    </Link>
  );
}