import React from "react";

const ArticleTile = (articleObject) => {
    const article = articleObject.article;
    return (
        <div className = 'col-4 p-2 pb-4'>
            <div className = 'border'>
                <img src={article.thumbnail} alt='Article Image' 
                className = 'img-fluid object-cover' style = {{}}/>
            </div>
            <div className = 'pt-2'>
                <h4 className = 'mt-0'>{article.title}</h4>
                <h5 className = 'mb-0'>by {article.author}</h5>
            </div>
        </div>
    )
}

export default ArticleTile;