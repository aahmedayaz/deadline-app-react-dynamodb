import LoginSignUpWrapper from './components/LoginSignUpWrapper';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LoginSignUpWrapper type={"Login"}/>} />
            <Route exact path="/login" element={<LoginSignUpWrapper type={"Login"}/>} />
            <Route path="/signup" element={<LoginSignUpWrapper type={"Signup"}/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
