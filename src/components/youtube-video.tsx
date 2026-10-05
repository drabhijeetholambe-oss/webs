type Props = { id: string; title: string; className?: string };

// Dr. Holambe's videos are YouTube Shorts, so the player uses a vertical frame.
export default function YoutubeVideo({ id, title, className = "" }: Props) {
  return (
    <div className={"mx-auto w-full max-w-[320px] overflow-hidden rounded-3xl border border-line bg-ink shadow-lg " + className}>
      <iframe
        src={"https://www.youtube-nocookie.com/embed/" + id}
        title={title}
        loading="lazy"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="aspect-[9/16] w-full border-0"
      />
    </div>
  );
}
