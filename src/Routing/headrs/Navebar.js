import { Link } from "react-router-dom";





const Naverssss = () => {
    return (
        <>
  <nav class="navbar navbar-expand-sm bg-secondary navbar-dark" >
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item" >
      <Link to={"/home"} style={{ color:"black",textDecoration:"none",marginLeft:"40px"}}>Home</Link>
      </li>
      <li class="nav-item">
        <Link to={"/about"} style={{textDecoration:"none",marginLeft:"10px", color:"black"}}>ABOUT</Link>
      </li>
    </ul>
  </div>
</nav>


        </>
    )
}
export default Naverssss; 