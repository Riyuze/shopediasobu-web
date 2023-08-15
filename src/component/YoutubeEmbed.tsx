const YoutubeEmbed = ({ embedId }: { embedId: string }) => {
    return (
        <>
            <div className="overflow-hidden rounded-2xl">
                <iframe
                    src={`https://www.youtube.com/embed/${embedId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    className="w-full"
                    height={480}
                />
            </div>
        </>
    );
};

export default YoutubeEmbed;
