import React from 'react';
import "../../styles/MainWorkerSheet/Panel.css"
import "../../styles/MainWorkerSheet/BlocksTable.css"

const GreedPanel = (props) => {
    return (
        <div className="Panel">
            <label>{props.tittle}</label>
            <div className="PanelFilling">
                {props.posts.map(month =>
                    <div className="Record">
                        <div className="BlocksTable_Heading">
                            <label>
                                {month.name}
                            </label>
                            {month.total !== "" ? (
                                <label>
                                    Итого: {month.total}
                                </label>
                            ) : null}
                        </div>
                        <div className="BlocksTable_Filling">
                            {month.date.map(post =>
                                <a href={post.link} className={post.color}>{post.date}</a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default GreedPanel;