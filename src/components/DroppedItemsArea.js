// const DroppedItemsArea = ({ items, onDropdownChange }) => (
//     <div
//         style={{
//             width: "300px",
//             minHeight: "200px",
//             border: "2px solid black",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "flex-start",
//             padding: "40px",
//             gap: "20px", // Add gap between items
//         }}
//     >
//         <h4>Dropped Items</h4>
//         {items.map((item) => (
//             <div
//                 key={item.id}
//                 style={{
//                     margin: "10px", // Increased margin to add space between items
//                     padding: "15px", // Increased padding for visual space inside the item
//                     backgroundColor: "lightblue",
//                     width: "100%",
//                     textAlign: "center",
//                     borderRadius: "1000px", // Rounded corners for a cloud-like shape
//                     boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
//                     transition: "transform 0.3s ease-in-out", // Smooth transition effect on hover
//                 }}
//                 onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")} // Hover effect
//                 onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}>
//                 <div>{item.name}</div>
//                 <div style={{ marginTop: "10px" }}>
//                     <select
//                         onChange={(e) =>
//                             onDropdownChange(item.id, "reason", e.target.value)
//                         }
//                         style={{
//                             marginRight: "5px",
//                             borderRadius: "10px",
//                             padding: "5px",
//                         }}
//                     >
//                         <option>Reason 1</option>
//                         <option>Reason 2</option>
//                         <option>Reason 3</option>
//                     </select>
//                     <select
//                         onChange={(e) =>
//                             onDropdownChange(item.id, "reasonCode", e.target.value)
//                         }
//                         style={{
//                             marginRight: "5px",
//                             borderRadius: "10px",
//                             padding: "5px",
//                         }}
//                     >
//                         <option>Code 1</option>
//                         <option>Code 2</option>
//                         <option>Code 3</option>
//                     </select>
//                     <select
//                         onChange={(e) =>
//                             onDropdownChange(item.id, "approvedBy", e.target.value)
//                         }
//                         style={{
//                             borderRadius: "10px",
//                             padding: "5px",
//                         }}
//                     >
//                         <option>Approver 1</option>
//                         <option>Approver 2</option>
//                         <option>Approver 3</option>
//                     </select>
//                 </div>
//             </div>
//         ))}
//     </div>
// );

// export default DroppedItemsArea;







// import React, { useState } from "react";

// const DroppedItemsArea = ({ items }) => {
//   const [reason, setReason] = useState("");
//   const [reasonCode, setReasonCode] = useState("");
//   const [approvedBy, setApprovedBy] = useState("");

//   const handleInsert = async (itemId, itemName) => {
//     try {
//       console.log({ reason, reasonCode, approvedBy, itemId, itemName }); // Debugging
//       const response = await fetch("http://localhost:5000/insert", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           reason,
//           reasonCode,
//           approvedBy,
//           itemId,
//           itemName,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       alert("Item inserted successfully!");
//     } catch (error) {
//       console.error("Error during fetch:", error.message);
//       alert("Failed to insert item: " + error.message);
//     }
//   };

//   return (
//     <div
//       style={{
//         width: "300px",
//         minHeight: "200px",
//         border: "2px solid black",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "flex-start",
//         padding: "40px",
//       }}
//     >
//       <h4>Dropped Items</h4>
//       {items.map((item) => (
//         <div
//           key={item.id}
//           style={{
//             margin: "20px",
//             padding: "20px",
//             backgroundColor: "lightblue",
//             width: "100%",
//             textAlign: "center",
//             borderRadius: "50px",
//             boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <div>{item.name}</div>
//           <div style={{ marginTop: "10px" }}>
//             <select
//               onChange={(e) => setReason(e.target.value)}
//               style={{ marginRight: "5px", borderRadius: "10px", padding: "5px" }}
//             >
//               <option value="">Select Reason</option>
//               <option>Reason 1</option>
//               <option>Reason 2</option>
//               <option>Reason 3</option>
//             </select>
//             <select
//               onChange={(e) => setReasonCode(e.target.value)}
//               style={{ marginRight: "5px", borderRadius: "10px", padding: "5px" }}
//             >
//               <option value="">Select Reason Code</option>
//               <option>Code 1</option>
//               <option>Code 2</option>
//               <option>Code 3</option>
//             </select>
//             <select
//               onChange={(e) => setApprovedBy(e.target.value)}
//               style={{ borderRadius: "10px", padding: "5px" }}
//             >
//               <option value="">Select Approver</option>
//               <option>Approver 1</option>
//               <option>Approver 2</option>
//               <option>Approver 3</option>
//             </select>
//           </div>
//           <button
//             onClick={() => handleInsert(item.id, item.name)}
//             style={{
//               marginTop: "10px",
//               padding: "10px",
//               backgroundColor: "#ffb6c1",
//               border: "none",
//               cursor: "pointer",
//               borderRadius: "5px",
//             }}
//           >
//             Insert
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DroppedItemsArea;


