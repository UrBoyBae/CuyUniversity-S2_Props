import logo from './logo.svg';
import './App.css';
import Introduction from './component/introduction';
import Profile from './component/profile'

function App() {
  return (
    <div>
      <Profile/>  
      <Introduction nama = "Ali Akbar Abdillah" kelas = "XI RPL B"/>
      <Introduction nama = "Kurnia Mega" kelas = "XII RPL A"/>
    </div>
  );
}

export default App;
