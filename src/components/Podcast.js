import React from "react";
import podcast1 from "../img/podcast1.jpg";

import {
  CalendarMonth,
  FileDownloadOutlined,
  Forward30,
  MusicNote,
  PlayCircleOutline,
  Replay10,
  Share,
  TimerOutlined,
  VolumeUp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Podcast = () => {
  return (
    <div className="podcast">
      <div className="podcast_image">
        <img src={podcast1} alt="podcast" />
      </div>
      <div className="podcast_content">
        <div className="podcast_info">
          <h5 className="date">
            <CalendarMonth sx={{ fontSize: 18 }} className="icon" /> June 25, 2022
          </h5>
          <h5 className="time">
            <TimerOutlined sx={{ fontSize: 18 }} className="icon" /> 00:00
          </h5>
          <h5 className="info">
            <MusicNote sx={{ fontSize: 18 }} className="icon" /> 3.7mb
          </h5>
        </div>
        <div className="podcast_details">
          <Link to="/podcast">
            <h2>Title of my podcast</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            consectetur quibusdam nesciunt aspernatur temporibus, natus ad
            aliquam est illum voluptates.
          </p>
        </div>
        <div className="podcast_control">
          <div className="podcast_play_control">
            <Replay10 className="icon" />
            <PlayCircleOutline className="icon" sx={{ fontSize: 35 }} />
            <Forward30 className="icon" />
          </div>
          <div className="podcast_time_control">
            <p className="start">Start</p>
            <input type="range" />
            <p className="stop">End</p>
          </div>
          <div className="podcast_shuffle_control">
            <VolumeUp className="icon" />
            <Share className="icon" />
            <FileDownloadOutlined className="icon" />
          </div>

          <div className="mobile_podcast_control">
            <div className="mobile_play_control">
              <Replay10 className="icon" />
              <PlayCircleOutline className="icon" sx={{ fontSize: 35 }} />
              <Forward30 className="icon" />
            </div>
            <div className="mobile_shuffle_control">
              <VolumeUp className="icon" />
              <Share className="icon" />
              <FileDownloadOutlined className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
