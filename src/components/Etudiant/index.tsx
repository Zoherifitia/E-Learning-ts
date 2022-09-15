import { useNavigate } from "react-router-dom";
import "../Etudiant/style.css"

export default function Etudiant(){
  const navigate = useNavigate();
    return(
      <div className='etudiant'>
              <div>
                  <nav className='navbar'>
                    <div className='connected'>
                    <ul>
                      <li><a href="http://calendar.hei.school/">Calendrier</a></li>
                      <li><a href="https://meet.google.com/?hs=197&pli=1&authuser=0">suivez vos cours</a></li>
                      <li><a href="" onClick={() => navigate('/')}>Se deconnecter</a></li>
                    </ul>
                    </div>
                  </nav>
                  <div className='calendrier'>
                        <h3>Vous pouvez voir votre emploi du temps en cliquant sur le bouton Calendrier</h3>
  
                    </div>
                  <div className='container'>
                  
                    <div>
                      
                        
                          <p>Pour tous les cours , on a ce meme lien pour tous nos meet </p>
                          <p>Copier le lien dans <a href="">lien</a></p>
                          <p>entrer dans 'suivez vos cours'</p>
                          <p>mettez le lien sur l'input 'saisir un code ou un lien' et <span>participer</span></p>
                          
                      
                    </div>
                    
                  </div > 
                  <div className="footer">
                    <p>Copyright &copy; 2021 N'Itsiaro.  <br />Tous droits réservés.</p>
                  </div>
              </div>
        </div>
  
    )
  }