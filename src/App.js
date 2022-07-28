import './App.scss';
import intro from './assets/introloop.mp3';

function App() {
  return (
    <div className="App">
      <audio class='intro' loop autoPlay >
        <source src={intro} type="audio/mpeg"/>
      </audio>

      <div className="content">
        <img src="https://cdn.upshow.tv/watch-to-win/UPshow_Logo.png" />
      </div>
      <div className="interactions">
        <p>Bienvenido lazer a una aventura sin igual con la chota</p>
      </div>
    </div>
  );
}

export default App;
