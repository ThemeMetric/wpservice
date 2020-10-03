import React, { Component } from 'react'
import Layout from '../layouts/index'
import SEO from "../utils/seo"
import { graphql } from "gatsby"

class About extends Component {
    
  render() {
    return (		
           <Layout wordpressSiteMetadataPrivacy={this.props.data.wordpressSiteMetadata}>
             
             <SEO title="About" />
                <section className="hero">
                    <div className="hero-body">
                        
                        <div className="container">
                            <div className="section has-text-centered header">
                            <h1 className="title">Privacy Policy</h1>
                            <img src="https://i.postimg.cc/5tp4F5pF/about.jpg" alt="Physiotherapy Home Service in Dhaka Bangladesh"></img>
                        </div>
                        <div className="section hero-content">
                        <div className="columns">
                        <div className="column is-offset-2 is-8">
                        <div className="post content is-medium">                       
                        <p>We respect your privacy &amp; will never share your data with any person or organisation. Keep reading to know the details of privacy policy.</p>
                        <p class="text-justify">This Privacy Policy governs the manner in which we&nbsp;collect, use, maintain and disclose information collected from users (each, a “Jhon”) of our&nbsp;website (“infointeriors.com”).</p>
                        <h3>Personal identification information</h3>
                        <p class="text-justify">We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, fill out a form, and in connection with other activities, services, features or resources we make available on our Site.</p>
                        <p class="text-justify">Users may be asked for, as appropriate, name, email address, mailing address, phone number, social security number. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us.</p>
                        <p class="text-justify">Users can always refuse to supply identification information personally, except that it may prevent them from engaging in certain Site related activities.</p>
                        <h3>A Special Note About Children</h3>
                        <p class="text-justify">Children are not eligible to use our services unsupervised, and we ask that children (under the age of 14) do not submit any personal information to us. If you are a minor, you can use this service only in conjunction with permission and guidance from your parents or guardians.</p>
                        <h3>Non-personal identification information</h3>
                        <p class="text-justify">We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Sites, such as the operating system and the Internet service providers utilized and other similar information.</p>
                        <h3>Web browser cookies</h3>
                        <p class="text-justify">Our Site may use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. The user may choose to set their web browser to refuse cookies or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.</p>
                        <h3>How we use collected information</h3>
                        <p class="text-justify">We&nbsp;may collect and use Users personal information for the following purposes:</p>
                        <ul><li>To run and operate our Site</li><li>To improve customer service</li><li>To personalize user experience</li><li>To improve our Site</li><li>We may use feedback you provide to improve our products and services.</li><li>To run a promotion, contest, survey or other Site feature</li><li>To send periodic emails</li></ul>
                        <p class="text-justify">We may use the email address to send User information and updates about their order. It may also be used to respond to their inquiries, questions, and other requests.</p>
                        <h3>How we protect your information</h3>
                        <p class="text-justify">We adopt appropriate data collection, storage and processing practices and security measures to protect against un-authorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>
                        <h3>Sharing your personal information</h3>
                        <p class="text-justify">We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.</p>
                        <h3>Third party websites</h3>
                        <p class="text-justify">Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site.</p>
                        <p class="text-justify">Also, these sites or services, including their content and links, may constantly be changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website’s own terms and policies.</p>
                        <h3>Advertising</h3>
                        <p class="text-justify">Ads appearing on our site may be delivered to Users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile on personal identification information about you or others who use your computer.</p>
                        <p class="text-justify">This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This privacy policy does not cover the use of cookies by any advertisers.</p>
                        <h3>Changes to this privacy policy</h3>
                        <p class="text-justify">We have&nbsp;the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our Site, revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.</p>
                        <p class="text-justify">You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</p>
                        <h3>Your acceptance of these terms</h3>
                        <p class="text-justify">By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>
                        <h3>Contacting us</h3>
                        <p class="text-justify">If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us through our <a href="https://infointeriors.com/contact-us/" target="_blank" rel="dofollow noopener noreferrer">contact</a> page.</p>             
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
  query wordpressSiteMetadataPrivacy{

		wordpressSiteMetadata{
			name
			description
			url
			home
		}
    
  }
`