import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import LinkedInPage from './components/LinkedInPage';
import { LinkedInCallback  } from 'react-linkedin-login-oauth2';

function App() {
  return (
    <Router>
        <Routes >
          <Route  path="/linkedin" element={<LinkedInCallback />} />
          <Route path="/" element={<LinkedInPage/>} />
        </Routes>
      </Router>
  );
}

export default App;
