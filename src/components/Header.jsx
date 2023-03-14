import React from "react";
import logo from "../assets/logo192.png"

export function Header() {
    return (
        <header className="Header">
            <img className="Header-logo"src={logo} alt=''></img>
            <h2 className="Header-title">Hello World</h2>
            <h4 className="Header-side-title">React Course - Project 3</h4>
        </header>
    )
}