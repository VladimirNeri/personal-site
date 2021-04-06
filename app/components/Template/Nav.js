import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Vladimir Neri</h2>
        <p><a href="mailto:info@vladimirneri.com">info@vladimirneri.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Vlad Neri. I’m a Full Stack Developer from Santa Monica, CA.  I learned how to build web applications through self-driven learning and
        from a Full Stack Web Development Coding Bootcamp at UCLA.  Before my journey in web development I held positions at City National Bank and Keller Williams Realty.
        I am also an avid freelance photographer.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Vladimir Neri <Link to="/">iamvladneri.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
