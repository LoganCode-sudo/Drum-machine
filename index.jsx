const arr = [
  {
    keyCode:81,
    key:"Q" ,
    sound:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode:87,
    key:"W" ,
    sound:'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode:69,
    key:"E" ,
    sound:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode:65,
    key:"A" ,
    sound:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode:83,
    key: "S",
    sound:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode:68,
    key: "D",
    sound:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode:90,
    key:"Z" ,
    sound:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode:88,
    key: "X",
    sound:'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode:67,
    key: "C",
    sound:'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

const App =()=>(
    <div id="drum-machine">
      <div id="display">
        {arr.map((arr,i)=>(
        <Pads text={arr.key} key={i} audio={arr.sound} />
        ))}
        <br />
        <h3 id="str"></h3>
      </div>
    </div>
);

class Pads extends React.Component{
  constructor(props){
    super(props);
    
    this.myRef = React.createRef();
    this.PlaySound = this.PlaySound.bind(this);
  }
  
  PlaySound(){
   console.log(this.myRef.current);
   this.myRef.current.play();
    const id = this.myRef.current.src;
    document.getElementById("str").innerText = id;
  }
  
  render(){
    const { text, audio }= this.props;
    
    return(
    <div className="drum-pad" onClick={this.PlaySound} id={audio}>
      { text }
      <audio ref={this.myRef} src={audio} className="clip" id={text}/>
    </div>
    )
  }
 
};

document.addEventListener('keydown',(e)=>{
  const key = e.key;
  const audio = document.getElementById(key);
  
  if(audio){ 
  audio.play()
  }
});

ReactDOM.render(<App />,document.getElementById("root"));
