import { useState } from "react";
import PropTypes from "prop-types";
import ModalPicker from "./ModalPicker"; // импорт нового компонента

const TemplatePicker = ({ template1Image, template2Image, template3Image, onTemplateSelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Массив с элементами для модального окна (например, 30 элементов, можно заменить реальными путями к изображениям)
  const additionalElements = Array.from({ length: 30 }, (_, i) => `../assets/element${i+1}.png`);

  return (
    <div className="template-picker">
      <img src={template1Image} alt="Template 1" onClick={() => onTemplateSelect(template1Image)} className="template" />
      <img src={template2Image} alt="Template 2" onClick={() => onTemplateSelect(template2Image)} className="template" />
      <img src={template3Image} alt="Template 3" onClick={() => onTemplateSelect(template3Image)} className="template" />
      {/* Кнопка для открытия модального окна, размещенная в левом нижнем углу секции элементов */} 
      <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>+</button>
      
      {isModalOpen && (  
        <ModalPicker 
          elements={additionalElements} 
          onSelect={(el) => { onTemplateSelect(el); setIsModalOpen(false); }} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};

TemplatePicker.propTypes = {
  template1Image: PropTypes.string.isRequired,
  template2Image: PropTypes.string.isRequired,
  template3Image: PropTypes.string.isRequired,
  onTemplateSelect: PropTypes.func.isRequired,
};

export default TemplatePicker;
