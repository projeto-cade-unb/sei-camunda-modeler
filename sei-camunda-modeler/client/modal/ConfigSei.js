/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from 'camunda-modeler-plugin-helpers/react';
import { Modal } from 'camunda-modeler-plugin-helpers/components';


const Title = Modal.Title || (({ children }) => <h2>{children}</h2>);
const Body = Modal.Body || (({ children }) => <div>{children}</div>);
const Footer = Modal.Footer || (({ children }) => <div>{children}</div>);

export default function ConfigSei({ onClose, sendConfig, setUrlSei, url }) {
  return (
    <Fragment>
      <Title>
        Informe a URL do SEI
      </Title>
      <Body>
        <div className="input-container">
          <input type="text" onInput={url => setUrlSei(url)} value={url} name="url" placeholder="Url" className="search-input form-control" id="search-input" style={{ zIndex: 2000 }} />
        </div>
      </Body>
      <Footer>
        <div>
          <button type="button" className="btn btn-danger" onClick={onClose}>
            Fechar
          </button>
          <button type="button" className="btn btn-primary" onClick={sendConfig}>
            Salvar
          </button>
        </div>
      </Footer>
    </Fragment>
  );
}

