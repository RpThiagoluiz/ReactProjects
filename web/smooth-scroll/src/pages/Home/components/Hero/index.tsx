import './styles.css';

export function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="content">
        <p>Call us</p>
        <p>+55 (62) 98146-*$%*</p>
        <p>Just for Fun</p>
        <p>Doesn't come with instructions</p>
        <a
          href="https://github.com/RpThiagoluiz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button">Github for More</button>
        </a>
      </div>
    </div>
  );
}
