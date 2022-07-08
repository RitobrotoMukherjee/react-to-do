import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts/MainLayout';
import TodoList from './components/TodoList';
import About from './components/About';
import Author from './components/Author';
import NotFound from './components/404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TodoList />} />
        <Route path="about" element={<About />} />
        <Route path="author" element={<Author />} />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
}

export default App;
