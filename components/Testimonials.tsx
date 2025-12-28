import React, { useState } from 'react';
import { ScrollAnimated } from './ScrollAnimated';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  project: string;
  rating: number;
  text: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Homeowner',
    project: 'Modern Residence, Whitefield',
    rating: 5,
    text: 'Construction Buddy transformed our dream into reality. Their attention to detail and professional approach made the entire process smooth. The quality of work exceeded our expectations, and they completed the project on time.',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Business Owner',
    project: 'Commercial Office Space',
    rating: 5,
    text: 'We hired Construction Buddy for our office renovation, and they delivered exceptional results. The team was professional, responsive, and worked within our budget. Highly recommend their services!',
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'Property Developer',
    project: 'Residential Complex',
    rating: 5,
    text: 'Working with Construction Buddy has been a pleasure. Their expertise in construction management and quality control is outstanding. They handle everything from planning to execution flawlessly.',
  },
  {
    id: '4',
    name: 'Sunita Reddy',
    role: 'Homeowner',
    project: 'Villa Construction',
    rating: 5,
    text: 'From the initial consultation to the final handover, Construction Buddy maintained the highest standards. Their transparent communication and commitment to quality made us feel confident throughout the project.',
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-tertiary fill-tertiary' : 'text-muted fill-muted'}`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
};

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollAnimated animation="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </div>
        </ScrollAnimated>

        <div className="max-w-4xl mx-auto">
          <ScrollAnimated animation="fadeInUp" delay={200}>
            <div className="relative bg-card rounded-lg shadow-lg p-8 md:p-12 border border-border">
              {/* Quote Icon */}
              <div className="absolute top-4 left-4 text-secondary/20">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonials[currentIndex].rating} />
                </div>

                {/* Testimonial Text */}
                <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                    <p className="text-xs text-muted-foreground">{testimonials[currentIndex].project}</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-secondary w-8' : 'bg-muted-foreground/30'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </ScrollAnimated>
        </div>
      </div>
    </section>
  );
};

