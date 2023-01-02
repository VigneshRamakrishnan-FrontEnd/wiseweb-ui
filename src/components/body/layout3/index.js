import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { IoMdBarcode } from "react-icons/io";
import { FiMonitor } from "react-icons/fi";
import { BsBriefcase } from "react-icons/bs";
import { ImInfinite } from "react-icons/im";
import { IoIosBody } from "react-icons/io";
import { AiOutlineEye } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "../../../assets/css/layout3.css";

export const SimpleSlider = () => {
  return (
    <div className="container-fluid slide pt-5">
      <div className="container pt-5  ">
        <Swiper
          breakpoints={{
            425: { slidesPerView: 1 },

            640: { slidesPerView: 2 },
            840: { slidesPerView: 3 },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper m-0"
        >
          <SwiperSlide>
            <div className="border border-1 p-4 box hover-3 ">
              <h1 className="text-primary">
                <IoMdBarcode />
              </h1>
              <h4 className="pt-4">Responsive Web Design</h4>
              <p className="text-secondary pt-2">
                Do you want your Website to be Compatible with Mobile and Tablet
                ? We can provide you the solution.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-1 p-4 box hover-3 ">
              <h1 className="text-primary">
                <FiMonitor />
              </h1>
              <h4 className="pt-4">E-commerce Website Development</h4>
              <p className="text-secondary pt-2">
                E-Commerce Web Design, Payment Gateway Integration and Shopping
                Cart Solutions.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-1 p-4 box hover-3 ">
              <h1 className="text-primary">
                <ImInfinite />
              </h1>

              <h4 className="pt-4">Search Engine Optimization</h4>
              <p className="text-secondary pt-2">
                Do you want your Website to be on top in Google Listing ? We can
                provide you the best SEO Services .
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-1 p-4 box hover-3 ">
              <h1 className="text-primary">
                <BsBriefcase />
              </h1>
              <h4 className="pt-4">Social Media Marketing</h4>
              <p className="text-secondary pt-2">
                We can create your identity in all social medias and help and
                support you to market your product/services through Social
                medias.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border border-1 p-4 box hover-3 ">
              <h1 className="text-primary">
                {" "}
                <IoIosBody />
              </h1>{" "}
              <h4 className="pt-4">Facebook and Youtube Advertising</h4>
              <p className="text-secondary pt-2">
                Facebook advertising let businesses and organisations connect
                with the people who are interested in their products and
                services.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-1 p-4 box hover-3 ">
              <h1 className="text-primary">
                <AiOutlineEye />
              </h1>

              <h4 className="pt-4">Web Hosting</h4>
              <p className="text-secondary pt-2">
                We provide the Easy Affordable Website Hosting, windows and
                Linux hosting with the latest software.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-1 p-4 box hover-3 ">
              {" "}
              <h1 class="text-primary">
                {" "}
                <IoIosBody />
              </h1>
              <h4 className="pt-4">Google AdWords Advertising</h4>
              <p className="text-secondary pt-2">
                {" "}
                Google AdWords can help to bring in new website visitors, grow
                online sales, get the phones ringing or keep customers coming
                back for more.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-1 p-4 box hover-3 ">
              {" "}
              <h1 class="text-primary">
                {" "}
                <IoIosBody />
              </h1>
              <h4 className="pt-4">Hotel Booking Engine</h4>
              <p className="text-secondary pt-2">
                We provide the easiest option for travelers to book rooms
                directly through a totally safe and customized online booking
                system.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-1 p-4 box hover-3 ">
              <h1 class="text-primary">
                <IoIosBody />
              </h1>
              <h4 className="pt-4">Digital marketing</h4>
              <p className="text-secondary pt-2">
                It encompasses all marketing efforts that use an electronic
                device or the internet. Businesses leverage digital channels
                such as search engines, social media, email, and their websites
                to connect with current and prospective customers.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
