import React from 'react';

import './Post.css';

const post = (props) => (
    <article onClick={props.postGotClicked} className="Post">
        <h5>{props.title}</h5>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;