import React, { useState } from "react";
const DroppedItemsArea = ({ items }) => {
  const [reason, setReason] = useState("");
  const [reasonCode, setReasonCode] = useState("");
  const [approvedBy, setApprovedBy] = useState("");

  const handleInsert = async (itemId, itemName) => {
    
    try {
      console.log({ reason, reasonCode, approvedBy, itemId, itemName }); // Debugging
      const response = await fetch("http://localhost:5000/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reason,
          reasonCode,
          approvedBy,
          itemId,
          itemName,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      alert("Item inserted successfully!");
    } catch (error) {
      console.error("Error during fetch:", error.message);
      alert("Failed to insert item: " + error.message);
    }
  };

  return (
    <div
      style={{
        width: "300px",
        minHeight: "200px",
        border: "2px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "30px",
        backgroundColor: "#f0f8ff",
        borderRadius: "20px",
        boxShadow: "0 8px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      <h4 style={{ marginBottom: "20px", color: "#4a90e2" }}>Dropped Items</h4>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            margin: "10px 0",
            padding: "15px",
            background: " linear-gradient(109.6deg, rgb(80, 154, 175) 11.2%, rgb(125, 216, 199) 59.3%, rgb(245, 255, 195) 92.7%)",
            width: "105%",
            textAlign: "center",
            borderRadius: "100px",
            boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out",

          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div style={{ fontSize: "16px", fontWeight: "bold" }}>{item.name}</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              alignItems: "center",
            }}
          >
            <select
              onChange={(e) => setReason(e.target.value)}
              style={{
                borderRadius: "20px",
                padding: "5px 1px",
                margin: "0 5px",
                outline: "none",
                border: "1px solid #ccc",
                backgroundColor: "#ffffff",
              }}
            >
              <option value="">Reason</option>
              <option>Reason 1</option>
              <option>Reason 2</option>
              <option>Reason 3</option>
            </select>
            <select
              onChange={(e) => setReasonCode(e.target.value)}
              style={{
                borderRadius: "20px",
                padding: "5px 0px",
                margin: "0 5px",
                outline: "none",
                border: "1px solid #ccc",
                backgroundColor: "#ffffff",
              }}
            >
              <option value="">Reason Code</option>
              <option>Code 1</option>
              <option>Code 2</option>
              <option>Code 3</option>
            </select>
            <select
              onChange={(e) => setApprovedBy(e.target.value)}
              style={{
                borderRadius: "20px",
                padding: "5px 10px",
                margin: "0 5px",
                outline: "none",
                border: "1px solid #ccc",
                backgroundColor: "#ffffff",
              }}
            >
              <option value="">Approver</option>
              <option>Approver 1</option>
              <option>Approver 2</option>
              <option>Approver 3</option>
            </select>
          </div>
          <button
            onClick={() => handleInsert(item.id, item.name)}
            style={{
              marginTop: "10px",
              padding: "8px 15px",
              backgroundColor: "#4a90e2",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "20px",
              fontWeight: "bold",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#357abd")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#4a90e2")}
          >
            Insert
          </button>
        </div>
      ))}
    </div>
  );
};

export default DroppedItemsArea;
