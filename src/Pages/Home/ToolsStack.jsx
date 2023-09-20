import data from "../../data/index.json";

export default function ToolsStack() {
  return (
    <section className="toolsstack--section" id="ToolsStack">

      <div className="toolsstack--container--box">
        <div className="toolsstack--container">
          <h2>Tools Stack Bro</h2>
        </div>
      </div>
      <div className="toolsstack--section--container">
        {data?.toolstack?.map((item, index) => 
          <div key={index} className="toolsstack--section--card">
            <div className="toolsstack--section--img">
              <img src={item.src} alt="Placeholder"/>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
