import React from 'react'
import seller from '../../Assests/images/avatar/seller.jpg'
const FormContactSeller = () => {
    return (
        <>
            <form className="form-contact-seller mb-30">
                <h4 className="heading-title mb-30">
                    Contact Sellers
                </h4>
                <div className="seller-info">
                    <div className="avartar">
                        <img src={seller} alt="" />
                    </div>
                    <div className="content">
                        <h6 className="name">Shara Conner</h6>
                        <ul className="contact">
                            <li><i className="icon-phone-1"></i><span>1-333-345-6868</span></li>
                            <li><i className="icon-mail"></i><a href="#">themesflat@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
                <fieldset className="mb-12">
                    <input type="text" className="form-control" placeholder="Full Name" name="name"
                        id="name1" required />
                </fieldset>
                <fieldset className="mb-30">
                    <textarea name="message" cols="30" rows="10" placeholder="How can an agent help"
                        id="message1" required></textarea>
                </fieldset>

                <a href="#" className="tf-btn bg-color-primary w-full">
                    Send message</a>
            </form>
        </>
    )
}

export default FormContactSeller