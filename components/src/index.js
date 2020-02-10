import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommnetDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';



const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommnetDetail 
                    author="Alex" 
                    timePosted="Today at 5:00pm" 
                    content="Nice one" 
                    image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommnetDetail 
                    author="Jhon" 
                    timePosted="Today at 6:30pm" 
                    content="Amazing" 
                    image={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommnetDetail 
                    author="Peter" 
                    timePosted="Today at 8:00pm" 
                    content="Nailed it" 
                    image={faker.image.avatar()}/>
            </ApprovalCard>

        </div>

    );
};



ReactDOM.render(<App />, document.querySelector('#root'));