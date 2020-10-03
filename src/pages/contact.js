import React, { Component } from 'react'
import Layout from '../layouts/index'
import SEO from "../utils/seo"
import { graphql } from "gatsby"

class About extends Component {
    
  render() {
    return (		
           <Layout wordpressSiteMetadataContact={this.props.data.wordpressSiteMetadata}>
             
             <SEO title="Contact" />
                <section className="hero">
                    <div className="hero-body">                       
                          <div className="container">
                          <div className="section has-text-centered header">
                          <h1 className="title">Contact</h1>
                          <img src="https://i.postimg.cc/j2nv7X6x/contact.png" alt="Physiotherapy Home Service in Dhaka Bangladesh"></img>
                          </div>
                          <div className="section hero-content">
                          <div className="columns">
                          <div className="column is-offset-2 is-8">
                          <div className="post content is-medium">
                          <h2>Get in Touch with Us</h2>
                          <p>If you have any question, or feedback, feel free to contact us!</p>                                           
                            <div className="customForm">
                            <div className="field">
                              <div className="control">
                              <input id="name" name="name" className="input" type="text" placeholder="Name"/>
                              </div>
                            </div>

                            <div className="field">                           
                              <div className="control has-icons-left has-icons-right">
                                <input id="email" name="email" className="input" type="email" placeholder="Email"/>
                              </div>
                            </div>

                            <div className="field">
                              
                              <div className="control">
                                <textarea className="textarea" placeholder="Message"></textarea>
                              </div>
                            </div>
                            <div className="field is-grouped">
                              <div className="control">
                                <button className="button is-link">Submit</button>
                              </div>
                              <div className="control">
                                <button className="button is-link is-light">Cancel</button>
                              </div>
                            </div>
                            </div>                     
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