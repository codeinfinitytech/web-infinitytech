import React from "react";
import Form from "./Form";

const ContactUs = () => {
  return (
    <div className=" relative  max-h-[200vh] ">
      <div
        className="w-full relative flex px-2 sm:px-20 py-10 bg-[#56697A] justify-center"
        style={{
          backgroundImage: `url('..assets/image/contactus.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute top-0 left-0 z-20">
          <svg
            width="255"
            height="341"
            viewBox="0 0 255 341"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M223.705 14.8525C223.705 120.81 137.81 206.705 31.8525 206.705C-74.1047 206.705 -160 120.81 -160 14.8525C-160 -91.1047 -74.1047 -177 31.8525 -177C137.81 -177 223.705 -91.1047 223.705 14.8525ZM-73.0785 14.8525C-73.0785 72.8042 -26.0993 119.783 31.8525 119.783C89.8042 119.783 136.783 72.8042 136.783 14.8525C136.783 -43.0993 89.8042 -90.0785 31.8525 -90.0785C-26.0993 -90.0785 -73.0785 -43.0993 -73.0785 14.8525Z"
              fill="#607486"
            />
            <path
              d="M255 230.516C255 291.01 205.961 340.049 145.467 340.049C84.9739 340.049 35.9344 291.01 35.9344 230.516C35.9344 170.023 84.9739 120.984 145.467 120.984C205.961 120.984 255 170.023 255 230.516ZM94.2412 230.516C94.2412 258.808 117.176 281.742 145.467 281.742C173.759 281.742 196.693 258.808 196.693 230.516C196.693 202.225 173.759 179.29 145.467 179.29C117.176 179.29 94.2412 202.225 94.2412 230.516Z"
              fill="#607486"
            />
            <circle cx="31.8526" cy="14.8523" r="66.6721" fill="#F59620" />
          </svg>
        </div>

        <div className="absolute bottom-0 right-0 z-20">
          <svg
            width="220"
            height="223"
            viewBox="0 0 220 223"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M383.705 191.852C383.705 297.81 297.81 383.705 191.852 383.705C85.8953 383.705 0 297.81 0 191.852C0 85.8953 85.8953 0 191.852 0C297.81 0 383.705 85.8953 383.705 191.852ZM86.9215 191.852C86.9215 249.804 133.901 296.783 191.852 296.783C249.804 296.783 296.783 249.804 296.783 191.852C296.783 133.901 249.804 86.9215 191.852 86.9215C133.901 86.9215 86.9215 133.901 86.9215 191.852Z"
              fill="#607486"
            />
            <circle cx="191.852" cy="191.852" r="66.6721" fill="#F59620" />
          </svg>
        </div>

        <div className="flex z-40   flex-col w-full py-20 md:p-10 gap-10  bg-transparent  items-center justify-center">
          <h1 className="text-[#F59620] text-[32px] font-bold font-outfit ">
            Get In Touch With us
          </h1>
          <div className="flex flex-col  lg:flex-row  justify-center items-center gap-10">
            <div className="flex flex-col  w-[80%]  h-full  gap-4">
              <div className="flex gap-2">
                <span className="text-[16px] md:text-[18px] text-white">
                  Are you ready to take your company or profession to the next
                  level? Do you have any queries or just want to say hello?
                  Please contact us at:-
                </span>
              </div>
              <div className="flex gap-2 justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z"
                    fill="#F59620"
                  />
                </svg>
                <span className="text-[16px] md:text-[18px] text-white">
                  If you have an urgent business concern, please contact us at
                  +25078**456
                </span>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.96318 19.2279C10.4631 19.1222 13.5093 19.1222 14.0092 19.2279C14.4366 19.3266 14.8987 19.5573 14.8987 20.0608C14.8738 20.5402 14.5926 20.9653 14.204 21.2352C13.7001 21.628 13.1088 21.8767 12.4906 21.9664C12.1487 22.0107 11.8128 22.0117 11.4828 21.9664C10.8636 21.8767 10.2723 21.628 9.76938 21.2342C9.37978 20.9653 9.09852 20.5402 9.07367 20.0608C9.07367 19.5573 9.53582 19.3266 9.96318 19.2279ZM12.0452 2C14.1254 2 16.2502 2.98702 17.5125 4.62466C18.3314 5.67916 18.7071 6.73265 18.7071 8.3703V8.79633C18.7071 10.0523 19.039 10.7925 19.7695 11.6456C20.3231 12.2741 20.5 13.0808 20.5 13.956C20.5 14.8302 20.2128 15.6601 19.6373 16.3339C18.884 17.1417 17.8215 17.6573 16.7372 17.747C15.1659 17.8809 13.5937 17.9937 12.0005 17.9937C10.4063 17.9937 8.83505 17.9263 7.26375 17.747C6.17846 17.6573 5.11602 17.1417 4.36367 16.3339C3.78822 15.6601 3.5 14.8302 3.5 13.956C3.5 13.0808 3.6779 12.2741 4.23049 11.6456C4.98384 10.7925 5.29392 10.0523 5.29392 8.79633V8.3703C5.29392 6.68834 5.71333 5.58852 6.577 4.51186C7.86106 2.9417 9.91935 2 11.9558 2H12.0452Z"
                    fill="#F59620"
                  />
                </svg>
                <span className="text-[16px] md:text-[18px] text-white">
                  If you have an urgent business concern, please contact us at
                  +25078**456
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[18px] font-outfit text-white">Follows</h1>
                <div className="flex gap-6">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM22.1 11.5C22.8 11.4 23.4 11.3 24 11C23.6 11.7 23 12.3 22.3 12.7C22.5 17.4 19.1 22.5 13 22.5C11.2 22.5 9.5 21.9 8 21C9.7 21.2 11.5 20.7 12.7 19.8C11.2 19.8 10 18.8 9.6 17.5C10.1 17.6 10.6 17.5 11.1 17.4C9.6 17 8.5 15.6 8.5 14.1C9 14.3 9.5 14.5 10 14.5C8.6 13.5 8.1 11.6 9 10.1C10.7 12.1 13.1 13.4 15.8 13.5C15.3 11.5 16.9 9.5 19 9.5C19.9 9.5 20.8 9.9 21.4 10.5C22.2 10.3 22.9 10.1 23.5 9.7C23.3 10.5 22.8 11.1 22.1 11.5Z"
                        fill="#F59620"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8.2 13.3V24H11.6V13.3H8.2ZM8 9.9C8 11 8.8 11.8 9.9 11.8C11 11.8 11.8 11 11.8 9.9C11.8 8.8 11 8 9.9 8C8.9 8 8 8.8 8 9.9ZM20.6 24H23.8V17.4C23.8 14.1 21.8 13 19.9 13C18.2 13 17 14.1 16.7 14.8V13.3H13.5V24H16.9V18.3C16.9 16.8 17.9 16 18.9 16C19.9 16 20.6 16.5 20.6 18.2V24Z"
                        fill="#F59620"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z"
                        fill="#F59620"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.4 9.2H12.6C11.8 9.3 11.4 9.4 11.1 9.5C10.7 9.6 10.4 9.8 10.1 10.1C9.86261 10.3374 9.75045 10.5748 9.61489 10.8617C9.57916 10.9373 9.5417 11.0166 9.5 11.1C9.48453 11.1464 9.46667 11.1952 9.44752 11.2475C9.34291 11.5333 9.2 11.9238 9.2 12.6V19.4C9.3 20.2 9.4 20.6 9.5 20.9C9.6 21.3 9.8 21.6 10.1 21.9C10.3374 22.1374 10.5748 22.2495 10.8617 22.3851C10.9374 22.4209 11.0165 22.4583 11.1 22.5C11.1464 22.5155 11.1952 22.5333 11.2475 22.5525C11.5333 22.6571 11.9238 22.8 12.6 22.8H19.4C20.2 22.7 20.6 22.6 20.9 22.5C21.3 22.4 21.6 22.2 21.9 21.9C22.1374 21.6626 22.2495 21.4252 22.3851 21.1383C22.4209 21.0626 22.4583 20.9835 22.5 20.9C22.5155 20.8536 22.5333 20.8048 22.5525 20.7525C22.6571 20.4667 22.8 20.0762 22.8 19.4V12.6C22.7 11.8 22.6 11.4 22.5 11.1C22.4 10.7 22.2 10.4 21.9 10.1C21.6626 9.86261 21.4252 9.75045 21.1383 9.61488C21.0627 9.57918 20.9833 9.54167 20.9 9.5C20.8536 9.48453 20.8048 9.46666 20.7525 9.44752C20.4667 9.3429 20.0762 9.2 19.4 9.2ZM16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM21.4 11.6C21.4 12.1523 20.9523 12.6 20.4 12.6C19.8477 12.6 19.4 12.1523 19.4 11.6C19.4 11.0477 19.8477 10.6 20.4 10.6C20.9523 10.6 21.4 11.0477 21.4 11.6Z"
                        fill="#F59620"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM12.6 7.7H19.4C20.3 7.8 20.9 7.9 21.4 8.1C22 8.4 22.4 8.6 22.9 9.1C23.4 9.6 23.7 10.1 23.9 10.6C24.1 11.1 24.3 11.7 24.3 12.6V19.4C24.2 20.3 24.1 20.9 23.9 21.4C23.6 22 23.4 22.4 22.9 22.9C22.4 23.4 21.9 23.7 21.4 23.9C20.9 24.1 20.3 24.3 19.4 24.3H12.6C11.7 24.2 11.1 24.1 10.6 23.9C10 23.6 9.6 23.4 9.1 22.9C8.6 22.4 8.3 21.9 8.1 21.4C7.9 20.9 7.7 20.3 7.7 19.4V12.6C7.8 11.7 7.9 11.1 8.1 10.6C8.4 10 8.6 9.6 9.1 9.1C9.6 8.6 10.1 8.3 10.6 8.1C11.1 7.9 11.7 7.7 12.6 7.7Z"
                        fill="#F59620"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
