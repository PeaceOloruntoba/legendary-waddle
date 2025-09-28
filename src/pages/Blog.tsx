import React from 'react';

const BlogPage: React.FC = () => {
  // Placeholder for blog list UI
  return (
    <section className="py-24 bg-secondary min-h-[60vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-primary">Blog</h2>
          <p className="text-lg text-secondary max-w-xl mx-auto">
            Explore all blog posts and updates here. (Coming soon!)
          </p>
        </div>
        {/* Blog list will go here */}
      </div>
    </section>
  );
};

export default BlogPage;
