import React from 'react'
import '../css/footer.css'


export const Footer = () => {
    return (
        <footer className="container-fluid bg-grey py-5">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6 ">
                        <div className="logo-part">
                            <img src="http://www.articaonline.com/wp-content/uploads/2016/09/Moodle-1.png" className="w-50 logo-footer" alt="Footer img" />
                            <p>7637 Laurel Dr. King Of Prussia, PA 19406</p>
                            <p>Use this tool as test data for an automated system or find your next pen</p>
                        </div>
                        </div>
                        <div className="col-md-6 px-4">
                        <h6> About Company</h6>
                        <p>But horizontal lines can only be a full pixel high.</p>
                        <a href="http://localhost:3000/" className="btn-footer"> More Info </a><br/>
                        <a href="http://localhost:3000/" className="btn-footer"> Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6 px-4">
                        <h6> Help us</h6>
                        <div className="row ">
                            <div className="col-md-6">
                                <ul>
                                    <li> <a href="http://localhost:3000/"> Home</a> </li>
                                    <li> <a href="http://localhost:3000/"> About</a> </li>
                                    <li> <a href="http://localhost:3000/"> Service</a> </li>
                                    <li> <a href="http://localhost:3000/"> Team</a> </li>
                                    <li> <a href="http://localhost:3000/"> Help</a> </li>
                                    <li> <a href="http://localhost:3000/"> Contact</a> </li>
                                </ul>
                            </div>
                            <div className="col-md-6 px-4">
                                <ul>
                                    <li> <a href="http://localhost:3000/"> Cab Faciliy</a> </li>
                                    <li> <a href="http://localhost:3000/"> Fax</a> </li>
                                    <li> <a href="http://localhost:3000/"> Terms</a> </li>
                                    <li> <a href="http://localhost:3000/"> Policy</a> </li>
                                    <li> <a href="http://localhost:3000/"> Refunds</a> </li>
                                    <li> <a href="http://localhost:3000/"> Paypal</a> </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6 ">
                        <h6> Newsletter</h6>
                        <div className="social">
                            <a href="http://localhost:3000/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="http://localhost:3000/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        </div>
                        <form className="form-footer my-3">
                            <input type="text"  placeholder="search here...." name="search"/>
                            <input type="button" value="Go" />
                        </form>
                        <p>That's technology limitation of LCD monitors</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </footer>
    )
}
