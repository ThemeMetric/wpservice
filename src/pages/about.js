import React, { Component } from 'react'
import Layout from '../layouts/index'
import SEO from "../utils/seo"
import { graphql } from "gatsby"

class About extends Component {
    
  render() {
    return (		
           <Layout wordpressSiteMetadataAbout={this.props.data.wordpressSiteMetadata}>
             
             <SEO title="About" />
                <section className="hero">
                    <div className="hero-body">
                        
                        <div className="container">
                            <div className="section has-text-centered header">
                            <h1 className="title">About Infointeriors</h1>
                            <img src="https://i.postimg.cc/PxFFD018/about.png" alt="Physiotherapy Home Service in Dhaka Bangladesh"></img>
                        </div>
                        <div className="section hero-content">
                        <div className="columns">
                        <div className="column is-offset-2 is-8">
                        <div className="post content is-medium">
                        <h1>Who We Are?</h1>
                        <p>infointeriors is committed to providing you with in-depth and unbiased opinions on all about folding knife related. Our primary focus is anything with folding knives, fixed blades, machetes, multi-tools and even kitchen knives. Through our team of experts, we provide reviews, education, and advice to assist consumers in making informed choices. We are a review website committed to providing comprehensive and trusted reviews for products that matter to consumers. We do the research to help you save time and money.</p>
                        <h2>Welcome to our site!</h2>
                        <p>We are review and analysis website, helping our visitors buying the best product!</p>
                        <p>We purchase products from the marketplace, test them in our lab, interview consumers &amp; discuss with experts. Combining all these data together, we present you a detailed comparison and recommendation on which one you should buy!</p>
                        <p>Everything we choose is an award-winner, and we don’t focus on giving you with anything but the things we love. Consider them billboards for electronics and everyday things. The point is to make it easier for you to buy some great gear quickly and get on with your life.</p>
                        <p>The choices we’ve made here with our team took weeks or months of research and testing, including interviews and data from the best editorial and user sources around, and the help of engineers, scientists, and experts.</p>
                        <p>Most products we choose here isn’t top-of-the-line models that are loaded up with junk features or overpriced; most of the ones we’ve picked are of the “great enough” variety because this is generally where our needs and the right prices smash into each other.</p>
                        <p>In the end, all our work ends up in the same place: These are the same products we’d recommend to friends and family, and these are the same products we’d choose for ourselves.</p>
                        <h3>Frequently Asked Questions (FAQs)</h3>
                        <strong class="schema-faq-question">Do you accept advertisement from company to recommend them?</strong>
                        <p class="schema-faq-answer">We recommend products on our site based on our research. We never accept payment or product from manufacturers to rank them on our article.</p>
                        <strong class="schema-faq-question">Do you make money if I buy from your site?</strong>
                        <p class="schema-faq-answer">Some of the links on our site are affiliate links, means when you buy any product through our affiliate link, we make a small amount of commission (without charging you anything more than the original product price)</p>
                        <strong class="schema-faq-question">How can I help you?</strong>
                        <p class="schema-faq-answer">If you are an expert &amp; available for freelance writing, you can feel free to send us your expert guide article. Contact us for further discussion <a rel="noreferrer noopener" href="https://infointeriors.com/contact-us" target="_blank">more info</a>.</p>
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
  query wordpressSiteMetadataAbout{

		wordpressSiteMetadata{
			name
			description
			url
			home
		}
    
  }
`