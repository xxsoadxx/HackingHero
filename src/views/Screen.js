import './Screen.scss';
import TypeWriter from '../components/TypeWriter';
function Screen() {
  console.log('Screen Screen');
  return (
    <div className="Screen">


      <div className="content">

      </div>
      <div className="interactions">
        <TypeWriter contents={[`it's another day at upshow you are very calm working when suddenly...`, 3000, `Something happened!!`, 3000, 'TABARE: UpShow was hacked we need help!',3000,'HORACIO: But Andres is in vacations',3000, 'It seems that you are the only hope for UpShow, are you ready for this adventure?']}
          speed={100}
          onDone={() => {
            console.log('terminooo')
          }} />
      </div>
    </div>
  );
}

export default Screen;
