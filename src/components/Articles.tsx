import React, { useState } from "react";
import { Link } from "react-router";

const ARTICLES_PER_PAGE = 9;

const articles = [
  {
    id: 1,
    category: "Health",
    title: "7 Early Signs of Pre-Menopause Every Woman Over 40 Should Know",
    excerpt:
      "Discover the early warning signs of pre-menopause and learn how to recognize the subtle changes your body is experiencing. Knowledge is power when it comes to managing this transition.",
    readTime: "5 min read",
    gradient: "gradient-health",
    emoji: "🌺",
    label: "Pre-Menopause Signs",
  },
  {
    id: 2,
    category: "Wellness",
    title: "How to Balance Hormones Naturally During Pre-Menopause",
    excerpt:
      "Explore gentle, natural approaches to supporting your hormonal health during pre-menopause. From nutrition to lifestyle changes, discover what really works.",
    readTime: "8 min read",
    gradient: "gradient-wellness",
    emoji: "🌿",
    label: "Natural Hormone Balance",
  },
  {
    id: 3,
    category: "Fitness",
    title: "Staying Fit and Strong: Exercise Guide for Women Over 40",
    excerpt:
      "Learn how to maintain fitness and build strength during your 40s and beyond. Discover the best exercises for bone health, metabolism, and overall wellness.",
    readTime: "6 min read",
    gradient: "gradient-fitness",
    emoji: "💪",
    label: "Fitness After 40",
  },
  {
    id: 4,
    category: "Mental Health",
    title: "Managing Stress and Emotional Changes in Pre-Menopause",
    excerpt:
      "Navigate the emotional ups and downs of pre-menopause with proven strategies for stress management, emotional regulation, and mental wellness.",
    readTime: "7 min read",
    gradient: "gradient-mental",
    emoji: "🧠",
    label: "Mental Wellness",
  },
  {
    id: 5,
    category: "Nutrition",
    title: "Nutrition Essentials for Pre-Menopausal Women",
    excerpt:
      "Discover the key nutrients your body needs during pre-menopause and how to create a balanced eating plan that supports your changing nutritional needs.",
    readTime: "9 min read",
    gradient: "gradient-nutrition",
    emoji: "🥗",
    label: "Nutrition Essentials",
  },
  {
    id: 6,
    category: "Wellness",
    title: "The Art of Rest: Sleep Strategies for Midlife Women",
    excerpt:
      "Quality sleep becomes even more crucial during pre-menopause. Learn practical strategies for better rest and why self-care includes guilt-free downtime.",
    readTime: "5 min read",
    gradient: "gradient-sleep",
    emoji: "😴",
    label: "Rest & Recovery",
  },
];

interface ArticlesProps {
  variant?: "home" | "page";
}

const Articles: React.FC<ArticlesProps> = ({ variant = "home" }) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const paginatedArticles =
    variant === "home"
      ? articles.slice(0, 3) // show only few on homepage
      : articles.slice(
          (page - 1) * ARTICLES_PER_PAGE,
          page * ARTICLES_PER_PAGE
        );

  return (
    <section id="articles" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-primary">
            Featured Articles
          </h2>
          <p className="text-lg text-secondary max-w-xl mx-auto">
            Expert insights and practical advice for your wellness journey
          </p>
        </div>
        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedArticles.map((article) => (
            <article
              key={article.id}
              className="bg-bg rounded-2xl overflow-hidden shadow-sm border border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div
                className={`h-48 ${article.gradient} flex items-center justify-center flex-col gap-2 text-white font-semibold rounded-t-2xl`}
              >
                <div className="text-4xl opacity-80">{article.emoji}</div>
                <div>{article.label}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-secondary">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold mb-4 text-primary leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-secondary mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <Link
                  to={`/articles/${article.id}`}
                  className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300"
                >
                  Read Full Article <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        {/* Pagination only on articles page */}
        {variant === "page" && totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full font-semibold border border-primary/30 text-primary bg-bg hover:bg-primary hover:text-white transition-all duration-200 ${
                  page === i + 1 ? "bg-primary text-white" : ""
                }`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Articles;
