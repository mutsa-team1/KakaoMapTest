import React from "react";
function ComplainPostit({posts}){
    return(
        <div
        style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginTop: "8px",
          }}>
            {posts.map((text,index)=>(
               <div
               key={index}
               style={{
                 width: "106px",
                 height: "62px",
                 background: "rgba(224, 224, 224, 1)",
                 borderRadius: "12px",
                 padding: "10px",
                 fontSize: "14px",
                 color: "black",
                 display: "flex",
                 alignItems: "center",
                 justifyContent: "center",
                 textAlign: "center"
               }}
             >
               {text}
             </div> 
            ))}
        </div>
    );
}
export default ComplainPostit;