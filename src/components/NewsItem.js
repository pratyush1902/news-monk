import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, discription, imgurl, newsurl, date, source } = this.props;
        return (
            <div>
                <div className="card" >
                    <span class="position-absolute top-0   translate-middle badge rounded-pill bg-danger"style={{left:'90%',zIndex:1}}>
                        {source}

                    </span>
                    <img src={imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}
                        </h5>
                        <p className="card-text">{discription}</p>
                        <p className="card-text"><small className="text-muted">{new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} rel="noreferrer"target="_blank" className="btn btn-primary">Read-More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
