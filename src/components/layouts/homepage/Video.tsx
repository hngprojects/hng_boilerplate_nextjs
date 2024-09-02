const Video = () => {
  return (
    <div className="mx-auto flex w-full items-center justify-center">
      <video
        width="1000"
        src="https://res.cloudinary.com/dswi7h0dg/video/upload/v1724593496/IMG_3523_og1v37.mp4"
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
