import { useState, useEffect } from 'react';
import "./Login.css"
import { useNavigate } from "react-router";

export const Login = () => {
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url("admin.jpg")';
    const bacShadow = document.getElementsByClassName('back-shadow')[0];
    bacShadow.style.display = 'block';
    
    let navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const { target } = e;

        const formData = new FormData(target);
        const entries = formData.entries();

        const data = Object.fromEntries(entries);

        fetch(
            'https://shfe-diplom.neto-server.ru/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({login: data.login, password: data.password})
            }
        ).then(response => {
            return response.json();
        }).then(data => {
            if (data.success) {
                navigate("/DiplomProject/admin")
            }
            console.log(data.result);
            setSessions(data.result);
        }).catch(error => console.log(error));
    }
    
    return (
        <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="d-flex flex-column min-vh-100 ">
                <header className="header"> 
                    <div className="row header-top">
                        <div className="home" onClick={() => navigate('/DiplomProject/')}>
                            <span>ИДЁМ</span><span className="letterV">B</span><span>КИНО</span>
                        </div>
                    </div>
                    <span className="row header-bottom">
                        АДМИНИСТРАТОРРРСКАЯ
                    </span>
                </header>

                <main className="col-lg-6 col-md-8 col-sm-12 section offset-lg-3 offset-md-2">
                    <div className="auth-title">
                        АВТОРИЗАЦИЯ
                    </div>
                    <form className="auth_form form modal-form" onSubmit={(e) => onSubmit(e)}>
                        <div className="col-lg-6 col-md-8 col-sm-8 col-12 email offset-lg-3 offset-md-2 offset-sm-2">
                            <label htmlFor="floatingTract" className="form-label">
                                E-mail
                            </label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="floatingTract" 
                                placeholder="example@email.svg"
                                name="login"
                            />
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-8 col-12 password offset-lg-3 offset-md-2 offset-sm-2">
                            <label htmlFor="floatingPassword" className="form-label">
                                Пароль
                            </label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="floatingPassword"
                                name="password"
                            />
                        </div>
                        <button className="btn confirm-btn" type="submit">
                            АВТОРИЗОВАТЬСЯ
                        </button>
                    </form>
                </main>
            </div>
        </div>
        

        
    )
}