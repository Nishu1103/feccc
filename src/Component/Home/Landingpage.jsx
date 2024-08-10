import "./landing.css"
const Landingpage= () => {
  return (
      <div className="landing-container">
        <div className="texts">
          <h1 className="title-texts">Finance and Economics Club</h1>
          <h1 className="title-texts">IIT KHARAGPUR</h1>
          <a href="./register" className="buttonnn" target="_blank" rel="noopener noreferrer" style={{width:"200px", height:"50px",backgroundColor:"#175996",
            color:"white",borderRadius:"10px",padding:"10px", font:"bold"
          }}> register to coming event </a>
          
        </div>
 
      </div>
  );
};



export default Landingpage;

