import React, { useState } from "react";
import { useDrop } from "react-dnd";

const ItemType = "ITEM";

const DropContainer = ({ onDrop, droppedItems, onClickItem, duplicateItem }) => {
    const [, drop] = useDrop(() => ({
        accept: ItemType,
        drop: (item) => onDrop(item.id, item.index),
    }));

    const getShapeStyle = (index) => {
        if (index % 2 === 0) {
            return {
                margin: "-20px 0",
                padding: "5px",
                backgroundColor: "#90ee90",
                width: "100%",
                textAlign: "center",
                cursor: "pointer",
            };
        } else {
            return {
                margin: "5px 0",
                padding: "10px",
                backgroundColor: "#f4a460",
                width: "100px",
                height: "100px",
                transform: "rotate(45deg)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
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

    const arrowStyle = {
        fontSize: "70px",
        margin: "5px 0",
    };

    return (
        <div
            ref={drop}
            style={{
                width: "200px",
                minHeight: "200px",
                border: "2px dashed black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "40px",
            }}
        >
            <h4>Drop Here</h4>
            {droppedItems.map((item, index) => (
                <React.Fragment key={item.id}>
                    <div
                        onClick={() => onClickItem(item)}
                        style={getShapeStyle(item.index)}
                    >
                        <span style={getTextStyle(item.index)}>{item.name}</span>
                    </div>
                    {item.index % 2 !== 0 && (
                        <button
                            onClick={() => duplicateItem(item)}
                            style={{
                                margin: "-80px 0px 40px 220px",
                                padding: "10px",
                                backgroundColor: "#ffb6c1",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Add
                        </button>
                    )}
                    {index < droppedItems.length - 1 && (
                        <div style={arrowStyle}>⬇</div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default DropContainer;



// export const Arrow = () => {
//     const [activeSpan, setActiveSpan] = useState(null);

//     const items = [
//         { id: 1, spanText: "Span 1", divText: "This is Div 1" },
//         { id: 2, spanText: "Span 2", divText: "This is Div 2" },
//         { id: 3, spanText: "Span 3", divText: "This is Div 3" },
//     ];

//     return (
//         <div className="container">
//             {items.map((item) => (
//                 <div key={item.id} className="row">
//                     <span
//                         onClick={() =>
//                             setActiveSpan((prev) => (prev === item.id ? null : item.id))
//                         }
//                         className="span-item"
//                     >
//                         {item.spanText}
//                     </span>

//                     {/* Div appears beside span */}
//                     {/* <div
//                         className={div - item`${activeSpan === item.id ? "visible" : ""}`}>
//                         {item.divText}
//                     </div> */}


//                     {/* Arc arrow pointing from span to div */}
//                     {activeSpan === item.id && (
//                         <svg className="arrow" xmlns="http://www.w3.org/2000/svg">
//                             <path
//                                 d="M20,20 C50,0 150,0 180,20" /* Defines the arc curve */
//                                 fill="transparent"
//                                 stroke="#333"
//                                 strokeWidth="2"
//                             />
//                             <polygon
//                                 points="180,20 174,16 174,24" /* Arrowhead at end of arc */
//                                 fill="#333"
//                             />
//                         </svg>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };
