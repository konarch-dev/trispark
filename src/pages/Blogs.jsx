import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Clock, BookOpen } from 'lucide-react';
import blogsData from '../data/blogs.json';

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = blogsData.filter((b) =>
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-16 lg:space-y-24 py-8">
      {/* Header Banner */}
      <section className="container max-w-4xl text-center space-y-4">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          Thought Leadership & Recruitment Insights
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Exploring Ideas and Insights <br className="hidden sm:inline" />
          <span className="text-gradient">Dive into Our Thoughtful Blog Posts</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Articles, staffing best practices, and recruiter guidance to navigate today's talent landscape.
        </p>

        {/* Search Input */}
        <div className="max-w-md mx-auto pt-4 relative">
          <input
            type="text"
            placeholder="Search blog articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm shadow-xs focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Search className="h-4 w-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 mt-2" />
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs hover-card"
            >
              <Link to={`/blogs/${blog.slug}`} className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <span className="rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-xs flex items-center gap-1">
                    <Clock className="h-3 w-3 text-primary" />
                    <span>{blog.readTime}</span>
                  </span>
                </div>
              </Link>

              <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-primary">Recruitment Guide</p>
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {blog.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all"
                  >
                    <span>Read full article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <BookOpen className="h-10 w-10 text-slate-300 mx-auto" />
            <p className="text-slate-600 font-medium">No articles matched "{searchQuery}".</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs font-semibold text-primary underline cursor-pointer"
            >
              Clear search filter
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
