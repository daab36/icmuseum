import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div>
      <header className='header'>
        <nav className="nav-container">
          <img className="iclogo" src="../icmuseum/images/icstars_logo.jpeg" alt="IC Stars Logo" />
          <Link to="/" className="home-link">I.C. Stars Museum</Link>
          <img className="ailogo" src="../icmuseum/images/ArtInsititute.png" alt="Art Institute Logo" />
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}