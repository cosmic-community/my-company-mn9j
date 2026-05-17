import { getTeamMembers } from '@/lib/cosmic';
import TeamMemberCard from '@/components/TeamMemberCard';

export const metadata = { title: 'Our Team | My Company' };

export default async function TeamPage() {
  const members = await getTeamMembers();

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experts who make it all happen.
          </p>
        </div>
        {members.length === 0 ? (
          <p className="text-center text-gray-500">No team members yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((m) => (
              <TeamMemberCard key={m.id} member={m} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}