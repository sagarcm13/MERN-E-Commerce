import Nav from './Nav.js'
import Home from './Home.js'
import List from './List.js'
import Footer from './Footer.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-grow">
            <Routes>
              <Route index element={<Home />} />
              <Route path='/home' element={<Home />} />
              {/* <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} /> */}
              <Route path='/list' element={<List />} />
              {/* <Route path='/product' element={<Product />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
