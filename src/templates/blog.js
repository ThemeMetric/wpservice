import React, { Component } from 'react'
import Layout from "../layouts/index"
import AllPost from "../components/all-post/index"
import AllPostPagination from "../components/all-post/pagination"
import SEO from "../utils/seo"
import { graphql } from 'gatsby'

class BlogPage extends Component {

  render() {
    
    const allPosts = this.props.data.allWordpressPost;
    const next = this.props.pageContext.next;
    const prev = this.props.pageContext.prev;
    const numberOfPostsPerPages = this.props.pageContext.numberOfPostsPages;

    return (
        <Layout wordpressSiteMetadata={this.props.pageContext.wordpressSiteMetadata}>
        	
          <SEO title="Welcome" />

        	<AllPost data={allPosts.edges} ignorefirst="false"/>

          <AllPostPagination prev={prev} next={next} pageCount={numberOfPostsPerPages}/>

        </Layout>
    )
  }
}

export default BlogPage



export const query = graphql`
  query PostQuery($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: {
        fields: [date]
        order: DESC
      }
      limit: $limit
      skip: $skip
    ){
      edges {
        node{
          id
          wordpress_id
          title
          excerpt
          content
          slug
          date(formatString: "MMMM DD, YYYY")
          categories{
              id
              name
              slug
              link
          }
          spark_media
          spark_user {
            name
            slug
            avatar_urls {
              wordpress_96
            }
          }
        }
      }
    }
  }
`