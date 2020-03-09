import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '393399631124-r7bk7ee4pe3rkj0uh73p0pd9fpl638g7.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get()});
            });
        });
    };

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return(
                <div>I dont know</div>
            );
        }else if(this.state.isSignedIn) {
            return(
                <div>Signed In</div>
            );
        }else {
            return(
                <div>Signed Out</div>
            );
        };
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    };
};

export default GoogleAuth;