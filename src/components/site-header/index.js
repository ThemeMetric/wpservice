import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import CategoryMenu from "../category-menu/index"
import Helmet from "react-helmet"

export default class Header extends Component {
    toggleDropdownMenu = () => {
      document.getElementById('MainsiteNav').classList.toggle('is-active');
    }
    render() {
      let wordpressSiteMetadata = this.props.wordpressSiteMetadata;

      return (
        <StaticQuery
          query={graphql`
          query sparkDataFromSite {
              sparkData {
                logo 
                favicon
              } 
            }
          `}
          render={data => {
            const { sparkData } = data;

            return <nav className="navbar is-transparent has-shadow is-spaced is-fixed-top" role="navigation">
              <Helmet
                link={[
                  {
                    "rel": "icon",
                    "type": "image/png",
                    "href": sparkData.favicon
                  }
                ]}
              />
              <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                  {
                    sparkData.logo ? <img src={sparkData.logo} alt="" width="112" height="28" /> :
                      wordpressSiteMetadata.name
                  }
                </Link>
                <span role="button" className="navbar-burger burger" data-target="MainsiteNav" onClick={this.toggleDropdownMenu}>
                  <span /><span /><span />
                </span>
              </div>
              <div id="MainsiteNav" className="navbar-menu">
                <div className="navbar-start">
                  <CategoryMenu slug={this.props.slug} />
                </div>
                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <p className="control">
                        <a className="button is-outlined" href="/contact" target="_self" rel="noopener noreferrer">
                          <span>Contact</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <form role="search" method="get" action="/">
                <div className="panel-block">
                    <p className="control">
                      <input className="input" type="text" name="s" placeholder="Search"/>
                    </p>
                </div>
                </form>
              </div>
            </nav>
          }}
          />
      );
    }
}