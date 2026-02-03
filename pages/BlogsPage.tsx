
import React, { useState } from 'react';

// Mock Data for Blogs
const BLOGS = [
    {
        id: 1,
        title: 'Top 10 Construction Trends in 2026',
        excerpt: 'Explore the latest technologies shaping the future of construction, from AI-driven planning to sustainable materials.',
        date: 'February 2, 2026',
        author: 'Construction Buddy Team',
        image: '/Residential 1.webp', // Using existing assets as placeholders
        category: 'Industry Trends'
    },
    {
        id: 2,
        title: 'Why Material Quality Matters',
        excerpt: 'Understanding the difference between standard and premium materials and how they impact your home\'s longevity.',
        date: 'January 28, 2026',
        author: 'Expert Engineer',
        image: '/School 4.webp',
        category: 'Guides'
    },
    {
        id: 3,
        title: 'Sustainable Home Building Explained',
        excerpt: 'A comprehensive guide to eco-friendly construction practices that save money and the planet.',
        date: 'January 15, 2026',
        author: 'Green Architect',
        image: '/House.webp',
        category: 'Sustainability'
    },
    {
        id: 4,
        title: 'The Cost of Building a House in 2026',
        excerpt: 'A detailed breakdown of construction costs per square foot in major cities.',
        date: 'January 5, 2026',
        author: 'Construction Buddy Team',
        image: '/Residential 1 render.webp',
        category: 'Finance'
    },
    {
        id: 5,
        title: 'Renovation vs. Rebuilding: What’s Best?',
        excerpt: 'Deciding whether to renovate your existing space or tear it down and start fresh.',
        date: 'December 20, 2025',
        author: 'Senior Consultant',
        image: '/Madrasa 1.webp',
        category: 'Guides'
    },
    {
        id: 6,
        title: 'Safety First: Best Practices on Site',
        excerpt: 'How we ensure the safety of our workers and your property during every phase of construction.',
        date: 'December 10, 2025',
        author: 'Safety Officer',
        image: '/Mosque 1.webp',
        category: 'Safety'
    }
];

const BlogsPage: React.FC = () => {
    // Simple category filter state
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    // Get unique categories
    const categories = ['All', ...Array.from(new Set(BLOGS.map(blog => blog.category)))];

    const filteredBlogs = selectedCategory === 'All'
        ? BLOGS
        : BLOGS.filter(blog => blog.category === selectedCategory);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="relative py-20 bg-accent text-accent-foreground overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="text-gradient-brand">Latest Insights</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        Expert advice, industry news, and construction guides from our team.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-12">

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === category
                                ? 'bg-secondary text-secondary-foreground border-secondary shadow-md'
                                : 'bg-card text-card-foreground border-border hover:border-secondary/50'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.map((blog) => (
                        <article
                            key={blog.id}
                            className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-foreground shadow-sm">
                                    {blog.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                    <span>{blog.date}</span>
                                    <span>•</span>
                                    <span>{blog.author}</span>
                                </div>

                                <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                                    {blog.title}
                                </h2>

                                <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                                    {blog.excerpt}
                                </p>

                                <button className="text-secondary font-semibold text-sm flex items-center gap-1 group/btn self-start mt-auto">
                                    Read Article
                                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;
