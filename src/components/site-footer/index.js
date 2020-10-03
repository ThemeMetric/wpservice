import React, { Component } from 'react'
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
	PinterestIcon,
} from 'react-share'
  
export default class Footer extends Component {
    
    render() {
      const {siteName, facebook, twitter, linkedin, pinterest} = this.props;
      return (
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
             @ Copyright <strong>{siteName ? siteName : "Infointeriors"}</strong>. 
              
            </p>
          </div>

          <div className="has-text-centered is-flex is-justified-center">
            <a rel="noopener noreferrer" href="/about" className="p-0-10"> About </a>
            <a rel="noopener noreferrer" href="/privacy" className="p-0-10"> Privacy Policy </a>
            <a rel="noopener noreferrer" href="/contact" className="p-0-10"> Contact </a>
          </div>
          <br/>
          <div className="has-text-centered is-flex is-justified-center">
            <a rel="noopener noreferrer" href={facebook ? facebook : "https://facebook.com/infointeriors"} className="p-0-10" target="_blank" > <FacebookIcon size={32} round={false} borderRadius={5}/> </a>
            <a rel="noopener noreferrer" href={twitter ? twitter : "https://twitter.com/infointeriors"} className="p-0-10" target="_blank" > <TwitterIcon size={32} round={false} borderRadius={5}/> </a>
            <a rel="noopener noreferrer" href={linkedin ? linkedin : "https://linkedin.com/infointeriors"} className="p-0-10" target="_blank" > <LinkedinIcon size={32} round={false} borderRadius={5}/> </a>
            <a rel="noopener noreferrer" href={pinterest ? pinterest : "https://pinterest.com/infointeriors"} className="p-0-10" target="_blank" > <PinterestIcon size={32} round={false} borderRadius={5}/> </a>
          </div>
        </footer>
      )
    }
}