import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryGrid from "./components/GalleryGrid";
import ArtworkDetail from "./components/ArtworkDetail";
import Layout from "./components/Layout";

function App() {
  return (
  //si esto no funciona, eliminar HashRouter just in case
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<GalleryGrid />} />
            <Route path="/artwork/:id" element={<ArtworkDetail />} />
          </Routes>
        </Layout>
      </Router>
  );
}

export default App;