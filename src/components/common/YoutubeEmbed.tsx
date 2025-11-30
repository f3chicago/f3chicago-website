interface YoutubeEmbedProps {
  embedId?: string;
}

export default function YoutubeEmbed({ embedId }: YoutubeEmbedProps) {
  return (
    <div className="video-responsive">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/pz8XSArKpTM?si=bYpKvslBDb5ZlrMo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
