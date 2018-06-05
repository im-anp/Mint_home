import React from 'react';
const Blogitem = (props) =>{
    return(
        <div className="blogBox">
            <div>
                <img style={{width:'260px'}} src={props.blogimage} alt="blog image" />
            </div>
            <div className="b_title">{props.Blogtitle}</div>
            <div className="blog_des">{props.synopsis}</div>
        </div>
    );
}

export default Blogitem;