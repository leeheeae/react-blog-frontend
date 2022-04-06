import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/@:username" element={<PostListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/@:username/:postId" element={<PostPage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </>
  );
};

export default App;
