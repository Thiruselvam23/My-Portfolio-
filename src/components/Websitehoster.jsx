import React from 'react';
/*
it will get the link and then return the link based wedsite ...  
*/
function Websitehoster(props) {
    const link= props.link;
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <iframe
                src={link}
                width="100%"
                height="100%"
            />
        </div>
    );
}

export default Websitehoster;
