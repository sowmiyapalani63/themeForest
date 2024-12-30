import React from 'react'

const FormContactAgent = () => {
    return (
        <div>
            <form className="form-contact-agent">
                <h4 className="heading-title mb-30">
                    More About This Property
                </h4>
                <fieldset>
                    <input type="text" className="form-control" placeholder="Your name" name="name"
                        id="name2" required />
                </fieldset>
                <fieldset>
                    <input type="text" className="form-control" placeholder="Email" name="email"
                        id="email2" required />
                </fieldset>
                <fieldset className="phone">
                    <input type="text" className="form-control " placeholder="Phone" name="phone"
                        id="phone" required></input>
                </fieldset>
                <fieldset>
                    <textarea name="message" cols="30" rows="10" placeholder="Message" id="message3"
                        required></textarea>
                </fieldset>
                <div className="wrap-btn">
                    <a href="#" className="tf-btn bg-color-primary fw-6 w-full"><svg width="20"
                        height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.125 5.625V14.375C18.125 14.8723 17.9275 15.3492 17.5758 15.7008C17.2242 16.0525 16.7473 16.25 16.25 16.25H3.75C3.25272 16.25 2.77581 16.0525 2.42417 15.7008C2.07254 15.3492 1.875 14.8723 1.875 14.375V5.625M18.125 5.625C18.125 5.12772 17.9275 4.65081 17.5758 4.29917C17.2242 3.94754 16.7473 3.75 16.25 3.75H3.75C3.25272 3.75 2.77581 3.94754 2.42417 4.29917C2.07254 4.65081 1.875 5.12772 1.875 5.625M18.125 5.625V5.8275C18.125 6.14762 18.0431 6.46242 17.887 6.74191C17.7309 7.0214 17.5059 7.25628 17.2333 7.42417L10.9833 11.27C10.6877 11.4521 10.3472 11.5485 10 11.5485C9.65275 11.5485 9.31233 11.4521 9.01667 11.27L2.76667 7.425C2.4941 7.25711 2.26906 7.02224 2.11297 6.74275C1.95689 6.46325 1.87496 6.14845 1.875 5.82833V5.625"
                            stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                        Email agent</a>

                </div>
            </form>
        </div>
    )
}

export default FormContactAgent