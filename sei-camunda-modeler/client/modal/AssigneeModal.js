/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from 'camunda-modeler-plugin-helpers/react';
import { Modal } from 'camunda-modeler-plugin-helpers/components';


const Title = Modal.Title || (({ children }) => <h2>{children}</h2>);
const Body = Modal.Body || (({ children }) => <div>{children}</div>);
const Footer = Modal.Footer || (({ children }) => <div>{children}</div>);


export default function AssigneeModal({ assignees, setFilter, setAssignee, onClose, selectedAssignees }) {
  return (
    <Fragment>
      <Title>
      Lista de Usuários
      </Title>
      <Body>
        <ul className="repo-list" onClick={setAssignee}>
          {assignees.map(({ id, nome, sigla }) => (
            <li className="repo-item" key={id} data-id={id} data-value={nome}>
              <strong>{sigla}</strong><span>{nome}</span>
              {selectedAssignees.find(user => user === sigla) ? (
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
        <button type="button" className="btn btn-primary" onClick={onClose}>
          Fechar
        </button>
      </Footer>
    </Fragment>
  );
}

