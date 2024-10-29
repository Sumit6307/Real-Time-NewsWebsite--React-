import React, { Component } from "react";
import { Spinner } from "./spinner";
import PropTypes from 'prop-types'
import Content from "./Content";

export class Show extends Component {
 
    static defaultProps = {
         country : 'us',
         pageSize : 8,
         category : 'general'
    }

    static propTypes  = {
           name : PropTypes.string,
           pageSize : PropTypes.number,
         category : PropTypes.string

    }


   capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
   }

    
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            loading: false,
            page: 1



        }
        document.title =  `${this.capitalizeFirstLetter(this.props.category)} -> Gravity News`;
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a91fd5c998d45bbadb1410829589baf&pageSize=${this.props.pageSize}`
        this.setState({loading:true});

        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({ articles: parsedData.articles , totalResults: parsedData.totalResults,loading:false })
    }

    handleprevclick = async () => {
         console.log("prev");  
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a91fd5c998d45bbadb1410829589baf&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`

          this.setState({loading:true});

        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false

        })

    }

    hanldlenextclick = async () => {
        console.log("Next");
        if(!(this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize))) {

         let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a91fd5c998d45bbadb1410829589baf&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`

           this.setState({loading:true});

         let data = await fetch(url);
         let parsedData = await data.json();
         console.log(parsedData);
 
         this.setState({
             page: this.state.page + 1,
             articles: parsedData.articles,
             loading:false
         })
 
        
                    }
                }
    render() {
    
        return (

            <>
                 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
                 <div>
                    {  this.state.loading && <Spinner/>}
                 </div>
                <div className="flexing" >
                    { !this.state.loading  && this.state.articles.map((element) => {
                        return <div key={element.url}  >
                            <Content title={element.title ? element.title.slice(0, 60) + "....-" : ""} description={element.description ? element.description.slice(0, 120) : ""} imageurl={!element.urlToImage ? "https://s.yimg.com/ny/api/res/1.2/EYaeyIMTV96aAqIw5QYF6A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-08/916d9ce0-69e2-11ef-bdfd-cb26a6a25b79" : element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                        </div>

                    })}
                </div>

                <div className="container" >
                    <button   disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick} > &larr;  Previous</button>
                    <button disabled={this.state.page+1>Math.ceil(this.totalResults/this.props.pageSize)}  id="next-btn" type="button" className="btn btn-dark m-10" onClick={this.hanldlenextclick}  >Next &rarr; </button>
                </div>
            </>


        )

    }
}

export default Show 