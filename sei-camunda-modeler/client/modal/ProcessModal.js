/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from 'camunda-modeler-plugin-helpers/react';
import { Modal } from 'camunda-modeler-plugin-helpers/components';


const Title = Modal.Title || (({ children }) => <h2>{children}</h2>);
const Body = Modal.Body || (({ children }) => <div>{children}</div>);
const Footer = Modal.Footer || (({ children }) => <div>{children}</div>);


export default function ProcessModal({ docs, setFilter, setSelected, onClose }) {
  return (
    <Fragment>
      <Modal.Title>
        Tipo de processo
      </Modal.Title>
      <Modal.Body>
        <div className="input-container">
          <input type="text" onInput={setFilter} className="search-input form-control" id="search-input" style={{ zIndex: 2000 }} />
        </div>
        <ul className="repo-list" onClick={setSelected}>
          {docs.map(({ id, titulo }) => (
            <li className="repo-item" key={id} data-id={id} data-value={titulo}>
              <span>{titulo}</span>
              <button className="btn-select-repo btn-primary btn-sm">
                &#8658;
              </button>
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-primary" onClick={onClose}>
          Fechar
        </button>
      </Modal.Footer>
    </Fragment>
  );
}

