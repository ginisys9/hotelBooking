import img from "../image/img1.png";

function Home() {
  return (
    <div id="home">
      <div className="img-wra">
        <img src={img} alt="Home" />
      </div>
    </div>
  );
}

export default Home;