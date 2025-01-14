const List = () => {
  return (
    <div id="OTA">
      <div className="">
        <div className="relative flex">
          {/* Image Container */}
          <div className="w-auto sm:w-[50%]">
            <img
              src="/images/Listservice.png"
              alt="listservice"
              className="relative rounded-r-3xl z-10 object-cover  h-[100%]  lg:h-full"
              height={800}
              width={800}
            />
          </div>

          {/* Blue Background Div */}
          <div className="absolute lg:top-32 top-[70%]  lg:left-96 lg:h-[80vh] h-[50vh] rounded-l-2xl w-[100%] lg:w-[70.5vw] bg-[#1F2456]">
            <div className="p-10">
              <h1 className="lg:text-3xl text-xl heading-h1 mt-8 p-6 absolute right-0 text-white tracking-widest flex items-end justify-end">
                We list your property on OTA platforms
              </h1>

              {/* Icon Grid */}
              <div className="grid grid-cols-3 lg:grid-cols-3 gap-10 p-2 mr-10 lg:mr-1 items-center justify-center lg:gap-12 text-3xl absolute lg:top-40 lg:left-[28rem] top-44 z-40 text-white">
                <img
                  src="/images/Tripadvisor.webp"
                  alt="image"
                  height={100}
                  width={100}
                />
                <img
                  src="/images/Airbnb.webp"
                  alt="image"
                  height={100}
                  width={100}
                />
                <img
                  src="/images/Agonda.webp"
                  alt="image"
                  height={100}
                  width={100}
                />
                <img
                  src="/images/Expedia.webp"
                  alt="image"
                  height={100}
                  width={100}
                />
                <img
                  src="/images/skyscanner.webp"
                  alt="image"
                  height={100}
                  width={100}
                />
                <img
                  src="/images/trivago-logo-vector.webp"
                  alt="image"
                  height={100}
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
