import React, { Component } from 'react'
import NewsItem from '../NewsItem'
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
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResult:0
        }
        document.title=`${this.props.category}-NewsMonk`
    }
    async updateNews() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7705e13acac4e7482a07f102eb5d005&page=${this.state.page}`;
        // this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30);

        let parsedData = await data.json()
        // this.setState({ articles: parsedData.articles})
        this.props.setProgress(70);

        this.setState({
            page: this.state.page +1 ,
            articles: parsedData.articles,
            loading: false,
            totalResult:parsedData.totalResult
        })
        this.props.setProgress(100);


    }
    async componentDidMount() {
        this.updateNews();
    }
    fetchMoreData = async() => {
         this.setState({
            page:this.state.page+1
         })
         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7705e13acac4e7482a07f102eb5d005&page=${this.state.page}`;
          
         let data = await fetch(url);
         let parsedData = await data.json()
         // this.setState({ articles: parsedData.articles})
         this.setState({
             page: this.state.page +1,
             articles: this.state.articles.concat(parsedData.articles),
             loading: false,
             totalResult:parsedData.totalResult
         })
      };
     

    render() {
        return (
            <div className='container my-3'>
                <div className="text-center">

                    <h1>TrevMonk Top {this.props.category} News</h1>
                </div>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResult}
          loader={ <Spinner/>}
        >
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} discription={element.description} imgurl={element.urlToImage} newsurl={element.url} date={element.publishedAt} source={element.source.name} />

                        </div>

                    })}

                </div>
                </InfiniteScroll>
                 

            </div>

        )
    }
}

export default News
