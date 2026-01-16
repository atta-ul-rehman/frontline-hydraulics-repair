import React, { useState } from 'react';
import { Search, ChevronRight, Clock, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import SeoHead from './SeoHead';

interface BlogIndexPageProps {
  onOpenContact: () => void;
}

const BlogIndexPage: React.FC<BlogIndexPageProps> = ({ onOpenContact }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter logic (simple search)
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredPost = blogPosts[0];
  const remainingPosts = filteredPosts.filter(p => p.id !== featuredPost.id);

  // Categories for sidebar
  const categories = [
    { name: 'Maintenance', count: 12 },
    { name: 'Technical', count: 8 },
    { name: 'Emergency', count: 5 },
    { name: 'Industry', count: 6 },
    { name: 'Guide', count: 7 },
  ];

  const recentPosts = blogPosts.slice(1, 6);

  return (
    <div className="bg-white">
      <SeoHead 
        title="Hydraulic Repair Blog & Tips"
        description="Expert advice on hydraulic maintenance, troubleshooting, and equipment care. Read our latest articles."
        canonicalUrl="https://emergencyhydraulics.com/blog"
        type="website"
      />

      {/* SECTION 1: HERO */}
      <section className="relative bg-brand-navy py-16 md:py-24 border-b-8 border-brand-orange overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Hydraulic workshop" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
            <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <span className="text-brand-orange">/</span>
            <span className="text-white">Blog</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 tracking-wide">
            Hydraulic Repair Tips & <span className="text-brand-orange">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Expert advice on hydraulic maintenance, troubleshooting, and equipment care from the Frontline team.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* MAIN CONTENT COLUMN */}
          <div className="w-full lg:w-2/3">
            
            {/* SECTION 2: FEATURED POST */}
            {filteredPosts.includes(featuredPost) && (
              <Link to={`/blog/${featuredPost.slug}`} className="mb-16 group cursor-pointer block">
                <div className="relative h-[400px] rounded-xl overflow-hidden mb-6 shadow-md">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    width="800"
                    height="400"
                  />
                  <div className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold uppercase px-3 py-1 rounded">
                    Featured
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1 text-brand-orange font-bold uppercase text-xs">
                        <Tag className="w-3 h-3" /> {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {featuredPost.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4 group-hover:text-brand-orange transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <button className="text-brand-orange font-bold uppercase text-sm tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Link>
            )}

            {/* SECTION 3: BLOG POST GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {remainingPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="group cursor-pointer flex flex-col h-full block">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-5 shadow-sm">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      width="400"
                      height="256"
                    />
                    <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="font-bold text-brand-orange uppercase">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-brand-navy mb-3 line-clamp-2 group-hover:text-brand-orange transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <button className="text-brand-navy font-bold text-sm flex items-center gap-1 group-hover:text-brand-orange transition-colors mt-auto">
                      Read More <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </Link>
              ))}
            </div>

            {/* SECTION 5: PAGINATION */}
    
           </div>

          {/* SECTION 4: SIDEBAR */}
          <div className="w-full lg:w-1/3 space-y-8">
            
            {/* Search */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="font-bold text-brand-navy uppercase tracking-wide mb-4 text-sm">Search Articles</h3>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Search topics..." 
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-brand-navy uppercase tracking-wide mb-4 text-sm">Categories</h3>
                <ul className="space-y-2">
                    {categories.map((cat, idx) => (
                        <li key={idx} className="flex justify-between items-center group cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                            <span className="text-gray-600 font-medium group-hover:text-brand-orange transition-colors">{cat.name}</span>
                            <span className="text-xs bg-gray-100 text-gray-500 py-0.5 px-2 rounded-full font-bold">{cat.count}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-brand-navy uppercase tracking-wide mb-6 text-sm">Recent Articles</h3>
                <div className="space-y-6">
                    {recentPosts.map((post) => (
                        <Link key={post.id} to={`/blog/${post.slug}`} className="flex gap-4 group cursor-pointer block">
                             <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" width="80" height="80" />
                             </div>
                             <div>
                                <h4 className="font-bold text-sm text-brand-navy leading-tight mb-1 group-hover:text-brand-orange transition-colors line-clamp-2">
                                    {post.title}
                                </h4>
                                <span className="text-xs text-gray-400">{post.date}</span>
                             </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* CTA Widget */}
            <div className="bg-brand-navy p-8 rounded-lg text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-orange opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">Need Hydraulic Repair?</h3>
                <p className="text-gray-300 text-sm mb-6">Our mobile technicians are available 24/7 for emergency service.</p>
                <div className="text-2xl font-black text-brand-orange mb-6">859 462-4673</div>
                <button 
                    onClick={onOpenContact}
                    className="w-full bg-brand-orange text-white font-bold py-3 rounded hover:bg-brand-darkOrange transition-colors shadow-lg"
                >
                    Call Now
                </button>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 6: BOTTOM CTA */}
      <section className="bg-brand-light border-t border-gray-200 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-3xl font-heading font-black text-brand-navy mb-6">
                Have a Hydraulic Question?
             </h2>
             <p className="text-lg text-gray-600 mb-8">
                Our team is happy to answer technical questions or provide a quote for your fleet.
             </p>
             <button 
                onClick={onOpenContact}
                className="bg-brand-navy text-white text-lg font-bold px-10 py-4 rounded hover:bg-brand-gray transition-colors"
             >
                Get In Touch
             </button>
        </div>
      </section>

    </div>
  );
};

export default BlogIndexPage;