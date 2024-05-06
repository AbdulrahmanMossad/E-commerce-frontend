import React from "react";
const Footer = () => {
  return (
    <footer
      class="text-center text-lg-start text-white breaking-word"
      style={{ backgroundColor: "#252525" }}
    >
      <div class="container p-4 pb-0">
        <section class="">
          <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Company name</h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a class="text-white" href="/">
                  Category
                </a>
              </p>
              <p>
                <a class="text-white" href="/">
                  Brand
                </a>
              </p>
              <p>
                <a class="text-white" href="/">
                  bestSellers
                </a>
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
              <p>
                <a class="text-white" href="/">
                  Your Account
                </a>
              </p>
              <p>
                <a class="text-white" href="/">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a class="text-white" href="/">
                  Shipping Rates
                </a>
              </p>
              <p>
                <a class="text-white" href="/">
                  Help
                </a>
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p dir="ltr">
                <i class="fas fa-home mr-3"></i> Cairo, Naser City, EG
              </p>
              <p dir="ltr">
                <i class="fas fa-envelope mr-3"></i> info@gmail.com
              </p>
              <p dir="ltr">
                <i class="fas fa-phone mr-3"></i> + 02 0155 119 3040
              </p>
              <p dir="ltr">
                <i class="fas fa-print mr-3"></i> + 02 0103 058 3839
              </p>
            </div>
          </div>
        </section>

        <hr class="my-3" />

        <section class="p-3 pt-0">
          <div class="row d-flex align-items-center">
            <div class="col-md-7 col-lg-8 text-center text-md-start">
              <div class="p-3">
                © 2020 Copyright:
                <a class="text-white" href="/">
                  e-commerce.com
                </a>
              </div>
            </div>

            <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a
                href="/"
                class="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1 text-white"
                href="/"
                role="button"
              >
                <i class="fab fa-twitter"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1 text-white"
                href="/"
                role="button"
              >
                <i class="fab fa-google"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1 text-white"
                href="/"
                role="button"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
