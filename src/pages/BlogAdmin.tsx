import React, { useState } from 'react';

const BlogAdminPage: React.FC = () => {
  // Placeholder for blog admin UI
  const [mode, setMode] = useState<'list' | 'edit' | 'add'>('list');
  return (
    <section className="py-24 bg-secondary min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-primary">Blog Admin</h2>
          <p className="text-lg text-secondary max-w-xl mx-auto">
            Manage your blog posts here. (UI only, backend coming soon!)
          </p>
        </div>
        <div className="bg-bg rounded-2xl shadow-md p-8">
          {/* Admin controls placeholder */}
          <div className="flex gap-4 mb-8 justify-center">
            <button className="gradient-primary text-white px-6 py-2 rounded-full font-semibold" onClick={() => setMode('add')}>Add New Post</button>
            <button className="bg-secondary text-primary px-6 py-2 rounded-full font-semibold border border-primary" onClick={() => setMode('list')}>View All Posts</button>
          </div>
          {mode === 'list' && (
            <div className="text-secondary text-center">No posts yet. (UI only)</div>
          )}
          {mode === 'add' && (
            <form className="space-y-4">
              <input className="w-full p-3 rounded bg-bg border border-primary text-primary" placeholder="Title" />
              <textarea className="w-full p-3 rounded bg-bg border border-primary text-primary" placeholder="Content" rows={6} />
              <div className="flex gap-4 justify-end">
                <button className="gradient-primary text-white px-6 py-2 rounded-full font-semibold" type="submit">Save</button>
                <button className="bg-secondary text-primary px-6 py-2 rounded-full font-semibold border border-primary" type="button" onClick={() => setMode('list')}>Cancel</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogAdminPage;
