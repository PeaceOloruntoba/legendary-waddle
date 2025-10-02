import React, { useState } from "react";

const PRODUCTS_PER_PAGE = 6;
const ARTICLES_PER_PAGE = 9;

const products = [
  {
    title: "Yoga Planner - Daily Yoga Diary (Printable)",
    description: "Track your yoga journey and daily progress with this beautiful printable planner.",
    link: "https://www.etsy.com/uk/listing/4306266039/yoga-planner-daily-yoga-diary-printable?ref=listings_manager_grid"
  },
  {
    title: "Baby Journal - Childhood Record Book (0-1st Year)",
    description: "Cherish every milestone and memory of your baby's first year with this adorable journal.",
    link: "https://www.etsy.com/uk/listing/4306311942/baby-journal-childhood-record-book-o-1st?ref=listings_manager_grid"
  },
  {
    title: "Bible Study Journal - Journal for Prayer",
    description: "Deepen your faith and organize your prayers with this inspiring printable journal.",
    link: "https://www.etsy.com/uk/listing/4306307974/bible-study-journal-journal-for-prayer?ref=listings_manager_grid"
  },
  {
    title: "Budget Planner Bundle (Printable)",
    description: "Take control of your finances with this comprehensive printable budget planner bundle.",
    link: "https://www.etsy.com/uk/listing/4306185152/budget-planner-bundle-printable-personal?ref=listings_manager_grid"
  },
  {
    title: "Workbook - Anxiety and Depression Template",
    description: "Support your mental health journey with this practical workbook for anxiety and depression.",
    link: "https://www.etsy.com/uk/listing/4306181724/workbook-anxiety-and-depression-template?ref=listings_manager_grid"
  },
  {
    title: "Printable Autism Planner",
    description: "Organize and support your autism journey with this printable planner.",
    link: "https://www.etsy.com/uk/listing/4306184078/printable-autism-planner-autism-planner?ref=listings_manager_grid"
  },
  {
    title: "Stress Management Journal (Printable)",
    description: "Manage stress and boost your wellbeing with this printable journal.",
    link: "https://www.etsy.com/uk/listing/4306186390/stress-management-journal-printable-and?ref=listings_manager_grid"
  },
  {
    title: "Caregiver Planner (Printable)",
    description: "Stay organized and empowered as a caregiver with this printable planner.",
    link: "https://www.etsy.com/uk/listing/4306191191/caregiver-planner-printable-home-health?ref=listings_manager_grid"
  },
  {
    title: "Find Your Passion Planner (Printable)",
    description: "Discover your purpose and passions with this printable life planner.",
    link: "https://www.etsy.com/uk/listing/4306192676/find-your-passion-planner-printable-life?ref=listings_manager_grid"
  },
  {
    title: "Fitness Planner - Daily Yoga Diary",
    description: "Stay fit and motivated with this daily fitness and yoga planner.",
    link: "https://www.etsy.com/uk/listing/4306196793/fitness-planner-daily-yoga-diary?ref=listings_manager_grid"
  },
  {
    title: "Gratitude Journal (Printable)",
    description: "Cultivate gratitude and positivity with this printable dream journal.",
    link: "https://www.etsy.com/uk/listing/4306197102/gratitude-journal-printable-dream?ref=listings_manager_grid"
  },
  {
    title: "Self-Help Planner - Productivity Planner",
    description: "Boost your productivity and self-growth with this printable planner.",
    link: "https://www.etsy.com/uk/listing/4306202866/self-help-planner-productivity-planner?ref=listings_manager_grid"
  },
  {
    title: "Digital Weekly Meal Planner",
    description: "Plan your meals and eat healthy with this digital weekly meal planner.",
    link: "https://www.etsy.com/uk/listing/4306207572/digital-weekly-meal-planner-food?ref=listings_manager_grid"
  },
  {
    title: "Burnout Recovery Bundle - Burnout Journal",
    description: "Recover from burnout and restore balance with this printable journal bundle.",
    link: "https://www.etsy.com/uk/listing/4306213180/burnout-recovery-bundle-burnout-journal?ref=listings_manager_grid"
  },
  {
    title: "Peri-Menopause Symptoms Tracker",
    description: "Track and manage your peri-menopause symptoms with this printable tracker.",
    link: "https://www.etsy.com/uk/listing/4306217942/peri-menopause-symptoms-tracker?ref=listings_manager_grid"
  },
  {
    title: "PTSD Trauma Processing Workbook",
    description: "Process trauma and support your healing journey with this workbook.",
    link: "https://www.etsy.com/uk/listing/4306223469/ptsd-trauma-processing-workbook?ref=listings_manager_grid"
  },
  {
    title: "Self-Care Planner (Printable)",
    description: "Prioritize your wellbeing with this printable self-care planner and template.",
    link: "https://www.etsy.com/uk/listing/4306227351/self-care-planner-printable-and-template?ref=listings_manager_grid"
  },
];

const Articles: React.FC = () => {
  const [productPage, setProductPage] = useState(1);
  const [articlePage, setArticlePage] = useState(1);
    {
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
