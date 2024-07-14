import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
const AboutSectionThree = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="WHO WE ARE AND WHAT WE DO"
                paragraph="  Welcome to NileTech, a software development company dedicated to providing cutting-edge solutions for businesses and individuals alike. With a focus on website, application, and API development, as well as machine learning and AI, we strive to create innovative solutions that are tailored to meet the unique needs of our clients. At NileTech, we believe that technology can help drive progress and growth in all sectors of society, and we are committed to using our skills and expertise to help Ethiopia and Africa move towards a more digital future. We believe that by leveraging the power of technology, we can help create new opportunities, enhance productivity, and improve the lives of people throughout the region. Our team is made up of talented and passionate developers who are dedicated to creating solutions that are both functional and user-friendly. We take pride in our ability to listen carefully to our clients’ needs and work closely with them to create customized solutions that are tailored to their specific requirements. At NileTech, we are driven by a vision of a world where technology is used to make a positive impact on people’s lives. Whether you are a small business owner, a large corporation, or an individual looking to harness the power of technology to achieve your goals, we are here to help."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text=" Towards Digital - ወደ ዲጂታል - Gara dijiitaalaa " />

                  </div>

                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
