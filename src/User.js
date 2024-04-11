import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.jsx';
import List from './List.jsx';
import Card from './Card.jsx';
import Chart from './Chart.jsx';
import HomeTable from './HomeTable.jsx';
import UserTable from './UserTable.jsx';

function User() {
  return (
    <div style={{}}>
    <Navbar/>
    <div style={{display:'flex'}}>
    <List />
    <div>
    <div>
      <UserTable/>
    </div>
    </div>
    </div>
    </div>
  );
}

export default User;
