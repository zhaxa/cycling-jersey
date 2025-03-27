import React from "react";
import PropTypes from "prop-types";
import "../styles.css";

const LayerManager = ({ canvas }) => {
  const moveUp = () => {
    const active = canvas.getActiveObject();
    if (active) {
      canvas.bringForward(active);
      canvas.renderAll();
    }
  };

  const moveDown = () => {
    const active = canvas.getActiveObject();
    if (active) {
      canvas.sendBackwards(active);
      canvas.renderAll();
    }
  };

  const bringToFront = () => {
    const active = canvas.getActiveObject();
    if (active) {
      canvas.bringToFront(active);
      canvas.renderAll();
    }
  };

  const sendToBack = () => {
    const active = canvas.getActiveObject();
    if (active) {
      canvas.sendToBack(active);
      canvas.renderAll();
    }
  };

  return (
    <div className="layer-manager">
      <h3>Управление слоями</h3>
      <div className="layer-controls">
        <button onClick={moveUp}>Вверх</button>
        <button onClick={moveDown}>Вниз</button>
        <button onClick={bringToFront}>На передний</button>
        <button onClick={sendToBack}>На задний</button>
      </div>
    </div>
  );
};

LayerManager.propTypes = {
  canvas: PropTypes.object.isRequired,
};

export default LayerManager;
