import Link from 'next/link';
import { TeamMember } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const name = getMetafieldValue(member.metadata?.full_name) || member.title;
  const jobTitle = getMetafieldValue(member.metadata?.job_title);
  const photo = member.metadata?.photo;

  return (
    <Link
      href={`/team/${member.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
    >
      {photo && (
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition">
          {name}
        </h3>
        {jobTitle && <p className="text-sm text-gray-600 mt-1">{jobTitle}</p>}
      </div>
    </Link>
  );
}