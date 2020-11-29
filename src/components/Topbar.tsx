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
        <nav id="topbar">
            <img src={icon} width={30} height={20} alt="no image" />
            <div id="topbar-btns">
                <button className="topbar-btn" onClick={minimize}>➖</button>
                <button className="topbar-btn" onClick={maximize}>⬜</button>
                <button className="topbar-btn" onClick={close}>✖</button>
            </div>
        </nav>
    )
}

export default Topbar