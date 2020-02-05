// Higher Order Component
// A component that renders another component
// The goal is to reuse code

// TO do that, we do:
// - Render hijacking
// - Prop Manipulation
// - Abstarct State

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

// require authentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated 
                    ? ( <WrappedComponent {...props} /> )
                    : ( <p>Please login to view</p> )
            }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated = {true} isAdmin={true} info="there are the details" />,
                         document.getElementById("app"));