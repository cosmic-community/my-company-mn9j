import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <span className="text-2xl">🏢</span>
            <span>My Company</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium transition">
              Services
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-primary-600 font-medium transition">
              Team
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-primary-600 font-medium transition">
              Case Studies
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-primary-600 font-medium transition">
              Testimonials
            </Link>
          </nav>
          <Link
            href="/services"
            className="hidden md:inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}