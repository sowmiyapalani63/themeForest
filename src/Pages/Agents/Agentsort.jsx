import React from 'react'
import agent1 from '../../Assests/images/section/agent-item-1.jpg'
import agent2 from '../../Assests/images/section/agent-item-2.jpg'
import agent3 from '../../Assests/images/section/agent-item-3.jpg'
import agent4 from '../../Assests/images/section/agent-item-4.jpg'
import agent5 from '../../Assests/images/section/agent-item-5.jpg'
import agent6 from '../../Assests/images/section/agent-item-6.jpg'
import agent7 from '../../Assests/images/section/agent-item-7.jpg'
import agent8 from '../../Assests/images/section/agent-item-8.jpg'
import agent9 from '../../Assests/images/section/agent-item-9.jpg'
import agent10 from '../../Assests/images/section/agent-item-10.jpg'
import agent11 from '../../Assests/images/section/agent-item-11.jpg'
import agent12 from '../../Assests/images/section/agent-item-12.jpg'




const Agentsort = () => {
  return (
    <section class="section-agent ">
    <div class="tf-container">
        <div class="row">
            <div class="box-title style-2 mb-48">
                <h2>Agents</h2>
                <div class="wrap-sort">
                    <form>
                        <fieldset>
                            <input class="" type="text" placeholder="Agent name" name="name" tabindex="2"
                                aria-required="true" />
                        </fieldset>
                    </form>
                    <div class="nice-select" tabindex="0">
                        <span class="current ">All agency</span>
                        <ul class="list">
                            <li data-value="" class="option selected focus">All agency</li>
                            <li data-value="floating" class="option">Floating baths</li>
                            <li data-value="massage" class="option">Massage baths</li>
                            <li data-value="floor-standing" class="option">Floor-standing bath</li>
                            <li data-value="built-in" class="option">Built-in baths</li>
                        </ul>
                    </div>
                    <div class="nice-select" tabindex="0">
                        <span class="current">All location</span>
                        <ul class="list">
                            <li data-value="" class="option selected focus">All location</li>
                            <li data-value="floating" class="option">Floating baths</li>
                            <li data-value="massage" class="option">Massage baths</li>
                            <li data-value="floor-standing" class="option">Floor-standing bath</li>
                            <li data-value="built-in" class="option">Built-in baths</li>
                        </ul>
                    </div>
                    <div class="nice-select select-sort style-2 " tabindex="0"><span class="current">Sort by
                            (Default)</span>
                        <ul class="list">
                            <li data-value="default" class="option selected">Sort by (Default)</li>
                            <li data-value="new" class="option">Newest</li>
                            <li data-value="old" class="option">Oldest</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class=" tf-grid-layout-2 lg-col-4 md-col-3 sm-col-2">
                <div class="agent-item hover-img ">
                    <div class="image-wrap">
                        <a href="agents-details.html">
                            <img class="lazyload" data-src={agent1}
                                src={agent1} alt="" />
                        </a>
                        <ul class="tf-social style-3">
                            <li><a href="#"><i class="icon-fb"></i></a></li>
                            <li><a href="#"><i class="icon-X"></i></a></li>
                            <li><a href="#"><i class="icon-linked"></i></a></li>
                            <li><a href="#"><i class="icon-ins"></i></a></li>
                        </ul>
                    </div>
                    <div class="content">
                        <div class="author">
                            <h5 class="name lh-30"><a href="agents-details.html">Leslie Alexander</a></h5>
                            <p class="text-2 lh-18">Sale agent</p>
                        </div>
                        <div class="wrap-btn-icon">
                            <a href="#" class="btn-icon"><i class="icon-phone-3"></i></a>
                            <a href="#" class="btn-icon"><i class="icon-letter"></i></a>
                        </div>
                    </div>
                </div>
                <div class="agent-item hover-img">
                    <div class="image-wrap">
                        <a href="agents-details.html">
                            <img class="lazyload" data-src={agent2}
                                src={agent2} alt="" />
                        </a>
                        <ul class="tf-social style-3">
                            <li><a href="#"><i class="icon-fb"></i></a></li>
                            <li><a href="#"><i class="icon-X"></i></a></li>
                            <li><a href="#"><i class="icon-linked"></i></a></li>
                            <li><a href="#"><i class="icon-ins"></i></a></li>
                        </ul>
                    </div>
                    <div class="content">
                        <div class="author">
                            <h5 class="name lh-30"><a href="agents-details.html">Leslie Alexander</a></h5>
                            <p class="text-2 lh-18">Sale agent</p>
                        </div>
                        <div class="wrap-btn-icon">
                            <a href="#" class="btn-icon"><i class="icon-phone-3"></i></a>
                            <a href="#" class="btn-icon"><i class="icon-letter"></i></a>
                        </div>
                    </div>
                </div>
                <div class="agent-item hover-img">
                    <div class="image-wrap">
                        <a href="agents-details.html">
                            <img class="lazyload" data-src={agent3}
                                src={agent3} alt="" />
                        </a>
                        <ul class="tf-social style-3">
                            <li><a href="#"><i class="icon-fb"></i></a></li>
                            <li><a href="#"><i class="icon-X"></i></a></li>
                            <li><a href="#"><i class="icon-linked"></i></a></li>
                            <li><a href="#"><i class="icon-ins"></i></a></li>
                        </ul>
                    </div>
                    <div class="content">
                        <div class="author">
                            <h5 class="name lh-30"><a href="agents-details.html">Leslie Alexander</a></h5>
                            <p class="text-2 lh-18">Sale agent</p>
                        </div>
                        <div class="wrap-btn-icon">
                            <a href="#" class="btn-icon"><i class="icon-phone-3"></i></a>
                            <a href="#" class="btn-icon"><i class="icon-letter"></i></a>
                        </div>
                    </div>
                </div>
                <div class="agent-item hover-img">
                    <div class="image-wrap">
                        <a href="agents-details.html">
                            <img class="lazyload" data-src={agent4}
                                src={agent4} alt="" />
                        </a>
                        <ul class="tf-social style-3">
                            <li><a href="#"><i class="icon-fb"></i></a></li>
                            <li><a href="#"><i class="icon-X"></i></a></li>
                            <li><a href="#"><i class="icon-linked"></i></a></li>
                            <li><a href="#"><i class="icon-ins"></i></a></li>
                        </ul>
                    </div>
                    <div class="content">
                        <div class="author">
                            <h5 class="name lh-30"><a href="agents-details.html">Leslie Alexander</a></h5>
                            <p class="text-2 lh-18">Sale agent</p>
                        </div>
                        <div class="wrap-btn-icon">
                            <a href="#" class="btn-icon"><i class="icon-phone-3"></i></a>
                            <a href="#" class="btn-icon"><i class="icon-letter"></i></a>
                        </div>
                    </div>
                </div>
                <div class="agent-item hover-img ">
                    <div class="image-wrap">
                        <a href="agents-details.html">
                            <img class="lazyload" data-src={agent5}
                                src={agent5} alt="" />
                        </a>
                        <ul class="tf-social style-3">
                            <li><a href="#"><i class="icon-fb"></i></a></li>
                            <li><a href="#"><i class="icon-X"></i></a></li>
                            <li><a href="#"><i class="icon-linked"></i></a></li>
                            <li><a href="#"><i class="icon-ins"></i></a></li>
                        </ul>
                    </div>
                    <div class="content">
                        <div class="author">
                            <h5 class="name lh-30"><a href="agents-details.html">Leslie Alexander</a></h5>
                            <p class="text-2 lh-18">Sale agent</p>
                        </div>
                        <div class="wrap-btn-icon">
                            <a href="#" class="btn-icon"><i class="icon-phone-3"></i></a>
                            <a href="#" class="btn-icon"><i class="icon-letter"></i></a>
                        </div>
                    </div>
                </div>
                <div class="agent-item hover-img">
                    <div class="image-wrap">
                        <a href="agents-details.html">
                            <img class="lazyload" data-src={agent6}
                                src={agent6} alt="" />
                        </a>
                        <ul class="tf-social style-3">
                            <li><a href="#"><i class="icon-fb"></i></a></li>
                            <li><a href="#"><i class="icon-X"></i></a></li>
                            <li><a href="#"><i class="icon-linked"></i></a></li>
                            <li><a href="#"><i class="icon-ins"></i></a></li>
                        </ul>
                    </div>
                    <div class="content">
                        <div class="author">
                            <h5 class="name lh-30"><a href="agents-details.html">Leslie Alexander</a></h5>
                            <p class="text-2 lh-18">Sale agent</p>
                        </div>
                        <div class="wrap-btn-icon">
                            <a href="#" class="btn-icon"><i class="icon-phone-3"></i></a>
                            <a href="#" class="btn-icon"><i class="icon-letter"></i></a>
                        </div>
                    </div>
                </div>
                <div class="agent-item hover-img">
                    <div class="image-wrap">
                        <a href="agents-details.html">
                            <img class="lazyload" data-src={agent7}
                                src={agent7} alt="" />
                        </a>
                        <ul class="tf-social style-3">
                            <li><a href="#"><i class="icon-fb"></i></a></li>
                            <li><a href="#"><i class="icon-X"></i></a></li>
                            <li><a href="#"><i class="icon-linked"></i></a></li>
                            <li><a href="#"><i class="icon-ins"></i></a></li>
                        </ul>
                    </div>
                    <div class="content">
                        <div class="author">
                            <h5 class="name lh-30"><a href="agents-details.html">Leslie Alexander</a></h5>
                            <p class="text-2 lh-18">Sale agent</p>
                        </div>
                        <div class="wrap-btn-icon">
                            <a href="#" class="btn-icon"><i class="icon-phone-3"></i></a>
                            <a href="#" class="btn-icon"><i class="icon-letter"></i></a>
                        </div>
                    </div>
                </div>
                <div class="agent-item hover-img">
                    <div class="image-wrap">
                        <a href="agents-details.html">
                            <img class="lazyload" data-src={agent7}
                                src={agent7} alt="" />
                        </a>
                        <ul class="tf-social style-3">
                            <li><a href="#"><i class="icon-fb"></i></a></li>
                            <li><a href="#"><i class="icon-X"></i></a></li>
                            <li><a href="#"><i class="icon-linked"></i></a></li>
                            <li><a href="#"><i class="icon-ins"></i></a></li>
                        </ul>
                    </div>
                    <div class="content">
                        <div class="author">
                            <h5 class="name lh-30"><a href="agents-details.html">Leslie Alexander</a></h5>
                            <p class="text-2 lh-18">Sale agent</p>
                        </div>
                        <div class="wrap-btn-icon">
                            <a href="#" class="btn-icon"><i class="icon-phone-3"></i></a>
                            <a href="#" class="btn-icon"><i class="icon-letter"></i></a>
                        </div>
                    </div>
                </div>
                <div class="agent-item hover-img ">
                    <div class="image-wrap">
                        <a href="agents-details.html">
                            <img class="lazyload" data-src={agent8}
                                src={agent2} alt="" />
                        </a>
                        <ul class="tf-social style-3">
                            <li><a href="#"><i class="icon-fb"></i></a></li>
                            <li><a href="#"><i class="icon-X"></i></a></li>
                            <li><a href="#"><i class="icon-linked"></i></a></li>
                            <li><a href="#"><i class="icon-ins"></i></a></li>
                        </ul>
                    </div>
                    <div class="content">
                        <div class="author">
                            <h5 class="name lh-30"><a href="agents-details.html">Leslie Alexander</a></h5>
                            <p class="text-2 lh-18">Sale agent</p>
                        </div>
                        <div class="wrap-btn-icon">
                            <a href="#" class="btn-icon"><i class="icon-phone-3"></i></a>
                            <a href="#" class="btn-icon"><i class="icon-letter"></i></a>
                        </div>
                    </div>
                </div>
                <div class="agent-item hover-img">
                    <div class="image-wrap">
                        <a href="agents-details.html">
                            <img class="lazyload" data-src={agent10}
                                src={agent9}alt="" />
                        </a>
                        <ul class="tf-social style-3">
                            <li><a href="#"><i class="icon-fb"></i></a></li>
                            <li><a href="#"><i class="icon-X"></i></a></li>
                            <li><a href="#"><i class="icon-linked"></i></a></li>
                            <li><a href="#"><i class="icon-ins"></i></a></li>
                        </ul>
                    </div>
                    <div class="content">
                        <div class="author">
                            <h5 class="name lh-30"><a href="agents-details.html">Leslie Alexander</a></h5>
                            <p class="text-2 lh-18">Sale agent</p>
                        </div>
                        <div class="wrap-btn-icon">
                            <a href="#" class="btn-icon"><i class="icon-phone-3"></i></a>
                            <a href="#" class="btn-icon"><i class="icon-letter"></i></a>
                        </div>
                    </div>
                </div>
                <div class="agent-item hover-img">
                    <div class="image-wrap">
                        <a href="agents-details.html">
                            <img class="lazyload" data-src={agent11}
                                src={agent11} alt="" />
                        </a>
                        <ul class="tf-social style-3">
                            <li><a href="#"><i class="icon-fb"></i></a></li>
                            <li><a href="#"><i class="icon-X"></i></a></li>
                            <li><a href="#"><i class="icon-linked"></i></a></li>
                            <li><a href="#"><i class="icon-ins"></i></a></li>
                        </ul>
                    </div>
                    <div class="content">
                        <div class="author">
                            <h5 class="name lh-30"><a href="agents-details.html">Leslie Alexander</a></h5>
                            <p class="text-2 lh-18">Sale agent</p>
                        </div>
                        <div class="wrap-btn-icon">
                            <a href="#" class="btn-icon"><i class="icon-phone-3"></i></a>
                            <a href="#" class="btn-icon"><i class="icon-letter"></i></a>
                        </div>
                    </div>
                </div>
                <div class="agent-item hover-img">
                    <div class="image-wrap">
                        <a href="agents-details.html">
                            <img class="lazyload" data-src={agent12}
                                src={agent12}alt="" />
                        </a>
                        <ul class="tf-social style-3">
                            <li><a href="#"><i class="icon-fb"></i></a></li>
                            <li><a href="#"><i class="icon-X"></i></a></li>
                            <li><a href="#"><i class="icon-linked"></i></a></li>
                            <li><a href="#"><i class="icon-ins"></i></a></li>
                        </ul>
                    </div>
                    <div class="content">
                        <div class="author">
                            <h5 class="name lh-30"><a href="agents-details.html">Leslie Alexander</a></h5>
                            <p class="text-2 lh-18">Sale agent</p>
                        </div>
                        <div class="wrap-btn-icon">
                            <a href="#" class="btn-icon"><i class="icon-phone-3"></i></a>
                            <a href="#" class="btn-icon"><i class="icon-letter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrap-pagination">
                <p class="text-1">1 – 20 of 250+ property available</p>
                <ul class="wg-pagination justify-center">
                    <li class="arrow">
                        <a href="#"><i class="icon-arrow-left"></i></a>
                    </li>
                    <li>
                        <a href="#">1</a>
                    </li>
                    <li class="active">
                        <a href="#">2</a>
                    </li>
                    <li>
                        <a href="#">...</a>
                    </li>
                    <li>
                        <a href="#">20</a>
                    </li>
                    <li class="arrow">
                        <a href="#"><i class="icon-arrow-right"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
  )
}

export default Agentsort