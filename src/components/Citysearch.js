import React from "react";

function Citysearch(props) {
    return (
        <div className="citySearch">
            <form onSubmit={props.ignoreSubmit} className="from-inline">
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    className="form-control"
                    type="text"
                    placeholder="Filter by City"
                    />
            </form>
        </div>
    )
}

export default Citysearch;