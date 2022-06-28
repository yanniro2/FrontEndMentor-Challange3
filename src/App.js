import "./Style/Main.css";
import Heading from "./Components/Heading";
import Rating from "./Components/Rating";
import Review from "./Components/Review";
import { socialProof } from "./Datas/SocialProof";

function App() {
  const heading = socialProof.map((data, index) => {
    return <h1 key={index}>{data.heading}</h1>;
  });

  const paragraph = socialProof.map((data, index) => {
    return <p key={index}>{data.paragraph}</p>;
  });

  return (
    <div className="App">
      <div className="App-top">
        <div className="App-top-left">
          <Heading heading={heading} paragraph={paragraph} />
        </div>
        <div className="App-top-right">
          <Rating socialProof={socialProof} />
        </div>
      </div>
      <div className="App-bottom">
        <Review socialProof={socialProof} />
      </div>
    </div>
  );
}

export default App;
