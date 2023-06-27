import { Routes } from 'react-router-dom';
import Home from './Home';
import Articles from './Articles';
import Article from './Article';
import Books from './Books';
import Help from './Help';
import People from './People';

function Main() {
  return (
    <>
      <div className="page-content">
        <Routes>
          <Routes path="/" element={<Home />}></Routes>
          <Routes path="/articles" element={<Articles />}></Routes>
          <Routes path="/articles/:slug" element={<Article />}></Routes>
          <Routes path="/books" element={<Books />}></Routes>
          <Routes path="/help" element={<Help />}></Routes>
          <Routes path="/people" element={<People />}></Routes>
        </Routes>
      </div>
    </>
  );
}

export default Main;
