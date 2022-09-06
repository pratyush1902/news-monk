import React, { Component } from 'react'
import NewsItem from '../NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps={
        country:'in',
        category:'general'
    } 
    PropTypes={
        country:PropTypes.string,
        category:PropTypes.string
    }   
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7705e13acac4e7482a07f102eb5d005&page=1`
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json()
        this.setState({ articles: parsedData.articles,loading:false})
    }
    previosClicks=async()=>{
        console.log('priv');
 
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7705e13acac4e7482a07f102eb5d005&page=${this.state.page-1}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json()
        // this.setState({ articles: parsedData.articles})
        this.setState({
            page:this.state.page-1,
            articles: parsedData.articles,
            loading:false
        })

    }
    nextsClick= async()=>{
        console.log('next');
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7705e13acac4e7482a07f102eb5d005&page=${this.state.page+1}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json()
        // this.setState({ articles: parsedData.articles})
        this.setState({
            page:this.state.page+1,
            articles: parsedData.articles,
            loading:false
            
        })

    }
    
    render() {
        return (
            <div className='container my-3'>
                <div className="text-center">

                <h1>TrevMonk-News of the Hour</h1>
                </div>
                {this.state.loading &&<Spinner/>}
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} discription={element.description} imgurl={element.urlToImage} newsurl={element.url} />

                        </div>

                    })}

                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previosClicks}>&larr; Previus</button>
                <button type="button" className="btn btn-dark"onClick={this.nextsClick}>Next &rarr;</button>
                </div>

            </div>
            
        )
    }
}

export default News
