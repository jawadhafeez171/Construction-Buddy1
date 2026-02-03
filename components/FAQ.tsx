import React, { useState } from 'react';
import { ScrollAnimated } from './ScrollAnimated';
import SectionHeader from './SectionHeader';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How long does a typical home construction project take?',
    answer: 'The duration depends on the size and complexity of the project. A standard 2BHK home typically takes 8-12 months, while a 3BHK or 4BHK may take 12-18 months. We provide detailed timelines during the planning phase and keep you updated throughout the construction process.',
    category: 'Construction',
  },
  {
    question: 'What is included in your construction packages?',
    answer: 'Our packages include all structural work, electrical and plumbing installations, flooring, painting, doors and windows, kitchen and bathroom fittings, and basic fixtures. Each package (Basic, Standard, Premium, Luxury) has different material specifications. Check our Packages page for detailed comparisons.',
    category: 'Pricing',
  },
  {
    question: 'Do you provide architectural design services?',
    answer: 'Yes! We offer comprehensive architectural and structural drawing services. Our team creates 2D floor plans, 3D elevations, structural designs, and can help with approvals. We also offer BIM services for advanced 3D visualization and clash detection.',
    category: 'Services',
  },
  {
    question: 'What warranty do you provide?',
    answer: 'We provide a 10+ year structural warranty on all our construction projects. This covers major structural elements and demonstrates our commitment to quality. We also provide warranties on specific installations like waterproofing, electrical, and plumbing work.',
    category: 'Warranty',
  },
  {
    question: 'Can I customize the design and materials?',
    answer: 'Absolutely! We work closely with you to customize designs according to your preferences and requirements. You can choose materials, finishes, and design elements that match your vision and budget. Our team will guide you through the options available in each package.',
    category: 'Customization',
  },
  {
    question: 'How do you handle project approvals and permits?',
    answer: 'We handle the complete liaison process for all necessary approvals from various departments (BBMP, BESCOM, BWSSB, etc.). However, please note that while we manage the coordination, the actual facilitation fees associated with these approvals are to be borne by the client.',
    category: 'Approvals',
  },
  {
    question: 'What payment schedule do you follow?',
    answer: 'We follow a milestone-based payment schedule that aligns with construction progress. Typically, payments are made at key stages: foundation, plinth, first floor, second floor, roofing, and final completion. We provide transparent billing with no hidden costs.',
    category: 'Payment',
  },
  {
    question: 'Do you provide interior design services?',
    answer: 'Yes, we offer comprehensive interior design services including space planning, material selection, custom furniture design, and complete turnkey interior execution. We have packages for 2BHK, 3BHK, and 4BHK homes with various design options.',
    category: 'Services',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(faqs.map(f => f.category).filter(Boolean)))];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimated animation="fadeInUp">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Find answers to common questions about our construction services, process, and packages."
            className="mb-8 md:mb-8"
          />
        </ScrollAnimated>

        {/* Search and Categories */}
        <div className="max-w-3xl mx-auto mb-12 space-y-6">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-muted-foreground group-focus-within:text-secondary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-4 border border-border rounded-xl bg-card focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category || 'All')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === category
                  ? 'bg-secondary text-secondary-foreground shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <ScrollAnimated
                key={index}
                animation="fadeInUp"
                delay={index * 50}
              >
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-bold text-foreground pr-4">{faq.question}</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 text-secondary flex-shrink-0 transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-4 mt-1 italic">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </ScrollAnimated>
            ))
          ) : (
            <div className="text-center py-12 text-muted-foreground bg-muted/20 rounded-xl border border-dashed border-border">
              <p className="text-lg">No questions found matching your search.</p>
              <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="mt-2 text-secondary font-semibold hover:underline">Clear all filters</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

