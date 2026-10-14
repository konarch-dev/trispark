import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, Clock, ArrowLeft, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import insightsData from '../data/insights.json';

export default function InsightDetail() {
  const { slug } = useParams();
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  // Related articles (other than current)
  const relatedArticles = insightsData.filter((a) => a.slug !== article.slug).slice(0, 3);

  const getCatClass = (category) => {
    switch (category) {
      case 'Technology':
        return 'tech';
      case 'Healthcare':
        return 'health';
      case 'Food & Beverage':
        return 'food';
      default:
        return 'tech';
    }
  };

  return (
    <div className="insight-detail-page">
      {/* 1. BREADCRUMB HEADER */}
      <div className="insight-detail-header">
        <div className="insights-toolbar-wrap">
          <div className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-slate-400 shrink-0" />
            <Link to="/insights" className="hover:text-primary transition-colors">Insights</Link>
            <ChevronRight className="h-3 w-3 text-slate-400 shrink-0" />
            <span className="font-semibold text-slate-900 truncate max-w-sm sm:max-w-md">{article.title}</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN ARTICLE WRAP */}
      <div className="insight-detail-wrap">
        <article className="insight-detail-article">
          <div className="insights-meta">
            <span className={`insights-category-badge ${getCatClass(article.category)}`}>
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              {article.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              {article.date}
            </span>
          </div>

          <h1>{article.title}</h1>

          <p className="lead">{article.description}</p>

          <img
            src={article.image}
            alt={article.title}
            className="featured-img"
          />

          <div className="article-content">
            {article.paragraphs && article.paragraphs.length > 0 ? (
              article.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))
            ) : (
              <p>{article.description}</p>
            )}
          </div>

          {/* Key Strategic Headings */}
          {article.headings && article.headings.length > 0 && (
            <div className="insight-detail-takeaways">
              <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider mb-2">
                <Sparkles className="h-4 w-4" />
                <span>Strategic Perspectives</span>
              </div>
              <h2>Core Themes in This Analysis</h2>
              <div className="takeaway-grid">
                {article.headings.map((heading, idx) => (
                  <div key={idx} className="takeaway-card">
                    <h3>
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>{heading}</span>
                    </h3>
                    <p>
                      Analysis on organizational impact, technical integration, and workforce strategy.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Back Link and Related Insights */}
        <div className="mt-12 space-y-8">
          <div>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to all insights</span>
            </Link>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-slate-900">
              Related Perspectives
            </h3>
            <div className="insights-grid">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/insights/${rel.slug}`}
                  className="insight-card"
                >
                  <div className="insight-card__media">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      loading="lazy"
                    />
                    <div className="insight-card__badge-overlay">
                      <span className={`insights-category-badge ${getCatClass(rel.category)}`}>
                        {rel.category}
                      </span>
                    </div>
                  </div>

                  <div className="insight-card__body">
                    <div>
                      <div className="insights-meta">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-slate-400" />
                          {rel.readTime}
                        </span>
                      </div>
                      <h3>{rel.title}</h3>
                    </div>

                    <div className="insight-card__footer">
                      <span>Read article &rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
