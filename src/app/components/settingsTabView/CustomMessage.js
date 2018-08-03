import React from 'react';

const CustomMessage = ({changeSettings, userSettings}) => {
    const formStyle = {
        'padding-top': '5px',
        display: 'flex',
        'align-items': 'baseline',
        'justify-content': 'space-between',
    };
    return (
        <div className="cux-toolbar">
            <form style={formStyle} onSubmit={(event) => {
                event.preventDefault();
                userSettings.userMessage = event.target[0].value;
                changeSettings(userSettings);
            }}>
                <label htmlFor="name" className="cux-textbox-label">Set custom message:</label>
                <input className="dialog-search cux-textbox cux-textbox-value w-40" type="text" name="name"/>
                <button className="cux-btn" type="submit">Set message</button>
            </form>
        </div>
    );
};

export default CustomMessage;
