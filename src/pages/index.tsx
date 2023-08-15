import {
    Button,
    Divider,
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    InputBase,
    Paper,
} from "@mui/material";
import { Search, Close } from "@mui/icons-material";
import { useState } from "react";
import { getVideos } from "../services/video";
import { VideoModel } from "../model/video";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const { data } = getVideos();

    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();

    return (
        <>
            <div className="h-screen w-screen">
                <div className="bg-[#121212] w-full h-[10%] flex items-center justify-between px-4">
                    <p className="text-2xl font-bold text-white">
                        Shopediasobu
                    </p>
                    {!showSearch && (
                        <Button
                            startIcon={<Search />}
                            variant="contained"
                            onClick={() => setShowSearch(true)}
                            size="large"
                        >
                            Search
                        </Button>
                    )}
                    {showSearch && (
                        <Paper
                            component="form"
                            sx={{
                                p: "2px 4px",
                                display: "flex",
                                alignItems: "center",
                                width: 400,
                            }}
                        >
                            <IconButton
                                sx={{ p: "10px" }}
                                onClick={() => {
                                    setShowSearch(false);
                                    setSearchQuery("");
                                }}
                            >
                                <Close />
                            </IconButton>
                            <Divider
                                sx={{ height: 28, m: 0.5 }}
                                orientation="vertical"
                            />
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search..."
                                onChange={(val) =>
                                    setSearchQuery(val.target.value)
                                }
                            />
                            <IconButton
                                type="button"
                                sx={{ p: "10px" }}
                                onClick={() => console.log(searchQuery)}
                            >
                                <Search />
                            </IconButton>
                        </Paper>
                    )}
                </div>
                <div className="w-full h-[90%] p-4">
                    <ImageList gap={16} cols={6}>
                        {data && searchQuery.length === 0
                            ? data.map((video: VideoModel) => {
                                  return (
                                      <ImageListItem
                                          key={video._id}
                                          onClick={() =>
                                              navigate(`/video/${video._id}`)
                                          }
                                          className="cursor-pointer"
                                      >
                                          <img
                                              src={video.thumbnail}
                                              loading="lazy"
                                              className="rounded-2xl"
                                          />
                                          <ImageListItemBar
                                              title={video.title}
                                              subtitle={video.channel}
                                              className="rounded-b-2xl"
                                          />
                                      </ImageListItem>
                                  );
                              })
                            : data
                                  ?.filter((video: VideoModel) =>
                                      video.title
                                          .toLowerCase()
                                          .includes(searchQuery.toLowerCase())
                                  )
                                  .map((video: VideoModel) => {
                                      return (
                                          <ImageListItem
                                              key={video._id}
                                              onClick={() =>
                                                  navigate(
                                                      `/video/${video._id}`
                                                  )
                                              }
                                              className="cursor-pointer"
                                          >
                                              <img
                                                  src={video.thumbnail}
                                                  loading="lazy"
                                                  className="rounded-2xl"
                                              />
                                              <ImageListItemBar
                                                  title={video.title}
                                                  subtitle={video.channel}
                                                  className="rounded-b-2xl"
                                              />
                                          </ImageListItem>
                                      );
                                  })}
                    </ImageList>
                </div>
            </div>
        </>
    );
};

export default HomePage;
