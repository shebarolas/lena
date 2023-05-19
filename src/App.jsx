
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';

function App() {

  const router = createBrowserRouter([
    { 
      path: '/', 
      element: <NavBar/>,
      children: [
        { 
          path: '/', 
          element: <Home/>
        }
      ]
    }
  ]);

  return (
    <>  
      <RouterProvider router={router}/>
    </>
  )
}

export default App
