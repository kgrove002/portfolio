import Layout from './Layout';
import About from './About';
import Qualifications from './Qualifications';
import Contact from './Contact';
import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [confirmation, setConfirmation] = useState('');
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="Qualifications" element={<Qualifications />} />
        <Route
          path="Contact"
          element={
            <Contact
              confirmation={confirmation}
              setConfirmation={setConfirmation}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
