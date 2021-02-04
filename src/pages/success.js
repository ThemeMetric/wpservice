import { graphql } from "gatsby"
import React, { Component } from 'react'
import Layout from '../layouts/index'
import SEO from "../utils/seo"

class About extends Component {
    
  render() {
    return (		
           <Layout wordpressSiteMetadataContact={this.props.data.wordpressSiteMetadata}>
             
             <SEO title="Contact" />
                <section className="hero">
                    <div className="hero-body">                       
                          <div className="container">
                          <div className="section has-text-centered header">
                          <h1 className="title">Success</h1>
                          
                          </div>
                          <div className="section hero-content">
                          <div className="columns">
                          <div className="column is-offset-2 is-8">
                          <div className="post content is-medium">
                          <h2>Thanks! Your message has been sent.</h2>
                          <img src="https://i.postimg.cc/1zZMDZ3w/success.png" alt="contact"></img>                                                      
                          </div>
                          </div>
                          </div>
                          </div>  
                        </div>
                     </div>
                </section>

           </Layout>
       
    )
  }
}
export default About

export const categoryQuery = graphql`
  query wordpressSiteMetadataContact{

		wordpressSiteMetadata{
			name
			description
			url
			home
		}
    
  }
`