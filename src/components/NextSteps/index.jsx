    import React from 'react';
    import { Container, Row, Col } from 'react-bootstrap';
    import './style.scss'; 
    import { FaPen } from "react-icons/fa";


    const NextSteps = () => {
    return (
        <section id="next-steps">
        <h1>Now that you’re up and running, here are a few things you should know.</h1>
        <Container>
            <Row className="next-steps wrapper">
            <Col className="jekyll text-center" md={4}>
                <a className="hero-octicon" href="https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll">
                <span className="mega-octicon octicon-pencil">
                    <FaPen/>
                </span>
                </a>
                <h4><a href="https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll">Blogging with Jekyll</a></h4>
                <p className="text">Using <a href="https://jekyllrb.com">Jekyll</a>, you can blog using beautiful Markdown syntax, and without having to deal with any databases. <a href="https://jekyllrb.com/docs/">Learn how to set up Jekyll</a>.</p>
            </Col>
            <Col className="custom-urls text-center" md={4}>
                <a className="hero-octicon" href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site">
                <span className="mega-octicon octicon-link"></span>
                </a>
                <h4><a href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site">Custom URLs</a></h4>
                <p className="text">Want to use your own custom domain for a GitHub Pages site? Just create a file named CNAME  and include your URL. 
                    <a href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site">Read more</a>.</p>
            </Col>
            <Col className="guides text-center" md={4}>
                <a className="hero-octicon" href="https://docs.github.com/pages">
                <span className="mega-octicon octicon-book"></span>
                </a>
                <h4><a href="https://docs.github.com/pages">Guides</a></h4>
                <p className="text">Learn how to create custom 404 pages, use submodules, and <a href="https://docs.github.com/pages">learn more about GitHub Pages</a>.</p>
            </Col>
            </Row>
        </Container>
        </section>
    );
    };

    export default NextSteps;
