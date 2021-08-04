import React from 'react'
import '../css/footer.css'


export const Footer = () => {
    return (
        <footer className="container-fluid bg-grey py-5">
            <div className="row">
                <div className="col-6 ">
                    <div className="logo-part d-flex justify-content-center align-items-center">
                        <img src="http://www.articaonline.com/wp-content/uploads/2016/09/Moodle-1.png" className="w-50 logo-footer" alt="Footer img" />
                        <p>7637 Laurel Dr. King Of Prussia, PA 19406</p>
                    </div>
                </div>

                <div className="col-6 d-flex justify-content-around align-items-center">
                    <h5>Moodle</h5>
                    <h5>{new Date().getFullYear()}</h5>
                </div>
            </div>
        </footer>
    )
}
