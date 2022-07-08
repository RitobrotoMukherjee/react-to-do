import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => (
  <div>
    <Navigation />
    <main className="App">
      <Outlet />
    </main>
  </div>
);

export default Layout;
