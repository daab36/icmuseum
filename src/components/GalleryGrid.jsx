import { Link } from 'react-router-dom';
import { artworks } from '../data/artworks';

export default function GalleryGrid() {
  return (
    <div className="gallery-grid">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="artwork-item">
          <Link to={`/artwork/${artwork.id}`}>
            <img 
              src={artwork.image} 
              alt={artwork.title}
              className="artwork-image"
            />
            <h3 className='Namepersona'>{artwork.person}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}