import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableItem from "./components/DraggableItem";
import DropContainer, { Arrow } from "./components/DropContainer";
import DroppedItemsArea from "./components/DroppedItemsArea";

const DynamicShapesWithDnD = () => {
  const [droppedItems, setDroppedItems] = useState([]);
  const [finalDroppedItems, setFinalDroppedItems] = useState([]);

  const handleDrop = (item, index) => {
    const id = Date.now();
    setDroppedItems((prev) => [...prev, { name: item, id, index }]);
  };

  const handleItemClick = (item) => {
    if (!finalDroppedItems.find((i) => i.id === item.id)) {
      setFinalDroppedItems((prev) => [...prev, { ...item }]);
    }
  };

  const handleDropdownChange = (id, key, value) => {
    setFinalDroppedItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [key]: value } : item
      )
    );
  };

  const handleDuplicateItem = (item) => {
    if (item.index % 2 !== 0) {
      const id = Date.now();
      setDroppedItems((prev) => [...prev, { ...item, id }]);
    }
  };

  return (
    <>


      <DndProvider backend={HTML5Backend}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div>
              <h3>Draggable Items</h3>
              {["Item 1", "Item 2", "Item 3"].map((item, index) => (
                <DraggableItem key={item} item={item} index={index} />
              ))}
            </div>
            <DropContainer
              onDrop={handleDrop}
              droppedItems={droppedItems}
              onClickItem={handleItemClick}
              duplicateItem={handleDuplicateItem}
            />
            <DroppedItemsArea
              items={finalDroppedItems}
              onDropdownChange={handleDropdownChange}
            />
          </div>
        </div>
      </DndProvider>
      {/* <Arrow /> */}
    </>
  );
};

export default DynamicShapesWithDnD;
