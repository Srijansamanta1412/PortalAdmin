import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.jsx';
import List from './List.jsx';
import Card from './Card.jsx';
import Chart from './Chart.jsx';
import HomeTable from './HomeTable.jsx';
import ChartEachUser from './ChartEachUser.jsx';

function App() {
  return (
    <div style={{}}>
    <Navbar/>
    <div style={{display:'flex'}}>
    <List />
    <div>
    <div>
    <ChartEachUser/>
    </div>
    <div>
      <HomeTable/>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
