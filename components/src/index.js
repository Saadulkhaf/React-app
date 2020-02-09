import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommnetDetail from './CommentDetail';


const App = () =>{
    return (
        <div className="ui container comments">
            <CommnetDetail author="Alex" timePosted="Today at 5:00pm" content="Nice one" image={faker.image.avatar()} />
            <CommnetDetail author="Jhon" timePosted="Today at 6:30pm" content="Amazing" image={faker.image.avatar()}/>
            <CommnetDetail author="Peter" timePosted="Today at 8:00pm" content="Nailed it" image={faker.image.avatar()}/>

        </div>

    );
};



ReactDOM.render(<App />, document.querySelector('#root'));