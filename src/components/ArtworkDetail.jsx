import { useParams } from 'react-router-dom';
import { artworks } from '../data/artworks';

export default function ArtworkDetail() {
  const { id } = useParams();
  const artwork = artworks.find(a => a.id === parseInt(id));

  if (!artwork) return <div>Artwork not found</div>;

  return (
    <div className="artwork-detail">
    <div className="detail-grid">
      <div className="artwork-image">
        <img src={artwork.image} alt={artwork.title} />
      </div>
      <div className="artwork-info">
        <h1 className='persona'>{artwork.person}</h1>
        <p className='titulo'>{artwork.title}</p>
        <p className='artista'>{artwork.artist}</p>
        <p className='anio'>{artwork.year}</p>
        <p className='source'>{artwork.source}</p>
        <p className='porque'>{artwork.why}</p>
      </div>
    </div>
  </div>
  );
}