import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>🚀 Welcome to Homepage!🚀</h1>
      <ul className="people">
        {['articles', 'books', 'people'].map((path, i) => {
          return (
            <li className="card">
              <Link to={'/' + path}>
                <div className="info" key={i}>
                  <h2>{path.toUpperCase() + ' PAGE'}</h2>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
