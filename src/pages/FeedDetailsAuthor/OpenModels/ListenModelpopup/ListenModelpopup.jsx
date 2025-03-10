import React, { useState, useEffect, useRef } from "react";
import "./ListenModelpopup.scss";
import { Modal } from "@/components";
import AudioControls from "@/components/inputs/AudioControls";
import { Spinner } from "react-bootstrap";
import { TextTospeech } from "@/store/userSlice/projectSlice";
import { useDispatch } from "react-redux";

const ListenModelpopup = ({ onHide, abstract, Title }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [selectedLanguage, setSelectedLanguage] = useState("en-US-Standard-C");
  const [isLoading, setIsLoading] = useState(false);
  const [audioplayloader, setaudioplayloader] = useState(false);
  const dispatch = useDispatch();

  const [tracks, setTracks] = useState([{ audioSrc: null }]);
  const audioRef = useRef(null);
  const intervalRef = useRef();
  const isReady = useRef(false);
  const previousTime = useRef(0);

  console.log("selectedLanguage", selectedLanguage);

  const fetchaudio = async () => {
    setaudioplayloader(true);
    try {
      const res = await dispatch(
        TextTospeech({
          abstract: abstract,
          voice: selectedLanguage,
        })
      );
      setTracks([{ audioSrc: res.data.response }]);
      setaudioplayloader(false);
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
  };

  useEffect(() => {
    console.log("hello1");
    fetchaudio();
  }, []);

  // const fetchlanguagewithaudio = async () => {
  //   setaudioplayloader(true);
  //   try {
  //     const res = await dispatch(
  //       TextTospeech({
  //         abstract: abstract,
  //         voice: selectedLanguage,
  //       })
  //     );
  //     setTracks([{ audioSrc: res.data.response }]);
  //     setaudioplayloader(false);
  //   } catch (error) {
  //     console.error("Error fetching audio:", error);
  //   }
  // };

  const changaudiolangauage = () => {
    console.log("hello2");
    if (selectedLanguage) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setTracks([]);
        setTrackProgress(0);
      }

      fetchaudio();
    }
  };
  // useEffect(() => {
  //   changaudiolangauafe();
  // }, [selectedLanguage]);

  // useEffect(() => {
  //   if (tracks.length > 0 && tracks[trackIndex]?.audioSrc) {
  //     if (!audioRef.current) {
  //       audioRef.current = new Audio(tracks[trackIndex]?.audioSrc);
  //       audioRef.current.volume = volume;
  //       audioRef.current.playbackRate = playbackSpeed;
  //       audioRef.current.currentTime = previousTime.current;

  //       audioRef.current.addEventListener("loadedmetadata", () => {
  //         setTrackProgress(audioRef.current.currentTime);
  //       });
  //     }

  //     if (isReady.current && isPlaying) {
  //       audioRef.current.play();
  //       startTimer();
  //     } else {
  //       isReady.current = true;
  //     }
  //   }
  // }, [trackIndex, tracks, volume, playbackSpeed]);

  const [audiolength, setaudiolength] = useState("");
  useEffect(() => {
    if (tracks.length > 0 && tracks[trackIndex]?.audioSrc) {
      if (!audioRef.current) {
        audioRef.current = new Audio(tracks[trackIndex]?.audioSrc);
        audioRef.current.volume = volume;
        audioRef.current.playbackRate = playbackSpeed;
        audioRef.current.currentTime = previousTime.current;

        audioRef.current.addEventListener("loadedmetadata", () => {
          setTrackProgress(audioRef.current.currentTime);

          const audioLength = audioRef.current.duration;
          console.log("Audio length:", audioLength);
          setaudiolength(audioLength);
        });
      }

      if (isReady.current && isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        isReady.current = true;
      }
    }
  }, [trackIndex, tracks, volume, playbackSpeed]);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current?.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  const toPrevTrack = () => {
    setTrackIndex(
      (prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length
    );
  };

  const toNextTrack = () => {
    setTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  const updateVolume = (volume) => {
    setVolume(volume);
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  const updatePlaybackSpeed = (newSpeed) => {
    setPlaybackSpeed(newSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = newSpeed;
    }
  };

  const onScrub = (value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const onRewind10 = () => {
    const newTime = audioRef.current.currentTime - 10;
    const updatedTime = newTime > 0 ? newTime : 0;
    audioRef.current.currentTime = updatedTime;
    setTrackProgress(updatedTime);
  };

  const onForward10 = () => {
    const newTime = audioRef.current.currentTime + 10;
    const updatedTime =
      newTime < audioRef.current.duration ? newTime : audioRef.current.duration;
    audioRef.current.currentTime = updatedTime;
    setTrackProgress(updatedTime);
  };

  useEffect(() => {
    return () => {
      previousTime.current = audioRef?.current?.currentTime || 0;
      audioRef?.current?.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <Modal onHide={onHide} fullscreen>
        <div id="SelectedLanguagemodel">
          <div className="mb-32">
            <h1 className="text-16-500 color-0303">{Title}</h1>
          </div>
          <div className="summary-section">
            <div className="row">
              <div className="col-12 mb-200">
                <div className="Abstract-model p-32 brave-scroll-gry ">
                  <div className="mb-26">
                    <h1 className="text-24-500 color-0303">Abstract</h1>
                  </div>
                  {isLoading ? (
                    <div
                      className="loader-container d-flex justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <Spinner animation="border" variant="primary" />
                    </div>
                  ) : (
                    <div className="mb-20">
                      <p className="text-20-400 color-3333 mb-21">{abstract}</p>
                    </div>
                  )}
                </div>
                <div>
                  <div>
                    <div className="track-info fixed-bottom  mb-28 ps-24 pe-24 mt-28">
                      {audioplayloader ? (
                        <div
                          className="loader-container d-flex justify-content-center align-items-center"
                          style={{ height: "100%" }}
                        >
                          <Spinner animation="border" variant="primary" />
                        </div>
                      ) : (
                        <AudioControls
                          isPlaying={isPlaying}
                          onPlayPauseClick={setIsPlaying}
                          onPrevClick={toPrevTrack}
                          onNextClick={toNextTrack}
                          progress={trackProgress}
                          duration={audioRef.current?.duration || audiolength}
                          onScrub={onScrub}
                          onScrubEnd={onScrubEnd}
                          volume={volume}
                          setVolume={updateVolume}
                          playbackSpeed={playbackSpeed}
                          setPlaybackSpeed={updatePlaybackSpeed}
                          selectedLanguage={selectedLanguage}
                          setSelectedLanguage={setSelectedLanguage}
                          onRewind10={onRewind10}
                          onForward10={onForward10}
                          changaudiolangauafe={changaudiolangauage}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ListenModelpopup;
