import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Welcome from './pages/Welcome';
import CreateUser from './pages/CreateUser';
import './App.css';
import Login from './pages/Login';

const router = createBrowserRouter([
  { path: '/', Component: Login },
  { path: '/welcome', Component: Welcome }, // 🆕
  { path: '/createuser', Component: CreateUser }, // 🆕
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
