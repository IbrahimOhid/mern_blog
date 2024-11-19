// router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home';
import About  from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
    <Navbar/>
      <div className="mx-auto px-32">
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/about' element={<About />} />
     <Route path='/article/:name' element={<Article />} />
     <Route path='/articleList' element={<ArticlesList />} />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
