import React from 'react';
import { connect } from 'react-redux';
import { SignIn, SignOut } from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '393399631124-r7bk7ee4pe3rkj0uh73p0pd9fpl638g7.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    };

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.SignIn();
        }else {
            this.props.SignOut();
        };
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

// helper method for rendering signin status
    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null;
        }else if(this.props.isSignedIn) {
            return(
                <button onClick={this.onSignOutClick} className="ui red google button" >
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }else {
            return(
                <button onClick={this.onSignInClick} className="ui red google button">
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

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps, {SignIn: SignIn, SignOut: SignOut})(GoogleAuth);