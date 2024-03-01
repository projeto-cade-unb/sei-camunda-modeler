/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from 'camunda-modeler-plugin-helpers/react';
import { Modal } from 'camunda-modeler-plugin-helpers/components';


const Title = Modal.Title || (({ children }) => <h2>{children}</h2>);
const Body = Modal.Body || (({ children }) => <div>{children}</div>);
const Footer = Modal.Footer || (({ children }) => <div>{children}</div>);


export default function AssigneeModal({ assignees, setFilter, setAssignee, onClose }) {
  return (
    <Fragment>
      <Title>
        Lista de Cargos
      </Title>
      <Body>
        <div className="input-container">
          <input type="text" onInput={setFilter} className="search-input form-control" id="search-input" style={{ zIndex: 2000 }} />
        </div>
        <ul className="repo-list" onClick={setAssignee}>
          {assignees.map(({ id, cargo }) => (
            <li className="repo-item" key={id} data-id={id} data-value={cargo}>
              <span>{cargo}</span>
              <button className="btn-select-repo btn-primary btn-sm">
                &#8658;
              </button>
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

