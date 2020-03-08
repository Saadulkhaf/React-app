import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '393399631124-r7bk7ee4pe3rkj0uh73p0pd9fpl638g7.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return (
            <div>Google Auth</div>
        );
    };
};

export default GoogleAuth;