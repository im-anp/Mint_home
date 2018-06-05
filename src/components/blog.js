import React from 'react';
import {Col, Row} from 'react-materialize';
import Blogitem from './blogItem';

const Blog = (props) => {
    return(
        <div className="blog_section">
            <h1>Blogs</h1>
            <Row>
                <Col m={2} s={12}></Col>
                <Col m={8} s={12}>
                    <Col m={4} s={12}>
                        <Blogitem blogimage={require("../image/poker_blog.png")} Blogtitle = "10 best trick to win poker while you are Loosing" synopsis= "lorem ipsem irem lorem ipsem irem lorem ipsem irem lorem ipsem irem..." />
                    </Col>
                    <Col m={4} s={12}>
                        <Blogitem blogimage={require("../image/road_blog.png")} Blogtitle = "10 best trick to win poker while you are Loosing" synopsis= "lorem ipsem irem lorem ipsem irem lorem ipsem irem lorem ipsem irem..." />
                    </Col>
                    <Col m={4} s={12}>
                        <Blogitem blogimage={require("../image/magic_blog.png")} Blogtitle = "10 best trick to win poker while you are Loosing" synopsis= "lorem ipsem irem lorem ipsem irem lorem ipsem irem lorem ipsem irem..." />
                    </Col>
                </Col>
                <Col m={2} s={12}></Col>
            </Row>
        </div>
    );
}

export default Blog;