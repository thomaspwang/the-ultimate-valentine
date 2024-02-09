import neesonhappy from './images/neeson-happy.jpg'
import happycat from './images/meme-cat-cat-meme.gif'
import eyeshappy from './images/eyes-happy.gif'
import './Success.css'
import { useNavigate } from 'react-router-dom';


function Success() {
    let navigate = useNavigate();

    const goToQuestionPage = () => {
        navigate('/');
      };
    return (
        <div>
            <div className="image-container">
                <img src={happycat}/>
                <img src={neesonhappy}/>
                <img src={eyeshappy}/>
            </div>
            <div class="valentine-message">
            &#127881;&#127881;&#127881;&#127881;&#127881;YAY YAY YAY YAY YAY YAY YAY YAY YAY YAY YAY YAY&#127881;&#127881;&#127881;&#127881;&#127881;&#127881;&#127881;&#127881;
            </div>
            <div className="btns-container">
                <button
                type="submit"
                className="btn-go-back"
                onClick={goToQuestionPage}
                >
                i've changed my mind :(
                </button>
            </div>
        </div>
    );
  }
  
  export default Success;