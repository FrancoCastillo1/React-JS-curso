/* import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; */
import "./footer.css"
import { FaFacebook , FaYoutube ,FaTwitter ,FaInstagram} from "react-icons/fa";
function Footer(){
    return (
      <footer>
        <div className="divFooter">
          <ul>
            <li>
              <a href="#">Términos y Condiciones</a>
            </li>
            <li>
              <a href="#">Privacidad</a>
            </li>
            <li>
              <a href="#">Política de Compra y Envios</a>
            </li>
          </ul>
        </div>
        <div className="divFooterCenter">
          <h3>The One Shop</h3>
          <ul className="nuestrasRedes">
            <li>
              <a href="#">
                <FaFacebook className="iconsFooter"/>
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube className="iconsFooter"/>
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter className="iconsFooter"/>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram className="iconsFooter"/>
              </a>
            </li>
          </ul>
        </div>
        <div className="divFooter">
          <ul>
            <li>
              <a href="#">Nosotr@s</a>
            </li>
            <li>
              <a href="#">Trabaja aqui</a>
            </li>
            <li>
              <a href="#">Historia</a>
            </li>
          </ul>
        </div>
      </footer>
    );
}
export default Footer