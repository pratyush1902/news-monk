import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
    static defaultProps = {
        country: 'in',
        category: 'general'
    }
    PropTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResult:0
        }
    }
    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7705e13acac4e7482a07f102eb5d005&page=${this.state.page }`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
         
        this.setState({
            // page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false,
            totalResult:parsedData.totalResult
        })

    }
    async componentDidMount() {
         this.updateNews();
    }
    
    fetchMoreData = async() => {
        this.setState({page:this.state.page+1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7705e13acac4e7482a07f102eb5d005&page=${this.state.page }`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
         
        this.setState({
            // page: this.state.page + 1,
            articles:this.state.articles.concat (parsedData.articles),
            loading: false,
            totalResult:parsedData.totalResult
        })
         
      };

    render() {
        return (
            <>
                <div className="text-center">

                    <h1>TrevMonk-News of the Hour</h1>
                </div>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!==this.state.totalResult}
                    loader={ <Spinner/>}
                >
                    <div className="container">
                    <div className="row">

                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} discription={element.description} imgurl={element.urlToImage} newsurl={element.url} date={element.publishedAt} source={element.source.name} />

                            </div>

                        })}

                    </div>
                    </div>
                </InfiniteScroll>
                 

            </>

        )
    }
}

export default News
