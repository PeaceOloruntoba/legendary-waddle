import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ArticlesPage from './pages/Articles';
import AboutPage from './pages/About';
import BlogPage from './pages/Blog';
import BlogAdminPage from './pages/BlogAdmin';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/admin/blog" element={<BlogAdminPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;