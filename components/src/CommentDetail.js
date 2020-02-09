import React from 'react';
import faker from 'faker';


const CommentDetail=(props) => {
    const {timePosted, author, content="good job", image} = props;
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={image}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {author}
                    </a>
                    <div className="metadata">
                        <span className="date">{timePosted}</span>
                    </div>
                    <div className="text">
                        {content}
                    </div>
                </div>
            </div>

    );
};


export default CommentDetail;