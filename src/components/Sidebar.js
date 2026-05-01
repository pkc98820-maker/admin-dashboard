import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{width:"200px", background:"black", color:"white", height:"100vh"}}>
      <h2>Admin</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;