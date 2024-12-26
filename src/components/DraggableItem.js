import React from "react";
import { useDrag } from "react-dnd";

const ItemType = "ITEM";

const DraggableItem = ({ item, index }) => {
    const [, drag] = useDrag(() => ({
        type: ItemType,
        item: { id: item, index },
    }));

    const getShapeStyle = (index) => {
        if (index % 2 === 0) {
            return {
                padding: "10px",
                margin: "10px 0",
                backgroundColor: "#add8e6",
                textAlign: "center",
                cursor: "move",
            };
        } else {
            return {
                margin: "50px 0",
                padding: "10px",
                backgroundColor: "#87CEFA",
                width: "100px",
                height: "100px",
                transform: "rotate(45deg)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "move",
            };
        }
    };

    const getTextStyle = (index) => {
        if (index % 2 !== 0) {
            return {
                transform: "rotate(-45deg)",
                textAlign: "center",
                width: "max-content",
            };
        }
        return {};
    };

    return (
        <div ref={drag} style={getShapeStyle(index)}>
            <span style={getTextStyle(index)}>{item}</span>
        </div>
    );
};

export default DraggableItem;
