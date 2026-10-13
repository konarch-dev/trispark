import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, Clock, ArrowLeft, ArrowRight, Share2, Bookmark } from 'lucide-react';
import blogsData from '../data/blogs.json';

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  const relatedBlogs = blogsData.filter((b) => b.slug !== blog.slug).slice(0, 2);

  return (
    <div className="space-y-16 py-8">
      {/* Breadcrumb */}
      <div className="container">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/blogs" className="hover:text-primary">Blogs</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-semibold text-slate-800 truncate max-w-xs">{blog.title}</span>
        </div>
      </div>

      {/* Article Header & Main Content */}
      <article className="container max-w-4xl space-y-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-xs font-semibold text-primary">
            <span className="bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Recruitment Insights
            </span>
            <span className="flex items-center gap-1 text-slate-500 font-normal">
              <Clock className="h-3.5 w-3.5" /> {blog.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            {blog.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            {blog.description}
          </p>
        </div>

        {/* Featured Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg border border-slate-200">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full aspect-[16/9] object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
          {blog.paragraphs && blog.paragraphs.length > 0 ? (
            blog.paragraphs.map((p, idx) => (
              <p key={idx} className="text-base leading-relaxed text-slate-700">
                {p}
              </p>
            ))
          ) : (
            <p className="text-base leading-relaxed text-slate-700">
              {blog.description}
            </p>
          )}

          {blog.subheadings && blog.subheadings.length > 0 && (
            <div className="pt-6 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Key Strategic Takeaways
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {blog.subheadings.map((sub, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
                    <h3 className="font-serif text-base font-bold text-slate-900 mb-1">{sub}</h3>
                    <p className="text-xs text-slate-600">
                      Implementation of modern staffing methodologies, candidate retention techniques, and data-driven talent acquisition.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Author / CTA Box */}
        <div className="rounded-2xl bg-blue-50/80 p-8 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-lg font-bold text-slate-900">Need Guidance on Your Hiring Strategy?</h3>
            <p className="text-xs text-slate-600">Connect directly with our senior talent acquisition leaders.</p>
          </div>
          <Link
            to="/contact-us"
            className="rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition shrink-0"
          >
            Speak With an Expert
          </Link>
        </div>

        {/* Related Posts */}
        <div className="pt-12 border-t border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-slate-900">Related Articles</h2>
            <Link to="/blogs" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
              <span>All articles</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedBlogs.map((b) => (
              <Link
                key={b.slug}
                to={`/blogs/${b.slug}`}
                className="group flex flex-col rounded-xl border border-slate-200 p-4 hover:border-primary transition"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-lg mb-3">
                  <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                </div>
                <h4 className="font-serif font-bold text-slate-900 group-hover:text-primary text-sm line-clamp-2">
                  {b.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
