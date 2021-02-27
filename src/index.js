import React from "react";
import ReactDOM from "react-dom";

const blockImg = React.createElement(
    "img", 
    {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIH6F72cFWT2v_sIYFTbLXIZE0wOmIh54d4g&usqp=CAU",
        alt: "sorry, img is loading"
    })

const blockH1 = React.createElement(
    "h1",{},"text",
)
const blockDiv = React.createElement(
    "div",
    {
        children: [blockImg, blockH1],
    }
);

ReactDOM.render(blockDiv, document.getElementById("root"));