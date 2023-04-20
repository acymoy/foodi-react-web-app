import React from "react";
import ArticleTile from "./article-tile";
//import articles from './articles.json'

// json import for example fills
import exampleArticles from '../data/example-article.json';

const ArticleComponent = () => {

    const articles = exampleArticles;

    return (
        <div>
            <div className = 'row py-4'>
                <h2 className = 'text-center'>Articles</h2>
            </div>
            <div className='row'>
                {articles.map(x => <ArticleTile key = {x._id} article = {x} />)}
            </div>
        </div>

    )
}

export default ArticleComponent;