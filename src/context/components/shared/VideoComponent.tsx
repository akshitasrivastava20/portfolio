function VideoComponent({
  fileName,
  title,
}: {
  fileName: string
  title: string
  useGitHub?: boolean // Use GitHub URL instead of local video
}) {
  // Construct the local public path or GitHub link
  const videoSrc = fileName

  return (
    <video
      className="size-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
      aria-label={`${title} project video`}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      preload="none"
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoComponent
