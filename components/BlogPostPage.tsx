
import React from 'react';
import { blogPosts } from '../data/blog';
import { Calendar, Clock, User, Share2, Facebook, Linkedin, Mail, Twitter, Phone, ArrowLeft, ChevronRight, ArrowRight, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';
import SeoHead from './SeoHead';
import { ContentBlock } from '../types';

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

  // Content Renderer
  const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
        case 'h2':
            return <h2 key={index} id={`heading-${index}`} className="text-2xl md:text-3xl font-heading font-black text-brand-navy mt-12 mb-6 scroll-mt-24">{block.content}</h2>;
        
        case 'h3':
            return <h3 key={index} className="text-xl font-bold text-brand-navy mt-8 mb-4">{block.content}</h3>;
        
        case 'paragraph':
            return <p key={index} className="text-gray-700 text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: block.content || '' }}></p>;
        
        case 'ul':
            return (
                <ul key={index} className="list-none space-y-3 mb-8 ml-2">
                    {block.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                            <span dangerouslySetInnerHTML={{ __html: item }}></span>
                        </li>
                    ))}
                </ul>
            );

        case 'ol':
            return (
                <ol key={index} className="list-decimal list-outside space-y-3 mb-8 ml-6 text-gray-700 font-medium">
                    {block.items?.map((item, i) => (
                        <li key={i} className="pl-2" dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                </ol>
            );

        case 'quote':
            return (
                <blockquote key={index} className="border-l-4 border-brand-orange pl-6 italic text-gray-800 bg-gray-50 py-6 pr-6 my-10 rounded-r-lg text-lg font-medium shadow-sm">
                    "{block.content}"
                </blockquote>
            );

        case 'alert':
            return (
                <div key={index} className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-yellow-800 mb-1">{block.title || 'Important Note'}</h4>
                        <p className="text-yellow-700 text-sm">{block.content}</p>
                    </div>
                </div>
            );

        case 'image':
            return (
                <figure key={index} className="my-10">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                        <img src={block.src} alt={block.alt} className="w-full h-auto object-cover" width="800" height="600" />
                    </div>
                    {block.caption && <figcaption className="text-center text-sm text-gray-500 mt-3 italic">{block.caption}</figcaption>}
                </figure>
            );

        case 'cta':
            return (
                <div key={index} className="my-12 bg-brand-navy rounded-xl p-8 text-center text-white relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand-orange opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <h3 className="text-2xl font-bold mb-3">{block.title || 'Need Help?'}</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{block.content}</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="tel:8594624673" className="flex items-center gap-2 bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-3 px-6 rounded shadow-lg transition-colors">
                            <Phone className="w-5 h-5" /> 859 462-4673
                        </a>
                        {block.url && (
                            <button onClick={() => onNavigate(block.url!)} className="flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded hover:bg-white hover:text-brand-navy transition-colors">
                                {block.linkText || 'Learn More'} <ArrowRight className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </div>
            );

        default:
            return null;
    }
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
    "datePublished": new Date(post.date).toISOString(), // Formatting date
    "description": post.excerpt,
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://frontlinehydraulics.com/blog/${post.slug}/`
    }
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
        title={post.seoTitle}
        description={post.seoDesc}
        canonicalUrl={`https://emergencyhydraulics.com/blog/${post.slug}`}
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
                
                {/* Feature Image */}
                <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
                    <img src={post.image} alt={post.title} className="w-full h-auto object-cover" width="800" height="500" />
                </div>

                {/* Key Takeaways Box (Featured Snippet Bait) */}
                {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                    <div className="bg-brand-light border-l-4 border-brand-orange p-8 rounded-r-lg mb-12">
                        <h3 className="flex items-center gap-2 text-xl font-bold text-brand-navy mb-4">
                            <Lightbulb className="w-6 h-6 text-brand-orange" /> Key Takeaways
                        </h3>
                        <ul className="space-y-3">
                            {post.keyTakeaways.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 flex-shrink-0"></div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Article Content */}
                <article className="prose prose-lg prose-slate max-w-none">
                    {post.content.map((block, idx) => renderBlock(block, idx))}
                </article>

                {/* Post Footer */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2 mb-8">
                        <span className="text-sm font-bold text-gray-500 mr-2">Topics:</span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">{post.keyword}</span>
                        <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">Hydraulics</span>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                         <button onClick={() => onNavigate('blog')} className="flex items-center gap-2 text-brand-navy font-bold hover:text-brand-orange transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Articles
                         </button>
                         <div className="flex gap-4">
                             <button className="text-gray-400 hover:text-brand-blue transition-colors p-2 hover:bg-gray-100 rounded-full"><Facebook className="w-5 h-5" /></button>
                             <button className="text-gray-400 hover:text-brand-blue transition-colors p-2 hover:bg-gray-100 rounded-full"><Twitter className="w-5 h-5" /></button>
                             <button className="text-gray-400 hover:text-brand-blue transition-colors p-2 hover:bg-gray-100 rounded-full"><Linkedin className="w-5 h-5" /></button>
                             <button className="text-gray-400 hover:text-brand-blue transition-colors p-2 hover:bg-gray-100 rounded-full"><Mail className="w-5 h-5" /></button>
                         </div>
                    </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 bg-gray-50 p-8 rounded-lg border border-gray-100 flex items-start gap-6">
                    <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center text-white font-black text-xl flex-shrink-0 shadow-md">
                        {post.author.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-bold text-brand-navy text-lg mb-1">{post.author}</h4>
                        <p className="text-xs text-brand-orange font-bold uppercase mb-3">{post.authorRole}</p>
                        <p className="text-gray-600 text-sm">
                            Expert in hydraulic systems with over 15 years of field experience serving industries in Bakersfield, Wichita, and Lubbock. Dedicated to helping fleet managers reduce downtime.
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
                        {post.content.filter(b => b.type === 'h2').map((block, idx) => (
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
                                className="block text-sm text-gray-600 hover:text-brand-orange leading-snug transition-colors border-l-2 border-transparent hover:border-brand-orange pl-3"
                            >
                                {block.content}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Service CTA */}
                <div className="bg-brand-navy text-white rounded-lg p-8 text-center border-b-8 border-brand-orange shadow-lg">
                    <h3 className="font-heading font-bold text-xl mb-3">Equipment Down?</h3>
                    <p className="text-gray-300 text-sm mb-6">We provide 24/7 Mobile Hydraulic Repair in Bakersfield, Wichita & Lubbock.</p>
                    <a 
                        href="tel:8594624673" 
                        className="flex items-center justify-center gap-2 w-full bg-brand-orange text-white font-bold py-3 rounded hover:bg-brand-darkOrange transition-colors shadow-lg"
                    >
                        <Phone className="w-4 h-4 fill-current" />
                        859 462-4673
                    </a>
                    <button 
                        onClick={onOpenContact}
                        className="mt-4 text-sm text-brand-orange font-bold hover:text-white underline"
                    >
                        Request Online Quote
                    </button>
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
                     <div key={p.id} className="bg-white rounded-lg shadow-sm overflow-hidden group cursor-pointer border border-gray-100 hover:shadow-md transition-all" onClick={() => onNavigate(`blog/${p.slug}`)}>
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
                Our team is standing by to help with emergency repairs, maintenance, and diagnostics in Bakersfield, Wichita, and Lubbock.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                    href="tel:8594624673"
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
