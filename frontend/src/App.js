import Nav from './Nav.js'
import Home from './Home.js'
import List from './List.js'
import Product from './Product.js'
import Footer from './Footer.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-grow">
            <Routes>
              <Route index element={<Home />} />
              <Route path='/' element={<Home />} />
              {/* <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/login' element={<Login />} /> */}
              <Route path='/list' element={<List />} />
              <Route path='/product' element={<Product />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
