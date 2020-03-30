import React from 'react';

class App extends React.Component {
    state = { resources: 'posts'}

    renderhelper = () => {
        return (
            this.setState({resources: 'what'})
        )
    }

    render() {
        return(
            <div>
                <div>
                    <button onClick={()=> this.setState({resources: 'posts'})}>Posts</button>
                    <button onClick={()=> this.setState({resources: 'todos'})}>Todos</button>
                </div>
                {this.state.resources}
            </div>
        );
    };
}

export default App;