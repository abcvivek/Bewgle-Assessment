import React from 'react';
import TagsStyles from './Tags.module.css';

const tags = (props) => {
    return (
        <div>
            <h4>Tags <i className="fas fa-tags"></i></h4>
            {
                props.tags.map((el) => {
                    return <button className={TagsStyles.Tags} key={el}>{el}</button>
                })
            }
        </div>
    );
}

export default tags;