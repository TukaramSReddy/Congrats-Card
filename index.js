const element = (
  <div className="bg">
    <h1 className="heading">Congratulations</h1>
    <div class="container">
      <img
        className="img1"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="name">Kiran V</h1>
      <p className="college">
        Vishnu Institute of Computer Education and Technology, <br />
        Bhimavaram
      </p>
      <img
        className="img2"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
