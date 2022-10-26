// import axios from 'axios';
import { useState, useEffect } from "react";
import moment from "moment";

export default function Blog() {
  const fullStack = {
    float: "right",
    color: "#d8bfd4",
    fontWeight: "bold",
  };

  const milk = {
    fontFamily: "lemonmilk",
    color: "#31485c",
  };
  const blueGray = {
    color: "#31485c",
  };
  const button = {
    color: "#31485c",
    border: "none",
  };
  const [bloglist, updateBlogList] = useState([]);
  const [currentBlog, getBlogData] = useState([]);
  const [index, setIndex] = useState(0);
  const [totalBlogs, setTotalBlogs] = useState(0);
  useEffect(() => {
    getBlogList();
  }, []);

  const getBlogList = async () => {
    const bloglist = await fetch("https://www.lancebailey.tech/api/blogs/")
      .then((response) => response.json())
      .then((responseData) => {
        return responseData;
      });
    updateBlogList(bloglist);
    getBlogData(bloglist[bloglist.length - 1]);
    setIndex(bloglist.length - 1);
    setTotalBlogs(bloglist.length);
  };

  const goBack = async () => {
    const newValue = index - 1;
    if (newValue >= 0) {
      getBlogData(bloglist[newValue]);
      setIndex(newValue);
    }
  };
  const goForward = async () => {
    const newValue = index + 1;
    if (newValue <= totalBlogs - 1) {
      getBlogData(bloglist[newValue]);
      setIndex(newValue);
    }
  };

  return (
    <>
      <div data-aos="fade-right" data-aos-duration="1500" className="header">
        <h1 style={blueGray}>BLOG</h1>
        <p style={fullStack}> where i write about tech and life </p>
      </div>

      <div className="blog">
        <button id="forward" className={index === totalBlogs - 1 ? 'hidden' : ''} style={button} onClick={goForward}>
          Next
        </button>
        <button id="backward" className={index === 0 ? 'hidden' : ''} style={button} onClick={goBack}>
          Previous
        </button>
        <div className="blogContent">
          <h2 style={milk}>{currentBlog.title}</h2>
          <h3 style={milk}>{moment(currentBlog.date).format("MM-DD-YYYY")}</h3>
          <div
            style={blueGray}
            dangerouslySetInnerHTML={{ __html: currentBlog.blog }}
          ></div>
        </div>
      </div>
    </>
  );
}
