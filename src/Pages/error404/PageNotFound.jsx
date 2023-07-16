import "./PageNotFound.css";
import error404 from "../../assets/images/404.png"
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <section id="page404">
      <main>
        <img src={error404} alt="404error"/>
        <h3>Oops, you’v lost in space.</h3>
        <p>We Can’t find the page that you’re looking for.</p>
        <button><Link id="errorLink" to="/">GO HOME</Link></button>
      </main>
    </section>
  )
}

export default PageNotFound