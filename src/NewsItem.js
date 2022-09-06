import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let{title,discription,imgurl,newsurl}=this.props;
        return (
            <div>
                <div className="card" >
                    <img src={imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{ title}</h5>
                        <p className="card-text">{discription}</p>
                        <a href={newsurl} target="_blank"className="btn btn-primary">Read-More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
