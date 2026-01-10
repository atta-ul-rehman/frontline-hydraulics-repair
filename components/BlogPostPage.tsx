import React from 'react';
import { BlogPost, blogPosts } from '../data/blog';
import { Calendar, Clock, User, Tag, Share2, Facebook, Linkedin, Mail, Twitter, Phone, ArrowLeft, ChevronRight, ArrowRight } from 'lucide-react';
import SeoHead from './SeoHead';

interface BlogPostPageProps {
  postSlug: string;
  onNavigate: (page: string) => void;
  onOpenContact: () => void;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ postSlug, onNavigate, onOpenContact }) => {
  // Find the post
  const post = blogPosts.find(p => p.slug === postSlug);
  
  // If not found (in a real app, this would be a 404 page)
  if (!post) {
      return (
          <div className="min-h-screen flex items-center justify-center flex-col">
              <h1 className="text-4xl font-bold text-brand-navy mb-4">Article Not Found</h1>
              <button onClick={() => onNavigate('blog')} className="text-brand-orange font-bold hover:underline">Return to Blog</button>
          </div>
      );
  }

  // Related posts logic
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Helper to render dummy content since we only have headings in data
  const renderContent = () => {
    return (
        <div className="prose prose-lg prose-slate max-w-none text-gray-600">
            {post.content.headings.map((heading, idx) => (
                <div key={idx} id={`heading-${idx}`}>
                    {idx === 0 ? (
                        <p className="lead text-xl text-gray-600 mb-8 font-medium">
                           Hydraulic systems are the lifeblood of heavy machinery. When they fail, operations grind to a halt. In this guide, we'll explore exactly what you need to know about <span className="text-brand-navy font-bold">{post.keyword}</span> and how to prevent costly downtime.
                        </p>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold text-brand-navy mt-12 mb-6 scroll-mt-24">{heading}</h2>
                            <p className="mb-4">
                                This is a critical aspect of maintaining your equipment. According to industry standards, ignoring these signs can lead to catastrophic failure. Regular inspection of your hydraulic lines is not just recommended; it is mandatory for safety.
                            </p>
                            <p className="mb-6">
                                Start by checking the pressure ratings. Ensure that the PSI matches your system requirements. If you notice any abrasion or leaks, immediate action is required.
                            </p>
                            {idx === 2 && (
                                <blockquote className="border-l-4 border-brand-orange pl-6 italic text-gray-700 bg-gray-50 py-4 my-8 rounded-r">
                                    "Preventive maintenance costs pennies compared to the dollars lost during unscheduled downtime."
                                </blockquote>
                            )}
                             {idx === 4 && (
                                <div className="my-8">
                                    <img 
                                        src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                                        alt="Hydraulic technician inspecting equipment" 
                                        className="w-full h-auto rounded-lg shadow-sm"
                                    />
                                    <p className="text-sm text-gray-500 mt-2 italic text-center">Regular inspections prevent 80% of failures.</p>
                                </div>
                            )}
                            <ul className="list-disc pl-6 mb-6 space-y-2">
                                <li>Check for visible wear on the outer sheath.</li>
                                <li>Verify tight connections at all fitting points.</li>
                                <li>Monitor system temperature during operation.</li>
                            </ul>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
  };

  // Structured Data for Blog Post
  const blogSchema = {
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Frontline Hydraulic Services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://frontlinehydraulics.com/images/logo.jpg"
      }
    },
    "datePublished": post.date, // Note: In real app, format to ISO 8601
    "description": post.excerpt
  };

  // Breadcrumbs
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog/" },
    { name: post.title, item: `/blog/${post.slug}/` }
  ];

  return (
    <div className="bg-white">
      <SeoHead 
        title={post.title}
        description={post.excerpt}
        type="article"
        image={post.image}
        schema={blogSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* SECTION 1: POST HERO */}
      <section className="bg-brand-navy pt-32 pb-20 border-b-8 border-brand-orange relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80" 
                alt="Background pattern" 
                className="w-full h-full object-cover opacity-10"
            />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">
                <button onClick={() => onNavigate('home')} className="hover:text-brand-orange transition-colors">Home</button>
                <ChevronRight className="w-3 h-3 text-brand-orange" />
                <button onClick={() => onNavigate('blog')} className="hover:text-brand-orange transition-colors">Blog</button>
                <ChevronRight className="w-3 h-3 text-brand-orange" />
                <span className="text-white text-opacity-80 truncate max-w-[200px]">{post.category}</span>
            </div>

            <div className="inline-block bg-brand-orange text-white text-xs font-bold uppercase px-3 py-1 rounded mb-6">
                {post.category}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-8 leading-tight">
                {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm font-medium border-t border-gray-700 pt-6 inline-flex">
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-brand-orange" />
                    <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-orange" />
                    <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-orange" />
                    <span>{post.readTime}</span>
                </div>
            </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
            
            {/* MAIN CONTENT COLUMN */}
            <div className="w-full lg:w-[70%]">
                <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
                    <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
                </div>

                {renderContent()}

                {/* Post Footer */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2 mb-8">
                        <span className="text-sm font-bold text-gray-500 mr-2">Topics:</span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">{post.keyword}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">Hydraulics</span>
                    </div>

                    <div className="flex justify-between items-center">
                         <button onClick={() => onNavigate('blog')} className="flex items-center gap-2 text-brand-navy font-bold hover:text-brand-orange transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Articles
                         </button>
                         <div className="flex gap-4">
                             <button className="text-gray-400 hover:text-brand-blue"><Facebook className="w-5 h-5" /></button>
                             <button className="text-gray-400 hover:text-brand-blue"><Twitter className="w-5 h-5" /></button>
                             <button className="text-gray-400 hover:text-brand-blue"><Linkedin className="w-5 h-5" /></button>
                             <button className="text-gray-400 hover:text-brand-blue"><Mail className="w-5 h-5" /></button>
                         </div>
                    </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 bg-gray-50 p-8 rounded-lg border border-gray-100 flex items-start gap-6">
                    <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                        {post.author.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-bold text-brand-navy text-lg mb-1">{post.author}</h4>
                        <p className="text-xs text-brand-orange font-bold uppercase mb-3">{post.authorRole}</p>
                        <p className="text-gray-600 text-sm">
                            Expert in hydraulic systems with over 15 years of field experience. Dedicated to helping fleet managers reduce downtime and improve safety standards.
                        </p>
                    </div>
                </div>
            </div>

            {/* SIDEBAR COLUMN */}
            <div className="w-full lg:w-[30%] space-y-8">
                
                {/* Table of Contents */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm sticky top-24">
                    <h3 className="font-bold text-brand-navy uppercase tracking-wide mb-4 text-sm">Table of Contents</h3>
                    <nav className="space-y-3">
                        {post.content.headings.map((heading, idx) => (
                            <a 
                                key={idx} 
                                href={`#heading-${idx}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    const el = document.getElementById(`heading-${idx}`);
                                    if (el) {
                                        (el as any).scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="block text-sm text-gray-600 hover:text-brand-orange leading-snug transition-colors"
                            >
                                {heading.split(':')[0]}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Service CTA */}
                <div className="bg-brand-navy text-white rounded-lg p-8 text-center border-b-8 border-brand-orange">
                    <h3 className="font-heading font-bold text-xl mb-3">Broken Hose?</h3>
                    <p className="text-gray-300 text-sm mb-6">We can be at your site in under 60 minutes.</p>
                    <a 
                        href="tel:555-123-4567" 
                        className="flex items-center justify-center gap-2 w-full bg-brand-orange text-white font-bold py-3 rounded hover:bg-brand-darkOrange transition-colors"
                    >
                        <Phone className="w-4 h-4 fill-current" />
                        (XXX) XXX-XXXX
                    </a>
                </div>

                 {/* Related Posts */}
                 <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <h3 className="font-bold text-brand-navy uppercase tracking-wide mb-6 text-sm">Related Articles</h3>
                    <div className="space-y-6">
                        {relatedPosts.length > 0 ? relatedPosts.map((rp) => (
                            <div key={rp.id} className="group cursor-pointer" onClick={() => onNavigate(`blog/${rp.slug}`)}>
                                <h4 className="font-bold text-sm text-brand-navy leading-snug mb-2 group-hover:text-brand-orange transition-colors">
                                    {rp.title}
                                </h4>
                                <span className="text-xs text-gray-500 flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {rp.readTime}
                                </span>
                            </div>
                        )) : (
                            <p className="text-sm text-gray-500">No related articles found.</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
      </div>

      {/* SECTION 4: RELATED CARDS BOTTOM */}
      <section className="bg-brand-light py-20 border-t border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold text-brand-navy mb-10 text-center">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {/* Just showing the first 3 posts as suggestions for demo */}
                 {blogPosts.slice(0,3).map(p => (
                     <div key={p.id} className="bg-white rounded-lg shadow-sm overflow-hidden group cursor-pointer" onClick={() => onNavigate(`blog/${p.slug}`)}>
                         <div className="h-48 overflow-hidden">
                             <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                         </div>
                         <div className="p-6">
                             <span className="text-xs font-bold text-brand-orange uppercase mb-2 block">{p.category}</span>
                             <h3 className="font-bold text-brand-navy mb-3 line-clamp-2 group-hover:text-brand-orange transition-colors">{p.title}</h3>
                             <button className="text-sm font-bold text-gray-500 flex items-center gap-1 mt-auto">Read <ArrowRight className="w-3 h-3" /></button>
                         </div>
                     </div>
                 ))}
            </div>
         </div>
      </section>

      {/* SECTION 6: BOTTOM CTA */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-3xl font-heading font-black text-brand-navy mb-6">
                Need Expert Hydraulic Service?
             </h2>
             <p className="text-lg text-gray-600 mb-8">
                Our team is standing by to help with emergency repairs, maintenance, and diagnostics.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                    href="tel:555-123-4567"
                    className="flex items-center gap-2 bg-brand-orange text-white text-lg font-bold px-10 py-4 rounded hover:bg-brand-darkOrange transition-colors shadow-lg"
                >
                    <Phone className="w-5 h-5 fill-current" />
                    Call Now
                </a>
                <button 
                    onClick={onOpenContact}
                    className="flex items-center gap-2 border-2 border-brand-navy text-brand-navy text-lg font-bold px-10 py-4 rounded hover:bg-brand-navy hover:text-white transition-colors"
                >
                    <Mail className="w-5 h-5" />
                    Request Quote
                </button>
             </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;