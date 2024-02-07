import React from "react";
// import Heading from "../common/Heading";
import CommonHeading from "../common/CommonHeading";
import { contact } from "../data/Item";

export default function Contact() {
  return (
    <>
      {/* <Heading subtitle="Home" title="Contact" heading="Contact" /> */}

      <div
        className="container-fluid contact py-6 wow bounceInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="p-5 bg-light rounded contact-form">
            <div className="row g-4">
              <div className="col-12">
                <CommonHeading
                  title="Get in touch"
                  description="Contact Us For Any Queries!"
                />
              </div>
              <div className="col-md-6 col-lg-7">
                <p className="mb-4">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestias quisquam quas, non aperiam temporibus illum soluta dolor consequatur perspiciatis perferendis tempore amet sint nihil quidem, autem pariatur eius ullam!
                </p>
                <form>
                  <input
                    type="text"
                    className="w-100 form-control p-3 mb-4 border-primary bg-light"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    className="w-100 form-control p-3 mb-4 border-primary bg-light"
                    placeholder="Enter Your Email"
                  />
                  <textarea
                    className="w-100 form-control mb-4 p-3 border-primary bg-light"
                    rows="4"
                    cols="10"
                    placeholder="Your Message"
                  ></textarea>
                  <button
                    className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill"
                    type="submit"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
              <div className="col-md-6 col-lg-5">
                <div>
                  {contact.map((val, index) => (
                    <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
                      {val.icon}
                      <div className="">
                        <h4>{val.title}</h4>
                        <p>{val.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
