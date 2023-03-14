import React, { Component } from "react";
import Students from "./users";
import Budget from "./Budget";
export const Root = () => {
    return (
        <div>
            <Students />
            <Budget />
            <a style={{marginLeft:'20px',paddingBottom:'20px'}} href="https://github.com/Alisher2103">Github link</a>
        </div>
    )
}

