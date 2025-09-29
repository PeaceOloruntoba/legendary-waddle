import React, { useState } from "react";

const ArticlesAdmin: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [articles, setArticles] = useState<{ title: string; content: string }[]>([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content) {
      setArticles([{ title, content }, ...articles]);
      setTitle("");
      setContent("");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }
  };

  return (
    <section className="py-20 min-h-[80vh] bg-bg text-text">
      <div className="max-w-2xl mx-auto px-4 sm:px-8">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
          Articles Admin
        </h2>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 mb-10">
          <div className="mb-6">
            <label className="block text-primary font-semibold mb-2">Title</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-primary/30 focus:outline-primary"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-primary font-semibold mb-2">Content</label>
            <textarea
              className="w-full p-3 rounded-lg border border-primary/30 focus:outline-primary min-h-[120px]"
              value={content}
              onChange={e => setContent(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="gradient-primary text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Publish Article
          </button>
          {success && (
            <div className="mt-4 text-green-600 font-semibold">Article published!</div>
          )}
        </form>
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">Recent Articles</h3>
          {articles.length === 0 && <div className="text-text-secondary">No articles yet.</div>}
          {articles.map((a, i) => (
            <div key={i} className="bg-bg border border-primary/10 rounded-xl p-4 mb-4">
              <div className="font-semibold text-lg text-primary mb-2">{a.title}</div>
              <div className="text-text-secondary whitespace-pre-line">{a.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesAdmin;
