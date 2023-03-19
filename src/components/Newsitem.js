

import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let {title,description,imageurl,newsurl,author,date,source}= this.props;
    return (
    <><div className="container my-3" >
 <div className="card">
<div style={{display:'flex', justifyContent:'flex-end',position:'absolute',right:'0'}}>
<span className='badge rounded-pill bg-danger' >{source}</span>
</div>
  <img src={imageurl?imageurl:"https://www.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{title}  </h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small>By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
    <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Ream More</a>
  </div>
</div>
    </div>
     
    </>
    )
  }
}




