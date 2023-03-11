import template from '../../../../assets/images/template.png';
import './styles.css';

export function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={template} alt="john" />
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur temporibus nulla maxime magni, quis quibusdam a qui
            architecto soluta aliquam, veritatis consectetur? Suscipit totam at
            accusantium ea amet numquam laborum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            dolorem labore. Eius distinctio porro, expedita quos voluptates
            ratione odio esse nobis iure quia nihil quasi a assumenda aliquid
            minus optio?
          </p>

          <a
            href="https://github.com/RpThiagoluiz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">Explore More</button>
          </a>
        </div>
      </div>
    </div>
  );
}
