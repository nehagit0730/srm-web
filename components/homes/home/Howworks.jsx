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
                  <h3 className="h3 lg:h2 m-0">About Us</h3>
                  <p className="fs-6 lg:fs-5">
                    At <strong>SRM</strong>, we believe your vehicle deserves the best care. Whether it’s routine maintenance, major repairs, or emergency fixes, our certified mechanics deliver quality service, affordable pricing, and complete transparency. With years of experience and a passion for vehicles, we’re here to keep you safe and confident on the road.
                  </p>
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
