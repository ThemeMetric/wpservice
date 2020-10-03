import React, { Component } from 'react'

export default class PostAuthor extends Component {
    
    render() {
      let data = this.props.data;
      
      return (
        
          data === undefined ? null : 
          <section className="hero is-light" style={{
            margin: "25px auto"
          }}>
            <div className="hero-body">
              <div className="container-fluid"> 
                <div className="media">                 
                <div className="media-left">
                  <figure className="image is-96x96 image-objectfit-contain">
                    <img className="is-rounded" width="96" height="96" 
                      src={ data.avatar_urls.wordpress_96 } 
                      alt={ data.name }
                    />
                  </figure>
                </div>
                <div className="media-content">
                <h1 className="title">{data.name}</h1>
                <h2 className="subtitle">{data.description}</h2>
                <p>Passionate blogger. Marketer, web designer & developer Besides writing for this blog, I spend my time crafting research-based contents for HuffingtonPost, Lifehacker & Forbes!</p>
                </div>                  
                </div>                   
              </div>
            </div>
          </section>


        
      )
    }
}