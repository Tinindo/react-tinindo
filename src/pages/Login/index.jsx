import React from 'react';

import logo from '../../assets/logo.png';

import './style.css';

export default function Login() {
    return (
        <div class="container">
            <div class="box-left content-left row">
                <div class="content-left column">
                    <img src={logo} width="364" height="149" />
                </div>
            </div>
            <div class="box-right content-right column">
                <div class="margin-content">
                    <h1 class="title-login">Fazer login</h1>
                </div>
                <div class="content-left column">
                    <form action="js/main.js" method="POST">
                        <label class="font-color" for="email">E-mail:</label>
                        <input class="input-style font-color" type="email" id="email" name="email" />
                        <label class="font-color" for="pass">Senha:</label>
                        <input class="input-style font-color" type="password" id="pass" name="pass" />
                        <div class="align-content-input">
                            <input class="ckb-style" type="checkbox" id="lbm" name="lbm" />
                            <label class="font-color lbm-check" for="lbm">Lembrar-me</label>
                            <a class="link-style margin-left" href="#">Esqueci minha senha</a>
                        </div>
                        <input class="btn-style" type="submit" value="Entrar" />
                    </form>
                    <div class="content-left margin-top">
                        <a class="link-style" href="register.html">Não possue uma conta? Cadastra-se</a>
                    </div>
                </div>
            </div>
        </div>
    );
}