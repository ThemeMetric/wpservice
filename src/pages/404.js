import { graphql } from "gatsby"
import React, { Component } from 'react'
import Layout from "../layouts/index"
import SEO from "../utils/seo"

class NotFoundPage extends Component {
    
  render() {
    return (
		<Layout wordpressSiteMetadata={this.props.data.wordpressSiteMetadata}>
			<SEO title="Page not found" />
			<section className="hero">
				<div className="hero-body">
				<div className="container">
				<div className="columns">
                <div className="column is-offset-2 is-8">
				       <img src="https://i.postimg.cc/mgXj66R6/success.png" alt="contact"/> 
				       <h1 className="title"> 404 </h1>
						<h2 className="subtitle"> Page not found! </h2>
				</div>
				</div>
				</div>						
				</div>
			</section>
        </Layout>
    )
  }
}

export default NotFoundPage

export const categoryQuery = graphql`
  query wordpressSiteMetadata{

		wordpressSiteMetadata{
			name
			description
			url
			home
		}
    
  }
`