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
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    };

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get()});
    }

// helper method for rendering signin status
    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return null;
        }else if(this.state.isSignedIn) {
            return(
                <button className="ui red google button" >
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }else {
            return(
                <button className="ui red google button">
                    <i className="google icon"/>
                    Sign In
                </button>
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