import "./App.css";
import Layout from "./Layout";
// import { BrickLayout } from "react-brick-layout";

function App() {
  return (
    <div className="App">
      {/* <BrickLayout column={500} gutter={20} className="react-brick-layout">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
      </BrickLayout> */}
      <Layout
        gutter={20}
        className="react-brick-layout"
        column={3}
        rtl={false}
        animateOnResize={true}
        breakPoint={{
          350: 1,
          450: 2,
          645: 3,
          900: 4,
          1200: 5,
        }}
      >
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
        <div className="card">4</div>
        <div className="card">5</div>
        <div className="card">6</div>
        <div className="card">7</div>
        <div className="card">8</div>
        <div className="card">9</div>
        <div className="card">10</div>
      </Layout>
    </div>
  );
}

export default App;
