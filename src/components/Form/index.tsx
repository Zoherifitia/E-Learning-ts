import { useRef } from "react";
import "../Form/style.css";

export function Form({closeModal} : any){
    const userName =useRef<HTMLInputElement>(null);
    const password =useRef<HTMLInputElement>(null);
    return(
        <div className="input">
            <div>
                <h3>Se connecter en tant qu'admin</h3>
            </div>
            <div className="container">
                    <div>
                          <label htmlFor="inputuserName" className="form-label"></label>
                          <input ref={userName} type="text" placeholder="userName"/>
                    </div>
                    <div>
                          <label htmlFor="inputName" className="form-label"></label>
                          <input ref={password} type="text" placeholder="password"/>
                    </div>
                    <div className='signIn'>
                          <button className='signIn' onClick={() => closeModal()}>Se connecter</button>
                    </div>
            </div>
        </div>
    )
}