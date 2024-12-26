import React from 'react'
import Head from '../../Components/Pages/Head'


const BlogList = () => {
  return (
    <div>
         <Head />
        
    <div className="page-content">
      {/* Page Blog Grid */}
      <section className="section-blog-list">
        <div className="tf-container">
          {/* Content from your HTML here */}
          <div className="row">
            <div className="col-lg-8">
              <div className="left">
                <div className="box-title">
                  <h2>Blog list</h2>
                  <div className="group-layout">
                    <a href="#" className="btn-layout grid active">
                      {/* SVG Icon */}
                    </a>
                    <a href="#" className="btn-layout list">
                      {/* SVG Icon */}
                    </a>
                  </div>
                </div>
                <div className="wrap-blog-list">
                  <div className="blog-article-item style-row hover-img">
                    <div className="article-thumb image-wrap">
                      <img
                        className="lazyload"
                        data-src="images/blog/blog-list-1.jpg"
                        src="images/blog/blog-list-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="article-content">
                      <div className="time">
                        {/* Additional Content */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add additional columns or rows as needed */}
          </div>
        </div>
      </section>
    </div>
 

    </div>
  )
}

export default BlogList