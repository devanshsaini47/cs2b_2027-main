import { menuItems } from "../data";
const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {menuItems.map((item) => (
          <li>
            <a href={item.link} class="footer-link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <ul class="footer-icons">
        <li>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" class="footer-icon">
            <i class="fab fa-squarespace"></i>
          </a>
        </li>
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved <br />
        Developed and maintained by : Devansh Saini 2300320120085
      </p>
    </footer>
  );
};
export default Footer;
