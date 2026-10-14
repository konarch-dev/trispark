import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, Sparkles, BookOpen } from 'lucide-react';
import insightsData from '../data/insights.json';

const CATEGORIES = [
  { id: 'all', name: 'All Insights' },
  { id: 'Technology', name: 'Technology & AI' },
  { id: 'Healthcare', name: 'Healthcare' },
  { id: 'Food & Beverage', name: 'Food & Beverage' },
];

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter articles based on active category and search term
  const filteredArticles = useMemo(() => {
    return insightsData.filter((article) => {
      const matchesCategory =
        selectedCategory === 'all' || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured article is the first article if matching "all" and no search query, or first filtered result
  const featuredArticle = filteredArticles.length > 0 ? filteredArticles[0] : null;
  const gridArticles = filteredArticles.slice(1);

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
    <main className="insights-page">
      {/* 1. HERO SECTION */}
      <section className="insights-hero">
        <div className="insights-hero__wrap">
          <span className="insights-hero__pill">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>Thought Leadership &amp; Talent Perspectives</span>
          </span>

          <h1>
            Insights &amp; <span className="text-gradient">Workforce Strategy</span>
          </h1>

          <p>
            Perspectives on hiring, specialized talent recruitment, and emerging technology across healthcare, engineering, IT, and food production.
          </p>
        </div>
      </section>

      {/* 2. TOOLBAR WITH CATEGORIES AND LIVE SEARCH */}
      <section className="insights-toolbar-wrap">
        <div className="insights-toolbar">
          <div className="insights-filters">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`insights-filter-btn ${isActive ? 'is-active' : ''}`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          <div className="insights-search-box">
            <Search className="h-4 w-4" />
            <input
              type="text"
              placeholder="Search articles by topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search articles"
            />
          </div>
        </div>
      </section>

      {/* 3. FEATURED ARTICLE SHOWCASE */}
      {featuredArticle && (
        <section className="insights-featured">
          <div className="insights-featured-card">
            <div className="insights-featured__media">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                loading="eager"
              />
            </div>

            <div className="insights-featured__body">
              <div className="insights-meta">
                <span className={`insights-category-badge ${getCatClass(featuredArticle.category)}`}>
                  {featuredArticle.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  {featuredArticle.readTime}
                </span>
              </div>

              <h2>
                <Link to={`/insights/${featuredArticle.slug}`}>
                  {featuredArticle.title}
                </Link>
              </h2>

              <p>{featuredArticle.description}</p>

              <div>
                <Link
                  to={`/insights/${featuredArticle.slug}`}
                  className="btn-primary-action"
                >
                  <span>Read Full Analysis</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. ARTICLES GRID */}
      <section className="insights-grid-wrap">
        <div className="insights-grid-title">
          <span>Published Articles</span>
          <span className="text-sm font-semibold text-slate-500">
            {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
          </span>
        </div>

        {gridArticles.length > 0 && (
          <div className="insights-grid">
            {gridArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/insights/${article.slug}`}
                className="insight-card"
              >
                <div className="insight-card__media">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                  />
                  <div className="insight-card__badge-overlay">
                    <span className={`insights-category-badge ${getCatClass(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="insight-card__body">
                  <div>
                    <div className="insights-meta">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        {article.readTime}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <h3>{article.title}</h3>

                    <p>{article.description}</p>
                  </div>

                  <div className="insight-card__footer">
                    <span>
                      Read article <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Empty state when no matches */}
        {filteredArticles.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center space-y-4 max-w-lg mx-auto my-12">
            <BookOpen className="h-10 w-10 text-slate-300 mx-auto" />
            <h4 className="font-serif text-xl font-bold text-slate-900">No articles found</h4>
            <p className="text-sm text-slate-600">
              We couldn't find any articles matching "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="btn-primary-action"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 5. STAGING FINAL CTA SECTION */}
      <section className="staging-final-cta">
        <div className="staging-final-cta__glow" />
        <div className="about-page-wrap">
          <div className="staging-final-cta__copy">
            <h2>Looking to Strengthen Your Hiring Strategy?</h2>
            <p>
              Trispark brings more than 20 years of leadership experience across staffing, recruiting, and workforce solutions to help businesses find the people they need.
            </p>
          </div>
          <div className="staging-final-cta__ctas">
            <Link to="/contact-us" className="staging-btn staging-btn-gold">
              Talk to a Recruiter <span>&rarr;</span>
            </Link>
            <Link to="/services" className="staging-btn staging-btn-outline-white">
              Explore Services <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
