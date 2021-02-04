import { graphql } from "gatsby"
import React, { Component } from 'react'
import Layout from '../layouts/index'
import SEO from "../utils/seo"

class About extends Component {
    
  render() {
    return (		
           <Layout wordpressSiteMetadataSuccess={this.props.data.wordpressSiteMetadata}>
             
             <SEO title="Success" />
                <section className="heros">
                    <div className="hero-body">                       
                          <div className="container">
                          <div className="section hero-content">
                          <div className="columns">
                          <div className="column is-offset-2 is-8">
                          <div className="post content is-medium has-text-centered">
                          <h2>Thanks! Your message has been sent.</h2>
                          <img src="https://i.postimg.cc/mgXj66R6/success.png" alt="contact"/>
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
  query wordpressSiteMetadataSuccess{

		wordpressSiteMetadata{
			name
			description
			url
			home
		}
    
  }
`