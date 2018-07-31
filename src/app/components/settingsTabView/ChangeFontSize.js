import React from 'react';

const changeFontSize = ({changeSettings, userSettings}) => {
    return (
        <div className="cux-toolbar tc">
            <form onSubmit={(event) => {
                event.preventDefault();
                userSettings.userMessageSize = event.target[0].value;
                changeSettings(userSettings);
            }}>
                <div className="cux-drop-down-header">
                    <label htmlFor="date" className="cux-textbox-label">Font size:</label>
                    <select id="date" className="cux-drop-down-toggle">
                        <option value="0.5vw" className="cux-drop-down-item">Small</option>
                        <option value="1.0vw" className="cux-drop-down-item">Medium</option>
                        <option value="1.5vw" className="cux-drop-down-item">Big</option>
                    </select>
                    <button style={{float: 'right'}} className="cux-btn" type="submit">Set Size</button>
                </div>
            </form>
        </div>
    );
};

export default changeFontSize;
