import './App.css';
import Layout from './layout/layout';
import RoverPictures from './components/roverPictures/roverPictures';

function App() {
  return (
    <div className="App">
      <Layout>
        <RoverPictures/>
      </Layout>
    </div>
  );
}

export default App;
