import React, { useState } from "react";

const PRODUCTS_PER_PAGE = 6;
const ARTICLES_PER_PAGE = 9;

const Articles: React.FC = () => {
  const [productPage, setProductPage] = useState(1);
  const [articlePage, setArticlePage] = useState(1);

  ];

  // Pagination logic for products
  const totalProductPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = products.slice(
    (productPage - 1) * PRODUCTS_PER_PAGE,
    productPage * PRODUCTS_PER_PAGE
  );

  // Articles array (existing)
  const articles = [
    // ...existing articles array...
  ];
  const totalArticlePages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = articles.slice(
    (articlePage - 1) * ARTICLES_PER_PAGE,
    articlePage * ARTICLES_PER_PAGE
  );

  return (
    <section id="articles" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-primary">
            Our E-Products
          </h2>
          <p className="text-lg text-secondary max-w-xl mx-auto">
            Explore our digital planners, journals, and wellness tools designed for your journey.
          </p>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {paginatedProducts.map((product, idx) => (
            <article
              key={idx}
              className="bg-bg rounded-2xl overflow-hidden shadow-sm border border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in flex flex-col"
            >
              <div className="h-48 gradient-primary flex items-center justify-center text-white font-semibold rounded-t-2xl">
                <span className="text-4xl">📄</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2 text-primary leading-tight">
                  {product.title}
                </h3>
                <p className="text-sm text-secondary mb-4 leading-relaxed">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300 mt-auto"
                >
                  View Product <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        {/* Products Pagination */}
        {totalProductPages > 1 && (
          <div className="flex justify-center gap-2 mb-16">
            {Array.from({ length: totalProductPages }, (_, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full font-semibold border border-primary/30 text-primary bg-bg hover:bg-primary hover:text-white transition-all duration-200 ${productPage === i + 1 ? 'bg-primary text-white' : ''}`}
                onClick={() => setProductPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-primary">
            Featured Articles
          </h2>
          <p className="text-lg text-secondary max-w-xl mx-auto">
            Expert insights and practical advice for your wellness journey
          </p>
        </div>
        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedArticles.map((article, index) => (
            <article
              key={index}
              className="bg-bg rounded-2xl overflow-hidden shadow-sm border border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
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
                <a
                  href="#"
                  className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300"
                >
                  Read Full Article <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        {/* Articles Pagination */}
        {totalArticlePages > 1 && (
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalArticlePages }, (_, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full font-semibold border border-primary/30 text-primary bg-bg hover:bg-primary hover:text-white transition-all duration-200 ${articlePage === i + 1 ? 'bg-primary text-white' : ''}`}
                onClick={() => setArticlePage(i + 1)}
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
