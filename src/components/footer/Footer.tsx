import './Footer.scss';
import rsslogo from '../../assets/rsslogo.png';
import ghlogo from '../../assets/github-mark-white.png';

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://rs.school/" target="blank">
          <img alt="rss school logo" src={rsslogo} className="rsslogo" />
        </a>
      </div>
      <div className="footer__list">
        <a href="https://github.com/4Quark" target="blank">
          <img alt="github logo" src={ghlogo} className="ghlogo" />
          Maria Samoilova
        </a>

        <a href="https://github.com/johngaalt" target="blank">
          <img alt="github logo" src={ghlogo} className="ghlogo" />
          Anton Gulko
        </a>
        <a href="https://github.com/iradzh" target="blank">
          <img alt="github logo" src={ghlogo} className="ghlogo" />
          Iryna Zhebryk
        </a>
      </div>

      <p>© 2023-24</p>
    </footer>
  );
};

export default Footer;
