import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../Form";
import Modal from "../modal/Modal";
import "../Home/style.css";
export function Home(){

   const navigate = useNavigate();
    const [show,setShow] = useState(false);
    const first_Name =useRef<HTMLInputElement>(null);
  const last_Name =useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef =useRef<HTMLInputElement>(null);

  const showWindow = () =>  {
     setShow(!show)
  }
  return(
    <>
  <Modal isActive={show} handleModal={showWindow}><Form closeModal={showWindow}/></Modal>
    <div>
      <nav className='navbar'>

          <div className='en_tete_menu'>
            
            <div className='notConnecte'>
              <ul>
                <li><a href="" onClick={() => navigate('/etudiant')}>se connecter</a></li>
                <li><a href="https://bit.ly/3MzGpTI">Les parcours</a></li>
                <li><a onClick={() => {showWindow()}}>admin</a></li>
              </ul>
            </div>
          </div>
      </nav>
      <div className='Accueil'>
              <h2>Vous êtes passionnés par l'informatique ? </h2>
              <h2>Voulez-vous finir vos études mais vous n'avez pas le temps de vous deplacez ?</h2>
              <h2>La solution est juste ici &#128512;</h2>
              <h3>on est une université spécialisé en informatique <a href="https://hei.school/">Voir plus</a></h3>
              
          </div>
    <div className="input">
              <div className=''>
                  <div className="container forms">
                    
                      <div className="demi">
                          <label htmlFor="inputName" className="form-label"></label>
                          <input ref={first_Name} type="text" placeholder="Nom"/>
                      </div>
                      <div className="demi">
                          <label htmlFor="inputName" className="form-label"></label>
                          <input ref={last_Name} type="text" placeholder="Prenom" />
                      </div>
                      <div>
                          <label htmlFor="inputEmail" className="form-label"></label>
                          <input ref={emailRef} type="email" placeholder="email" />
                      </div>
                      <div>
                          <label htmlFor="password" className="form-label"></label>
                          <input ref={passwordRef} type="password" placeholder="Mot de passe" />
                      </div>
                      <div className='button'>
                        <div className='signIn'>
                          <button className='signIn'>Se connecter</button>
                        </div>
                        <div className='signUp'>
                          <button className='signUp'>S'inscrire</button>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>
          </>
  )
}