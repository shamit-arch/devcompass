import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LanguagePyramid from './pages/LanguagePyramid';
import DevelopmentTools from './pages/DevelopmentTools';
import AIPage from './pages/AIPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LanguagePyramid />} />
          <Route path="tools" element={<DevelopmentTools />} />
          <Route path="ai" element={<AIPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
