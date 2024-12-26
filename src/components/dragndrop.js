import React, { useState, useRef, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemType = "ITEM";

const DraggableItem = ({ item, index }) => {
  const [, drag] = useDrag(() => ({
    type: ItemType,
    item: { id: item, index },
  }));

  return (
    <div
      ref={drag}
      style={{
        padding: "10px",
        margin: "10px 0",
        backgroundColor: "#add8e6",
        textAlign: "center",
        cursor: "move",
      }}
    >
      {item}
    </div>
  );
};

const DropContainer = ({ onDrop, droppedItems, onClickItem }) => {
  const [, drop] = useDrop(() => ({
    accept: ItemType,
    drop: (item) => onDrop(item.id, item.index),
  }));

  return (
    <div
      ref={drop}
      style={{
        width: "200px",
        minHeight: "300px",
        border: "2px dashed black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "10px",
      }}
    >
      <h4>Drop Here</h4>
      {droppedItems.map((item) => (
        <div
          key={item.id}
          onClick={() => onClickItem(item)}
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "#90ee90",
            textAlign: "center",
            cursor: "pointer",
            borderRadius: "50%",
            width: "80px",
            height: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

const DroppedItemsArea = ({ items }) => (
  <div
    style={{
      width: "300px",
      minHeight: "300px",
      border: "2px solid black",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "10px",
    }}
  >
    <h4>Dropped Items</h4>
    {items.map((item) => (
      <div
        key={item.id}
        style={{
          margin: "20px",
          padding: "10px",
          backgroundColor: "lightblue",
          width: "100px",
          height: "80px",
          textAlign: "center",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {item.name}
      </div>
    ))}
  </div>
);

const DynamicShapesWithDnD = () => {
  const [droppedItems, setDroppedItems] = useState([]);
  const [finalDroppedItems, setFinalDroppedItems] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  const handleDrop = (item, index) => {
    const id = Date.now();
    setDroppedItems((prev) => [...prev, { name: item, id, index }]);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    if (!finalDroppedItems.find((i) => i.id === item.id)) {
      setFinalDroppedItems((prev) => [...prev, { ...item }]);
    }
  };

  const getItemPosition = (itemRef) => {
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }
    return { x: 0, y: 0 };
  };

  const dropRefs = useRef([]);
  const finalRefs = useRef([]);

  useEffect(() => {
    dropRefs.current = dropRefs.current.slice(0, droppedItems.length);
    finalRefs.current = finalRefs.current.slice(0, finalDroppedItems.length);
  }, [droppedItems, finalDroppedItems]);

  return (
    <DndProvider backend={HTML5Backend}>
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
        />

        <DroppedItemsArea items={finalDroppedItems} />

        {/* Draw SVG arrows */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          {activeItem &&
            droppedItems.map((dropItem, i) => {
              const sourcePos = getItemPosition(dropRefs.current[i]);
              const targetPos = getItemPosition(finalRefs.current[i]);

              return (
                <line
                  key={dropItem.id}
                  x1={sourcePos.x}
                  y1={sourcePos.y}
                  x2={targetPos.x}
                  y2={targetPos.y}
                  stroke="black"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              );
            })}
        </svg>
      </div>
    </DndProvider>
  );
};

export default DynamicShapesWithDnD;
