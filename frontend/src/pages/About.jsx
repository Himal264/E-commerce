import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            architecto obcaecati? Similique voluptatem hic autem assumenda nam
            error consequatur eius harum perferendis! Eveniet placeat, cum ut
            recusandae libero hic voluptates qui neque culpa officiis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, cum
            molestias magni saepe aspernatur corporis odit ea, doloremque
            cumque, suscipit inventore consequuntur! Expedita suscipit dolores
            dignissimos rerum voluptatem tenetur quas, r
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our Mission Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Dicta, atque consectetur odio tempore similique soluta est
            inventore assumenda dolore? Quasi?
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is ourto p priority.
          </p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  );
};

export default About;
