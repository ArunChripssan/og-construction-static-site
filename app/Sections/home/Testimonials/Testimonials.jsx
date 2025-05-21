import React from "react";
import './Testimonials.scss'

const Testimonials = () => {
  return (
        <div className="wrapper">
            <div className="testimonials">
                <h1 className="bold title">Our Happy <span className="color">Customers</span></h1>
                <div className="testimonials__container">
                    <div className="card">
                        <div className="ratings">
                            <p>5.0</p>
                            <img src=".\assets\icons\stars.png" alt="" />
                        </div>
                        <div className="review">
                            <p>"Oasis Grace LLC handled our commercial office build-out and did a stellar job. They were organized, stuck to the budget, and coordinated seamlessly with other contractors. The final product looks sleek and professional. We'll definitely work with them again for future projects."</p>
                        </div>
                        <div className="reviwer-detail">
                            <h3>Bardley Gordon</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="ratings">
                            <p>5.0</p>
                            <img src=".\assets\icons\stars.png" alt="" />
                        </div>
                        <div className="review">
                            <p>"Oasis Grace LLC handled our commercial office build-out and did a stellar job. They were organized, stuck to the budget, and coordinated seamlessly with other contractors. The final product looks sleek and professional. We'll definitely work with them again for future projects."</p>
                        </div>
                        <div className="reviwer-detail">
                            <h3>Bardley Gordon</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="ratings">
                            <p>5.0</p>
                            <img src=".\assets\icons\stars.png" alt="" />
                        </div>
                        <div className="review">
                            <p>"Oasis Grace LLC handled our commercial office build-out and did a stellar job. They were organized, stuck to the budget, and coordinated seamlessly with other contractors. The final product looks sleek and professional. We'll definitely work with them again for future projects."</p>
                        </div>
                        <div className="reviwer-detail">
                            <h3>Bardley Gordon</h3>
                        </div>
                    </div>
                    {/* <img className="neon-ellipse" src=".\assets\Ellipse.png" /> */}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
