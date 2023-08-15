import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import YoutubeEmbed from "../../component/YoutubeEmbed";
import Products from "../../component/Products";
import { getVideo } from "../../services/video";
import Comments from "../../component/Comments";

const VideoPage = () => {
    const { id } = useParams();

    const { data } = getVideo(id || "");
    
    const url = data?.url.split("=")[1]

    const navigate = useNavigate();
    return (
        <>
            <div className="h-screen w-screen">
                <div className="bg-[#121212] w-full h-[10%] flex items-center px-4">
                    <IconButton sx={{ p: "10px" }} onClick={() => navigate(-1)}>
                        <ArrowBack />
                    </IconButton>
                    <p className="text-2xl font-bold text-white ml-2">
                        Shopediasobu
                    </p>
                </div>
                <div className="w-full h-[90%] p-4 flex mr-2">
                    <div className="w-1/5 text-center h-full">
                        <p className="text-2xl font-bold">Products</p>
                        <div className="h-[90%] overflow-auto scroll"> 
                            <Products id={id || ""} />
                        </div>
                    </div>
                    <div className="w-3/5 mx-4 my-auto">
                        <div className="border rounded-2xl p-4 mb-4">
                            <p className="text-center text-2xl font-bold">{data?.title}</p>
                            <p className="text-center">{data?.channel}</p>
                        </div>
                        <YoutubeEmbed embedId={url} />
                    </div>
                    <div className="w-1/5 ml-2 text-center h-full">
                        <p className="text-2xl font-bold">Live Comments</p>
                        <Comments id={id || ""} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoPage;
