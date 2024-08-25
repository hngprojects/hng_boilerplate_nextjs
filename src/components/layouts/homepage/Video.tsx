const Video = () => {
  return (
    <div className="mx-auto flex w-full items-center justify-center">
      <video
        width="1000"
        src="https://res.cloudinary.com/dswi7h0dg/video/upload/v1724591372/PHP_Boilerplate_Homepage_Video_wbnzlk.mov"
        controls
        loop
        autoPlay
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default Video;
