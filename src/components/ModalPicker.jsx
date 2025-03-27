import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles.css";

const ModalPicker = ({ elements, onSelect, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Выберите элемент</h3>
        <div className="elements-grid">
          {elements.map((el, index) => (
            <img
              key={index}
              src={el}
              alt={`Элемент ${index + 1}`}
              className="element-item"
              onClick={() => onSelect(el)}
            />
          ))}
        </div>
        <button className="close-modal" onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

ModalPicker.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalPicker;
