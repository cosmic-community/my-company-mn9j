import Link from 'next/link';
import { getServices, getCaseStudies, getFeaturedTestimonials } from '@/lib/cosmic';
import ServiceCard from '@/components/ServiceCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import TestimonialCard from '@/components/TestimonialCard';

export default async function HomePage() {
  const [services, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getCaseStudies(),
    getFeaturedTestimonials(),
  ]);

  const featuredServices = services.slice(0, 3);
  const featuredCaseStudies = caseStudies.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Professional Services That Drive Results
            </h1>
            <p className="text-xl text-primary-50 mb-8 leading-relaxed">
              Expert consultants delivering tailored solutions to help your business thrive in today's competitive landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition shadow-lg"
              >
                Explore Services →
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-6 py-3 bg-primary-800/50 border border-white/30 text-white font-semibold rounded-lg hover:bg-primary-800/70 transition backdrop-blur"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      {featuredServices.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions tailored to your unique business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real results from real clients across diverse industries.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCaseStudies.map((cs) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {featuredTestimonials.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses around the world.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTestimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-50 mb-8">
            Let's discuss how we can help your business grow.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition shadow-lg"
          >
            Explore Our Services
          </Link>
        </div>
      </section>
    </>
  );
}