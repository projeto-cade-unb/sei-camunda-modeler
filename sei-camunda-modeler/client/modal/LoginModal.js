/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from 'camunda-modeler-plugin-helpers/react';
import { Modal } from 'camunda-modeler-plugin-helpers/components';


const Title = Modal.Title || (({ children }) => <h2>{children}</h2>);
const Body = Modal.Body || (({ children }) => <div>{children}</div>);
const Footer = Modal.Footer || (({ children }) => <div>{children}</div>);

export default function LoginModal({ onClose, sendPassword, setUser, setPwd, loading, iconLoading }) {
  return (
    <Fragment>
      <Title>
        Informe seu nome de usuário e senha
      </Title>
      <Body>
        <div className="input-container">
          <input type="text" onInput={user => setUser(user)} name="user" placeholder="Usuário" className="search-input form-control" id="search-input" style={{ zIndex: 2000 }} />
        </div>
        <div className="input-container">
          <input type="password" onInput={pwd => setPwd(pwd)} name="password" placeholder="Senha" className="search-input form-control" id="search-input" style={{ zIndex: 2000 }} />
        </div>
      </Body>
      <Footer>
        {loading && (<div><img src={iconLoading} width="50" height="50" /></div>)}
        {!loading && (
          <div>
            <button type="button" className="btn btn-danger" onClick={onClose}>
              Fechar
            </button>
            <button type="button" className="btn btn-primary" onClick={sendPassword}>
              Entrar
            </button>
          </div>
        )}
      </Footer>
    </Fragment>
  );
}

