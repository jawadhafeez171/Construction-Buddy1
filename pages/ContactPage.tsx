
import React, { useRef } from 'react';
import { PHONE_NUMBER, ADDRESS } from '../constants';
import PhoneIcon from '../components/icons/PhoneIcon';
import LocationIcon from '../components/icons/LocationIcon';
import MailIcon from '../components/icons/MailIcon';
import MultiStepQuoteForm from '../components/MultiStepQuoteForm';
import { motion, useScroll, useTransform } from 'framer-motion';

const contactCards = [
  {
    icon: LocationIcon,
    title: 'Visit Us',
    detail: ADDRESS,
    href: `https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`,
    color: 'from-rose-500 to-orange-500',
    bgLight: 'bg-rose-50',
    textColor: 'text-rose-600',
  },
  {
    icon: PhoneIcon,
    title: 'Call Us',
    detail: PHONE_NUMBER,
    href: `tel:${PHONE_NUMBER}`,
    color: 'from-emerald-500 to-teal-500',
    bgLight: 'bg-emerald-50',
    textColor: 'text-emerald-600',
  },
  {
    icon: MailIcon,
    title: 'Email Us',
    detail: 'info@constructionbuddy.com',
    href: 'mailto:info@constructionbuddy.com',
    color: 'from-indigo-500 to-purple-500',
    bgLight: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
];

const ContactPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <div className="bg-background overflow-hidden">
      {/* Cinematic Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[60vh] min-h-[400px] overflow-hidden flex items-center justify-center"
      >
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-secondary/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Modern Office Interior"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-xs font-semibold tracking-widest uppercase mb-6">
              Let's Connect
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-6">
              Start Your <br />
              <span className="italic text-secondary">Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              Have a question or a project in mind? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Row */}
      <section className="container mx-auto px-4 -mt-16 relative z-30 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card, idx) => (
            <motion.a
              key={card.title}
              href={card.href}
              target={card.title === 'Visit Us' ? '_blank' : undefined}
              rel={card.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.15 }}
              className="group bg-card backdrop-blur-xl rounded-2xl p-8 border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div
                className={`w-14 h-14 mx-auto mb-5 rounded-2xl ${card.bgLight} flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                <card.icon className={`w-7 h-7 ${card.textColor}`} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                {card.detail}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Main Content: Form + Map */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4">
                Get a Free Quote
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours with a
                personalized consultation.
              </p>
            </div>
            <div className="bg-card rounded-3xl shadow-2xl border border-border/50 overflow-hidden">
              <div className="p-2 sm:p-4">
                <MultiStepQuoteForm />
              </div>
            </div>
          </motion.div>

          {/* Right: Map + Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Map Embed */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-border/50 h-[350px]">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6735!2d78.3785!3d17.4484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzU0LjIiTiA3OMKwMjInNDIuNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Why Reach Out */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-tertiary/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-medium mb-6">What to Expect</h3>
                <ul className="space-y-4">
                  {[
                    'Free consultation within 24 hours',
                    'Transparent, no-obligation quote',
                    'Dedicated project manager assigned',
                    'End-to-end support from design to handover',
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(255,165,0,0.6)]" />
                      <span className="text-white/90">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-muted/30 rounded-3xl p-8 border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-muted-foreground">Monday – Saturday</span>
                  <span className="font-bold text-foreground">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-bold text-foreground">By Appointment</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
