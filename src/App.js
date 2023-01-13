
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div>
      <ToastContainer
              position="top-center"
              autoClose={200}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
          />
      </div>
      <div className='App'>
         
        <Header/>
        <Body/>
      </div>
    </>
  );
}

export default App;
