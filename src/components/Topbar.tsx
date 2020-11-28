import React from 'react'
import icon from '../assets/images/icon.png'
import { remote } from 'electron'

interface TopbarProps {
}

const Topbar: React.FC<TopbarProps> = (props) => {

    const minimize = () => {
        remote.BrowserWindow.getFocusedWindow().minimize();
    }

    const maximize = () => {
        remote.BrowserWindow.getFocusedWindow().maximize();
    }

    const close = () => {
        remote.BrowserWindow.getFocusedWindow().close();
    }

    return (
        <nav id="topbar" className="navbar navbar-light bg-light">
            <img src={icon} width={30} height={20} alt="" />
            <div id="topbar-btns" className="position-absolute r-0">
                <button className="btn btn-inline" onClick={minimize}>➖</button>
                <button className="btn btn-inline" onClick={maximize}>⬜</button>
                <button className="btn btn-inline" onClick={close}>✖</button>
            </div>
        </nav>
    )
}

export default Topbar