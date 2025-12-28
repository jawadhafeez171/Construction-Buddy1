import React, { useState } from 'react';
import { ScrollAnimated } from './ScrollAnimated';
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
    answer: 'We handle all necessary approvals and permits, including BBMP building plan approval, BESCOM electrical approval, and BWSSB water connection approval. This is included in all our construction packages, so you don\'t have to worry about the paperwork.',
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimated animation="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our construction services, process, and packages.
            </p>
          </div>
        </ScrollAnimated>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <ScrollAnimated
              key={index}
              animation="fadeInUp"
              delay={index * 50}
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </ScrollAnimated>
          ))}
        </div>
      </div>
    </section>
  );
};

