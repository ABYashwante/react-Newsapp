import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types"; 

const News =(props) => {
  const [articles, setArticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  


  const updateNews = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3aaeb440d75442cfbf8cf7cb0cc0fd5d&page=${page}&pageSize=20`;
    setloading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles)
    settotalResults(parseData.totalResults)
    setloading(false)
      
  }

  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsMonkey`;
    updateNews();
  },[])
  
  const handleNextClick = async () => {
    setpage(page+1)
    updateNews()
  };
  
  const handlePreviousClick = async () => {
    setpage(page-1)
    updateNews()
  };

  
    return ( 
      <>
        <h1 className="text-center" style={{margin:'35px 0px', marginTop: '90px'}}> NewsMonkey - Top {capitalize(props.category)} Headlines </h1>

        {loading && <Spinner />}

        <div className="container my-3">
          
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title:""}
                          description={element.description ? element.description: ""}
                          imageUrl={element.urlToImage}
                          newsUrl={element.url}
                          author={element.author}
                          date={element.publishedAt} 
                ></NewsItem>
              </div> 
            })}
          </div>    

          <div className="container d-flex justify-content-between my-3">
            <button disabled={page <= 1} type="button" className=" btn btn-dark " onClick={handlePreviousClick}>&larr;Previous</button>
            <button disabled={page + 1 > Math.ceil(totalResults/20)} type="button" className=" btn btn-dark " onClick={handleNextClick} > Next&rarr; </button>
          </div> 

        </div>  
     </> 
    )
}

News.defaultProps = {
  country: "in",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
