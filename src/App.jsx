
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Productos } from './pages/Productos';
import { Nosotros } from './pages/Nosotros';
import { Contacto } from './pages/Contacto';

function App() {

  const router = createBrowserRouter([
    { 
      path: '/', 
      element: <NavBar/>,
      children: [
        { 
          path: '/', 
          element: <Home/>
        },
        { 
          path: '/productos',
          element: <Productos/>
        },
        { 
          path: '/nosotros',
          element: <Nosotros/>
        },
        { 
          path: '/contacto',
          element: <Contacto/>
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
