/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from 'camunda-modeler-plugin-helpers/react';
import { Modal } from 'camunda-modeler-plugin-helpers/components';


const Title = Modal.Title || (({ children }) => <h2>{children}</h2>);
const Body = Modal.Body || (({ children }) => <div>{children}</div>);
const Footer = Modal.Footer || (({ children }) => <div>{children}</div>);


export default function CandidateUserModal({ users, setFilter, setCandidateUser, onClose, selectedUsers }) {
  return (
    <Fragment>
      <Title>
        Lista de Usuários
      </Title>
      <Body>
        <div className="input-container">
          <input type="text" onInput={setFilter} className="search-input form-control" id="search-input" style={{ zIndex: 2000 }} />
        </div>
        <ul className="repo-list" onClick={setCandidateUser}>
          {users.map(({ id, nome, sigla }) => (
            <li className="repo-item" key={id} data-id={id} data-value={sigla}>
              <strong>{sigla}</strong><span>{nome}</span>
              {selectedUsers.find(user => user === sigla) ? (
                <button className="btn-select-repo btn-danger btn-sm">
                  x
                </button>) : (
                <button className="btn-select-repo btn-primary btn-sm">
                  &#8658;
                </button>
              )}
            </li>
          ))}
        </ul>
      </Body>
      <Footer>
        <div>
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Fechar
          </button>
        </div>
      </Footer>
    </Fragment>
  );
}

