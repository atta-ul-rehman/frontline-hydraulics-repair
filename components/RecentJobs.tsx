import React from 'react';
import { Clock, MapPin, CheckCircle2 } from 'lucide-react';

const jobs = [
  {
    title: "Excavator Boom Hose Replacement",
    location: "Bakersfield, CA (Oildale)",
    time: "26 Dec",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Emergency Forklift Hydraulic Repair",
    location: "Wichita, KS",
    time: "31 Dec",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Cotton Stripper High-Pressure Line",
    location: "Lubbock, TX",
    time: "Yesterday",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

const RecentJobs: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold text-brand-navy flex items-center gap-2">
                <span className="w-4 h-3 bg-green-500 rounded-full animate-pulse"></span>
                Recent Mobile Hydraulic Repair Jobs
            </h2>
            <span className="text-sm text-gray-500 hidden sm:block">Live Dispatch Feed</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-lg border border-gray-100 bg-gray-50 shadow-sm">
                    <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
                        <img src={job.image} alt={job.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h3 className="font-bold text-brand-navy text-sm mb-1">{job.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                            <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                            <span className="flex items-center gap-1"><Clock size={12} /> {job.time}</span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                            <CheckCircle2 size={10} /> {job.status}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RecentJobs;