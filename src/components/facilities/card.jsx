// import React from "react"
// import "../../app.css"

// export default function Card(props) {
//     return (
//         <div
//             className="facilitiesCard"
//             style={{ flexDirection: props.sent.flexDirection }}
//         >
//             {/* Content Section */}
//             <div className="cardContent">
//                 <div className="cardHeader">
//                     <div className="cardIconWrapper">
//                         <img
//                             className="cardVector"
//                             src={"./Images/card/" + props.sent.vector}
//                             alt={props.sent.name + " icon"}
//                         />
//                     </div>
//                     <div className="cardTitleGroup">
//                         <h2 className="cardTitle">{props.sent.name}</h2>
//                         <div className="divider" />
//                     </div>
//                 </div>

//                 <div className="cardBody">
//                     <p className="cardDesc">{props.sent.description}</p>
//                 </div>
//             </div>

//             {/* Image Section */}
//             <div className="cardImageWrapper">
//                 <img
//                     className="cardImg"
//                     src={"./Images/card/" + props.sent.img}
//                     alt={props.sent.name}
//                 />
//                 <div className="cardImageOverlay" />
//             </div>
//         </div>
//     )
// }