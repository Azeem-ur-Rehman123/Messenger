import './App.css';
import ChattComponent from './components/ChattComponent/ChattComponent';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <SideBar />
        <ChattComponent />
      </div>
    </div>
  );
}

export default App;
