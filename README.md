<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://shweb.me">
    <img alt="SHWEB" src="./src/images/logo.png" width="200" />
  </a>
</p>

<h1 align="center">Gatsby Template for  - WPService</h1>

#### Dependencies

\_Before start development or deploy make sure our WordPress API plugin is installed inside your WordPress installation

#### Minimum Requirement to build

1. At least one blog post with featured Image in your WordPress site
2. One category and that category related post

#### Install gatsby CLI

To install gatsby CLI globaly.

```infointeriors
npm install -g gatsby-cli
```

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site.

    ```infointeriors
    # create a new Gatsby site using theme callisto
    gatsby new infointeriors https://github.com/ThemeMetric/wpservice.git
    ```

2.  **Create `.env` file.**

    Navigate into your new site’s directory and create a new `.env` file.

    ```wpservice
    cd wpservice/
    touch env/.env.wpservice
    ```

    Open `.env.mysitename` file with a text editor and add below config inside `.env.mysitename` file.

    ```sh
    baseUrl = "yoursite.com" # without http/https
    protocol = "https"
    disqusShortname = "wpservice"
    GATSBY_BUILD_DIR = "wpservice"
    ```

3.  **Start developing.**

    To start development process run below command from your terminal.

    ```wpservice
    gatsby develop wpservice
    or
    npm start wpservice
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_.
    This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._
    <br>

5)  **Build Process.**

    To build your site run bellow command from your terminal.

    ```wpservice
    npm run clean
    gatsby build wpservice
    ```

<!-- AUTO-GENERATED-CONTENT:END -->
