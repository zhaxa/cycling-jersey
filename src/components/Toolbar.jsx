import PropTypes from "prop-types";
import { fabric } from "fabric";

const Toolbar = ({ canvas }) => {
  // Кнопка "Текст"
  const addText = () => {
    if (!canvas) return;
    const text = new fabric.Textbox("Твой текст", {
      left: 150,
      top: 150,
      fontSize: 24,
      fill: "#000",
      fontFamily: "Rubik",
      editable: true,
    });
    canvas.add(text);
    canvas.renderAll();
  };

  // Кнопка "Удалить" (удаляем выделенный объект)
  const deleteSelected = () => {
    if (!canvas) return;
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.remove(activeObject);
      canvas.discardActiveObject();
      canvas.renderAll();
    }
  };

  // Функция загрузки изображения из файла
  const handleImageUpload = (event) => {
    if (!canvas) {
      console.error("Canvas is null!");
      return;
    }
    const file = event.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Пожалуйста, выберите изображение!");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      fabric.Image.fromURL(reader.result, (img) => {
        // Автоматическое масштабирование: масштабируем так, чтобы изображение заняло примерно половину канваса
        const scaleFactor = Math.min(
          (canvas.width / 2) / img.width,
          (canvas.height / 2) / img.height
        );
        img.set({
          scaleX: scaleFactor,
          scaleY: scaleFactor,
          left: 100,
          top: 100,
          selectable: true,
          hasControls: true,
        });
        canvas.add(img);
        canvas.setActiveObject(img);
        canvas.renderAll();
      });
    };
    reader.readAsDataURL(file);
  };

  // Drag & Drop для загрузки изображения
  const handleDrop = (event) => {
    event.preventDefault();
    if (!canvas) {
      console.error("Canvas is null!");
      return;
    }
    const file = event.dataTransfer.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Пожалуйста, перетащите изображение!");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      fabric.Image.fromURL(reader.result, (img) => {
        const scaleFactor = Math.min(
          (canvas.width / 2) / img.width,
          (canvas.height / 2) / img.height
        );
        img.set({
          scaleX: scaleFactor,
          scaleY: scaleFactor,
          left: 100,
          top: 100,
          selectable: true,
          hasControls: true,
        });
        canvas.add(img);
        canvas.setActiveObject(img);
        canvas.renderAll();
      });
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="toolbar"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <button onClick={addText} className="bg-green">Текст</button>
      <button onClick={deleteSelected} className="bg-red">Удалить</button>
      
      <label htmlFor="upload-image" className="bg-gray file-label">
        Поставить свое изображение
      </label>
      <input
        id="upload-image"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: "none" }}
      />
    </div>
  );
};

Toolbar.propTypes = {
  canvas: PropTypes.object,
};

export default Toolbar;
