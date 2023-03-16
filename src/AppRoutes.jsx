import { Route, Routes } from 'react-router-dom';

import ActionsPost from './pages/PostActions';
import MainLayout from './components/Layouts/MainLayout';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import usePost from './hooks/usePost';

const AppRoutes = () => {
  const posts = usePost();

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/post/" element={<ActionsPost posts={posts} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
