import React from "react";
import Image from "next/image";
import Accordion from "@/components/common/Accordion";

export default function Howworks() {
  return (
    <section
      id="how_it_works"
      className="how-it-works section panel overflow-hidden rounded-1-5 lg:rounded-2 bg-secondary dark:bg-gray-800 dark:text-white"
    >
      <div className="section-outer panel">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel pt-6">
            
            {/* --- About Us Block --- */}
            <div className="row child-cols-12 lg:child-cols-6 col-match items-center g-0">
              {/* Image */}
              <div
                className="lg:order-2"
                data-anime="onview: -100; translateX: [-48,0]; opacity:[0,1]; easing:easeOutCubic; duration:500; delay:300;"
              >
                <figure className="featured-image m-0 ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-top-start-0">
                  <Image
                    src="/assets/images/homepage/img-w-text1.jpg"
                    alt="About SRM Auto Services"
                    width={1200}
                    height={1200}
                    className="media-cover image"
                  />
                </figure>
              </div>

              {/* Text */}
              <div
                className="order-1"
                data-anime="onview: -100; translateX:[48,0]; opacity:[0,1]; easing:easeOutCubic; duration:500; delay:400;"
              >
                <div
                  className="panel vstack items-start gap-2 lg:gap-3 my-2 lg:my-0"
                  data-anime="onview: -100; targets: >*; translateY:[16,0]; opacity:[0,1]; easing:easeOutCubic; duration:500; delay:anime.stagger(100,{start:500});"
                >
                  <h3 className="h3 lg:h2 m-0">About SRM Vehicle Repair Centre</h3>
                  <p className="fs-6 lg:fs-5">
                   At SRM Vehicle Repair Centre, we specialise in bringing vehicles back to life and perfecting every imperfection. From spraying a bike frame to carrying out a full respray on a van — and everything in between — our team delivers precision, passion, and unmatched quality in every job we do.<br></br>

Based in Oldham, we proudly serve customers across the North West and beyond. With over 25 years of industry experience, our reputation for high-quality workmanship is recognised nationwide. We follow approved repair guidelines and use only premium materials designed to withstand the UK’s challenging climate and road conditions.
                  </p>
                  <h4>Our Promise</h4>
                  <p>We believe in complete honesty and transparency — values that define how we operate. At SRM, we treat every vehicle as if it were our own, ensuring every repair meets the highest standards of safety, durability, and finish. We prioritise quality, speed, and care, providing each customer with a seamless and stress-free experience.</p>
               <h4>Our Facilities</h4>
                  <p>Our state-of-the-art, F1-inspired workshop is purpose-built for efficiency and excellence. Each stage of the process — strip, prep, paint, build, and wash — has its own dedicated station, allowing us to work with precision and consistency.
We operate a professional spray booth and oven system to achieve superior paint finishes and long-lasting results.</p>
                  <h4>Why Choose SRM</h4>
                  <p>✅ Over 25 years of professional experience<br></br>
✅ Approved materials for lasting durability<br></br>
✅ Lifetime guarantee on all repair work<br></br>
✅ Friendly, customer-first service<br></br>
✅ Courtesy vehicles available<br></br>
✅ Efficient workflow using advanced technology</p>
                  <p>At SRM Vehicle Repair Centre, our mission is simple — to deliver high-quality repairs, exceptional service, and lasting results. Whether you’ve had an accident, need a respray, or just want to restore your vehicle’s appearance, we’re here to help.</p>
                  <p>📞 Call us today or book an appointment to visit our workshop — and see why our quality is heard across the country.</p>
                </div>
              </div>
            </div>

            {/* --- FAQ Block --- */}
            <div className="row pb-6 child-cols-12 lg:child-cols-6 col-match items-center g-0 mt-6">
              {/* Image */}
              <div
                data-anime="onview: -100; translateX:[-48,0]; opacity:[0,1]; easing:easeOutCubic; duration:500; delay:100;"
              >
                <figure className="featured-image m-0 ratio ratio-1x1 overflow-hidden rounded-1-5 lg:rounded-2 lg:rounded-bottom-end-0">
                  <Image
                    src="/assets/images/homepage/img-w-text2.jpg"
                    alt="FAQ illustration"
                    width={1200}
                    height={1200}
                    className="media-cover image"
                  />
                </figure>
              </div>

              {/* FAQ Accordion */}
              <div
                data-anime="onview: -100; translateX:[48,0]; opacity:[0,1]; easing:easeOutCubic; duration:500; delay:200;"
              >
                <div
                  className="panel vstack items-start gap-2 lg:gap-3 md:p-4 my-2 lg:my-0"
                  data-anime="onview: -100; targets: >*; translateY:[16,0]; opacity:[0,1]; easing:easeOutCubic; duration:500; delay:anime.stagger(100,{start:500});"
                >
                  <h3 className="h3 lg:h2 m-0">Frequently Asked Questions</h3>
                  <div className="panel w-100 mt-2 lg:mt-4">
                    <ul
                      className="uc-accordion-divider uc-accordion-chevron gap-5 uc-accordion"
                      data-uc-accordion="collapsible: false"
                      style={{ "--divider-gap": "40px" }}
                    >
                      <Accordion />
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
