import Image from "next/image";
import React from "react";

const WebMobile = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 ">
      <div className="px-10 sm:px-0 sm:grid-cols-2 gap-20 grid  ">
        <div className="flex flex-col gap-3 pt-10">
          <h1
            className="text-3xl font-bold  text-[#F59620]  font-outfit"
            style={{ lineHeight: 1 }}
          >
            Web & mobile app <br /> development
          </h1>
          <span className="text-sm font-medium font-outfit">
            Someone is aware of our business.
          </span>

          <p className="text-[16px] font-normal sm-w-[80%] text-[#56697A] font-outfit">
            Our mobile application development services provide the proper
            solutions and resources to assist organizations in creating
            high-quality, user-friendly, and engaging mobile apps. Our skilled
            app developers and UI/UX designers can assist
          </p>

          <button className="flex items-center justify-between  text-white py-3.5 px-5 w-fit gap-2 mt-6 group transition-all bg-[#F59620] duration-300">
            {" "}
            Learn More{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 11.7256C4 11.3459 4.28215 11.0322 4.64823 10.9825L4.75 10.9756L17.934 10.9762L13.171 6.23271C12.8775 5.94045 12.8765 5.46558 13.1687 5.17206C13.4344 4.90522 13.851 4.88011 14.1451 5.09734L14.2294 5.16977L20.2794 11.1938C20.3181 11.2323 20.3517 11.274 20.3802 11.318C20.3883 11.3313 20.3965 11.3448 20.4042 11.3587C20.4114 11.3705 20.4178 11.3828 20.4239 11.3953C20.4324 11.4134 20.4407 11.4321 20.4482 11.4512C20.4543 11.4659 20.4594 11.4802 20.464 11.4947C20.4696 11.5125 20.4749 11.5316 20.4796 11.551C20.483 11.5645 20.4857 11.5775 20.4881 11.5906C20.4914 11.61 20.4943 11.6301 20.4963 11.6504C20.498 11.666 20.4991 11.6813 20.4997 11.6967C20.4998 11.7061 20.5 11.7158 20.5 11.7256L20.4996 11.7547C20.4991 11.7694 20.498 11.7841 20.4966 11.7988L20.5 11.7256C20.5 11.773 20.4956 11.8193 20.4872 11.8642C20.4853 11.8749 20.483 11.8859 20.4804 11.8969C20.4751 11.9194 20.4689 11.9412 20.4618 11.9625C20.4584 11.9731 20.4543 11.9844 20.45 11.9956C20.4412 12.0182 20.4317 12.0397 20.4212 12.0607C20.4163 12.0705 20.4109 12.0808 20.4052 12.0911C20.3958 12.1077 20.3861 12.1235 20.3759 12.139C20.3687 12.1499 20.3607 12.1613 20.3524 12.1724L20.3459 12.1811C20.3257 12.2075 20.3038 12.2325 20.2803 12.256L20.2794 12.2567L14.2294 18.2817C13.9359 18.574 13.4611 18.573 13.1688 18.2795C12.9031 18.0127 12.8797 17.5959 13.0982 17.3028L13.171 17.2188L17.932 12.4762L4.75 12.4756C4.33579 12.4756 4 12.1399 4 11.7256Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="relative pt-8">
          <button className="flex rounded-tr-xl items-center gap-3 px-5 py-4 absolute   right-0 top-0 bg-[#FFECD5] text-[#F59620]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.79862 0.129028C3.65717 0.129028 3.52153 0.185231 3.42151 0.285251C3.32149 0.38527 3.26528 0.520913 3.26528 0.662362V10.8393C1.42628 11.1084 0.0167847 12.7468 0.0167847 14.6986C0.0167847 16.6505 1.42628 18.2887 3.26528 18.5578V23.4511C3.26528 23.5926 3.32149 23.7282 3.42151 23.8283C3.52153 23.9283 3.65717 23.9845 3.79862 23.9845C3.94007 23.9845 4.07577 23.9283 4.17578 23.8283C4.2758 23.7282 4.33195 23.5926 4.33195 23.4511V18.5578C6.17109 18.2887 7.58095 16.6506 7.58095 14.6986C7.58095 12.7467 6.17109 11.1083 4.33195 10.8393V0.662362C4.33195 0.520913 4.2758 0.38527 4.17578 0.285251C4.07577 0.185231 3.94007 0.129028 3.79862 0.129028ZM11.7986 0.129028C11.6572 0.129028 11.5215 0.185231 11.4215 0.285251C11.3215 0.38527 11.2653 0.520913 11.2653 0.662362V4.08364C9.42628 4.35278 8.01678 5.99095 8.01678 7.94281C8.01678 9.89464 9.42628 11.5326 11.2653 11.8018V23.4511C11.2653 23.5926 11.3215 23.7282 11.4215 23.8283C11.5215 23.9283 11.6572 23.9845 11.7986 23.9845C11.9401 23.9845 12.0758 23.9283 12.1758 23.8283C12.2758 23.7282 12.332 23.5926 12.332 23.4511V11.8018C14.1711 11.5327 15.581 9.89471 15.581 7.94281C15.581 5.99088 14.1711 4.35269 12.332 4.08364V0.662362C12.332 0.520913 12.2758 0.38527 12.1758 0.285251C12.0758 0.185231 11.9401 0.129028 11.7986 0.129028ZM19.7986 0.129028C19.6572 0.129028 19.5215 0.185231 19.4215 0.285251C19.3215 0.38527 19.2653 0.520913 19.2653 0.662362V13.4253C17.4263 13.6944 16.0168 15.3326 16.0168 17.2845C16.0168 19.2363 17.4263 20.8745 19.2653 21.1436V23.4511C19.2653 23.5926 19.3215 23.7282 19.4215 23.8283C19.5215 23.9283 19.6572 23.9845 19.7986 23.9845C19.9401 23.9845 20.0758 23.9283 20.1758 23.8283C20.2758 23.7282 20.332 23.5926 20.332 23.4511V21.1436C22.1711 20.8746 23.5809 19.2364 23.5809 17.2845C23.5809 15.3326 22.1711 13.6944 20.332 13.4253V0.662362C20.332 0.520913 20.2758 0.38527 20.1758 0.285251C20.0758 0.185231 19.9401 0.129028 19.7986 0.129028ZM11.7986 5.11069C13.2943 5.11069 14.5143 6.36249 14.5143 7.94281C14.5143 9.52311 13.2943 10.7745 11.7986 10.7745C10.3029 10.7745 9.08345 9.52311 9.08345 7.94281C9.08345 6.36249 10.3029 5.11069 11.7986 5.11069ZM3.79862 11.8665C5.29431 11.8665 6.51428 13.1183 6.51428 14.6986C6.51428 16.279 5.29431 17.5305 3.79862 17.5305C2.30293 17.5305 1.08345 16.279 1.08345 14.6986C1.08345 13.1183 2.30293 11.8665 3.79862 11.8665ZM19.798 14.4526C19.7984 14.4526 19.7988 14.4526 19.7992 14.4526C19.7996 14.4526 19.7999 14.4526 19.8003 14.4526C21.2957 14.4526 22.5153 15.7044 22.5153 17.2845C22.5153 18.8648 21.2954 20.1165 19.7997 20.1165C18.304 20.1165 17.0844 18.8648 17.0844 17.2845C17.0844 15.7044 18.3038 14.4529 19.7992 14.4526H19.798Z"
                fill="#F59620"
              />
            </svg>{" "}
            UI & UX Desin
          </button>
          <button className=" flex rounded-tr-xl items-center gap-3 px-5 py-4 absolute sm:-left-14 bottom-0 z-50    bg-[#FFECD5] text-[#F59620]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.79862 0.129028C3.65717 0.129028 3.52153 0.185231 3.42151 0.285251C3.32149 0.38527 3.26528 0.520913 3.26528 0.662362V10.8393C1.42628 11.1084 0.0167847 12.7468 0.0167847 14.6986C0.0167847 16.6505 1.42628 18.2887 3.26528 18.5578V23.4511C3.26528 23.5926 3.32149 23.7282 3.42151 23.8283C3.52153 23.9283 3.65717 23.9845 3.79862 23.9845C3.94007 23.9845 4.07577 23.9283 4.17578 23.8283C4.2758 23.7282 4.33195 23.5926 4.33195 23.4511V18.5578C6.17109 18.2887 7.58095 16.6506 7.58095 14.6986C7.58095 12.7467 6.17109 11.1083 4.33195 10.8393V0.662362C4.33195 0.520913 4.2758 0.38527 4.17578 0.285251C4.07577 0.185231 3.94007 0.129028 3.79862 0.129028ZM11.7986 0.129028C11.6572 0.129028 11.5215 0.185231 11.4215 0.285251C11.3215 0.38527 11.2653 0.520913 11.2653 0.662362V4.08364C9.42628 4.35278 8.01678 5.99095 8.01678 7.94281C8.01678 9.89464 9.42628 11.5326 11.2653 11.8018V23.4511C11.2653 23.5926 11.3215 23.7282 11.4215 23.8283C11.5215 23.9283 11.6572 23.9845 11.7986 23.9845C11.9401 23.9845 12.0758 23.9283 12.1758 23.8283C12.2758 23.7282 12.332 23.5926 12.332 23.4511V11.8018C14.1711 11.5327 15.581 9.89471 15.581 7.94281C15.581 5.99088 14.1711 4.35269 12.332 4.08364V0.662362C12.332 0.520913 12.2758 0.38527 12.1758 0.285251C12.0758 0.185231 11.9401 0.129028 11.7986 0.129028ZM19.7986 0.129028C19.6572 0.129028 19.5215 0.185231 19.4215 0.285251C19.3215 0.38527 19.2653 0.520913 19.2653 0.662362V13.4253C17.4263 13.6944 16.0168 15.3326 16.0168 17.2845C16.0168 19.2363 17.4263 20.8745 19.2653 21.1436V23.4511C19.2653 23.5926 19.3215 23.7282 19.4215 23.8283C19.5215 23.9283 19.6572 23.9845 19.7986 23.9845C19.9401 23.9845 20.0758 23.9283 20.1758 23.8283C20.2758 23.7282 20.332 23.5926 20.332 23.4511V21.1436C22.1711 20.8746 23.5809 19.2364 23.5809 17.2845C23.5809 15.3326 22.1711 13.6944 20.332 13.4253V0.662362C20.332 0.520913 20.2758 0.38527 20.1758 0.285251C20.0758 0.185231 19.9401 0.129028 19.7986 0.129028ZM11.7986 5.11069C13.2943 5.11069 14.5143 6.36249 14.5143 7.94281C14.5143 9.52311 13.2943 10.7745 11.7986 10.7745C10.3029 10.7745 9.08345 9.52311 9.08345 7.94281C9.08345 6.36249 10.3029 5.11069 11.7986 5.11069ZM3.79862 11.8665C5.29431 11.8665 6.51428 13.1183 6.51428 14.6986C6.51428 16.279 5.29431 17.5305 3.79862 17.5305C2.30293 17.5305 1.08345 16.279 1.08345 14.6986C1.08345 13.1183 2.30293 11.8665 3.79862 11.8665ZM19.798 14.4526C19.7984 14.4526 19.7988 14.4526 19.7992 14.4526C19.7996 14.4526 19.7999 14.4526 19.8003 14.4526C21.2957 14.4526 22.5153 15.7044 22.5153 17.2845C22.5153 18.8648 21.2954 20.1165 19.7997 20.1165C18.304 20.1165 17.0844 18.8648 17.0844 17.2845C17.0844 15.7044 18.3038 14.4529 19.7992 14.4526H19.798Z"
                fill="#F59620"
              />
            </svg>{" "}
            UI & UX Desin
          </button>

          <Image
            src={`/image/webapp2.png`}
            className="h-[400px] object-cover w-full rounded-lg"
            alt="dd"
            width={300}
            height={0}
          />
          <Image
            src={`/image/webapp1.png`}
            className=" absolute right-0 bottom-0 border-[15px] border-white"
            alt="dd"
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default WebMobile;
