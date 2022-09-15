import React, { useRef, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,

  Route,
  Link
} from "react-router-dom";



function App() {

  return (  
    <>
    <Home/>
    <Etudiant/>
    </>
  );
}
function Etudiant(){
  return(
    <div className='etudiant'>
            <div>
                <nav className='navbar'>
                  <div className='connected'>
                  <ul>
                    <li><a href="http://calendar.hei.school/">Calendrier</a></li>
                    <li><a href="https://meet.google.com/?hs=197&pli=1&authuser=0">suivez vos cours</a></li>

                  </ul>
                  </div>
                </nav>
                <div>
                  <div>
                  <h4>
                    <ul>
                      <li>Vous pouvez voir votre emploi du temps en cliquant sur le bouton Calendrier</li>
                      <li>Pour tous les cours , on a ce meme lien pour tous nos meet </li>
                      <li>Copier le lien dans <a href=""><h3>lien</h3></a></li>
                      <li>entrer dans 'suivez vos cours'</li>
                      <li>metre le lien sur l'input 'saisir un code ou un lien' et <h3>participer</h3></li>
                    </ul>
                  </h4>
                  </div>
                  <div>
                   
                  </div>
                </div>
            </div>
          </div>

  )
}

function Home(){
  const first_Name =useRef<HTMLInputElement>(null);
  const last_Name =useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef =useRef<HTMLInputElement>(null);
  return(
    <div>
      <nav className='navbar'>

          <div className='en_tete_menu'>
            
            <div className='notConnecte'>
              <ul>
                <li><a href="">se connecter</a></li>
                <li><a href="https://bit.ly/3MzGpTI">Les parcours</a></li>
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
                  <div className="container">
                      <div>
                          <label htmlFor="inputName" className="form-label"></label>
                          <input ref={first_Name} type="text" placeholder="Nom"/>
                      </div>
                      <div>
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
  )
}

export default App;
