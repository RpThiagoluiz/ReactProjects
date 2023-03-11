import './styles.css';

export function Demo() {
  return (
    <div className="demo" id="demo">
      <div className="container">
        <div className="col-1">
          <p>More Than 100 Financial Planners,</p>
          <p>One Philosophy</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            rem expedita reprehenderit quidem sequi vitae dolorum facilis sint
            totam quae, ratione rerum tempore ab, odio accusantium sunt,
            necessitatibus asperiores dicta.
          </p>
          <a
            href="https://www.linkedin.com/in/thiago-luiz-0984191a7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">Get your free fries analysis</button>
          </a>
        </div>
        <div className="col-2">
          <iframe
            width="570"
            height="320"
            src="https://www.youtube.com/embed/zAmHQk-OW3k"
            title="Youtube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
