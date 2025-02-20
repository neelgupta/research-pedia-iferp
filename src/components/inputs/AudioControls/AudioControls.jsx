import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { BsPause } from "react-icons/bs";
import { icons } from "@/utils/constants";
import Select from "react-select";
import "./AudioControls.scss";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
  progress,
  duration,
  onScrub,
  onScrubEnd,
  isvolumn,
  isspeed,
  islanguage,
  istimeline,
  onForward10,
  onRewind10,
  audioRef,
  setPlaybackSpeed,
  playbackSpeed,
  setVolume,
  volume,
  updatevolumn,
}) => {
  const currentPercentage = duration ? (progress / duration) * 100 : 0;

  const speedOptions = [
    { value: 0.5, label: "0.5x" },
    { value: 0.75, label: "0.75x" },
    { value: 1.0, label: "1.0x" },
    { value: 1.25, label: "1.25x" },
    { value: 1.5, label: "1.5x" },
    { value: 2.0, label: "2.0x" },
  ];

  const LanguageOption = [
    { value: "eng-uk", label: "Anna-UK-EN" },
    { value: "eng-us", label: "Anna-US-EN" },
    { value: "esp", label: "Carlos-ES" },
  ];

  const [speed, setSpeed] = useState(1.0);
  const [Language, setLanguage] = useState(LanguageOption[0].value);

  const handleSpeedChange = (e) => {
    setPlaybackSpeed(e.target.value);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
  };
  const [isVolumeOpen, setIsVolumeOpen] = useState(false);

  const toggleVolumeControl = () => {
    setIsVolumeOpen(!isVolumeOpen);
  };

  const dropdownvolumn = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownvolumn.current &&
        !dropdownvolumn.current.contains(event.target)
      ) {
        setIsVolumeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="audio-controls ps-28 pe-28 flex-wrap">
      <div className="d-flex align-items-center gap-10">
        <div className="me-12">
          <button
            type="button"
            className="prev"
            aria-label="Previous"
            onClick={onPrevClick}
          >
            <img src={icons.leftskip} alt="Previous" />
          </button>
        </div>

        <div className="me-12">
          <button
            type="button"
            className="sec"
            aria-label="Rewind 10 seconds"
            onClick={onRewind10} // Handle 10 seconds rewind
          >
            <img src={icons.leftsec} alt="Rewind 10s" />
          </button>
        </div>

        {isPlaying ? (
          <div className="btn-pause me-12">
            <button
              type="button"
              className="pause"
              onClick={() => onPlayPauseClick(false)}
              aria-label="Pause"
            >
              <BsPause size={32} />
            </button>
          </div>
        ) : (
          <div className="btn-pause me-12">
            <button
              type="button"
              className="pause"
              onClick={() => onPlayPauseClick(true)}
              aria-label="Play"
            >
              <FaPlay />
            </button>
          </div>
        )}

        <div className="me-12">
          <button
            type="button"
            className="sec"
            aria-label="Forward 10 seconds"
            onClick={onForward10} // Handle 10 seconds forward
          >
            <img src={icons.rightsec} alt="Forward 10s" />
          </button>
        </div>

        <div className="me-12">
          <button
            type="button"
            className="next"
            aria-label="Next"
            onClick={onNextClick}
          >
            <img src={icons.rightskip} alt="Next" />
          </button>
        </div>
      </div>

      <div className="d-flex align-items-center gap-10">
        <div className="d-flex align-items-center">
          <p className="text-14-400 color-0000">
            {`${Math.floor(progress / 60)}:${Math.floor(progress % 60)
              .toString()
              .padStart(2, "0")} / ${Math.floor(duration / 60)}:${Math.floor(
              duration % 60
            )
              .toString()
              .padStart(2, "0")}`}
          </p>
        </div>

        <div
          className="ms-24 me-24 input-range-conatiner"
          // style={{ maxWidth: "600px", width: "100%" }}
        >
          <input
            type="range"
            value={progress}
            step="1"
            min="0"
            max={duration || 0}
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            className="progress-bar"
            style={{
              "--progress": `${currentPercentage}%`,
              background: `linear-gradient(to right, #0000FF 0%, #0000FF ${currentPercentage}%, #777 ${currentPercentage}%)`,
            }}
          />
        </div>
        <div className="me-10">
          <div className="position-relative">
            <button
              type="button"
              className="volume"
              aria-label="volume"
              onClick={toggleVolumeControl}
            >
              <img src={icons.volume} alt="volume" />
            </button>

            {/* inputrange */}
            <div
              className=""
              ref={dropdownvolumn}
              style={{
                position: "absolute",
                bottom: "100%",
                left: "35%",
                width: "100%",
              }}
            >
              {isVolumeOpen && (
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="volume-range"
                  aria-label="Volume Control"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center gap-4 ">
        <div className="speed-control d-flex align-items-center ">
          <span>Speed:</span>
          <select
            value={playbackSpeed}
            onChange={handleSpeedChange}
            className="dropdown-select"
          >
            {speedOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="language-control d-flex align-items-center ">
          <span>Voice:</span>
          <select
            value={Language}
            onChange={(e) => setLanguage(e.target.value)}
            className="dropdown-select"
          >
            {LanguageOption.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AudioControls;
