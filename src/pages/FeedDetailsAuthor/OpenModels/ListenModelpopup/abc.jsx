import React, { useState, useEffect, useRef } from "react";
import "./ListenModelpopup.scss";
import { Modal } from "@/components";
import AudioControls from "@/components/inputs/AudioControls";
import { Spinner } from "react-bootstrap";
import { TextTospeech } from "@/store/userSlice/projectSlice";
import { useDispatch } from "react-redux";

const ListenModelpopup = ({ onHide, abstract }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [playbackSpeed, setPlaybackSpeed] = useState(2.0);
  const [selectedLanguage, setSelectedLanguage] = useState("eng-uk");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const [tracks, setTracks] = useState([{ audioSrc: null }]);

  const audioRef = useRef(null);

  const fetchaudio = async () => {
    try {
      const res = await dispatch(
        TextTospeech({
          abstract:
            "Hello, this is a test for text to speech conversion. Hello, this is a test for text to speech conversion. Hello, this is a test for text to speech",
        })
      );
      console.log("Audio File Response", res.data.response);

      setTracks([{ audioSrc: res.data.response }]);

      // Initialize the audioRef with the audio source URL
      audioRef.current = new Audio(res.data.response);

      // Add event listener to ensure duration is available
      audioRef.current.addEventListener("loadedmetadata", () => {
        setTrackProgress(audioRef.current.currentTime);
        console.log(
          "Audio duration is now available:",
          audioRef.current.duration
        );
      });
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
  };

  useEffect(() => {
    fetchaudio();
  }, []);

  const intervalRef = useRef();
  const isReady = useRef(false);

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current?.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current?.currentTime);
      }
    }, 1000);
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

  const toPrevTrack = () => {
    setTrackIndex(
      (prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length
    );
  };

  const toNextTrack = () => {
    setTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef?.current?.play();
      startTimer();
    } else {
      audioRef?.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = new Audio(tracks[trackIndex]?.audioSrc);
      setTrackProgress(audioRef.current.currentTime);
      audioRef.current.volume = volume;
      audioRef.current.playbackRate = playbackSpeed;

      const currentTime = audioRef.current.currentTime;
      audioRef.current.currentTime = currentTime;

      if (isReady.current) {
        audioRef.current.play();
        setIsPlaying(true);
        startTimer();
      } else {
        isReady.current = true;
      }
    }
  }, [trackIndex, volume, playbackSpeed]);

  const updatePlaybackSpeed = (newSpeed) => {
    setPlaybackSpeed(newSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = newSpeed;
    }
  };

  const updatevolumn = (volume) => {
    setVolume(volume);
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      clearInterval(intervalRef.current);
    };
  }, []);

  const onRewind10 = () => {
    if (audioRef.current) {
      const newTime = audioRef.current.currentTime - 10;
      const updatedTime = newTime > 0 ? newTime : 0;
      audioRef.current.currentTime = updatedTime;
      setTrackProgress(updatedTime);
    }
  };

  const onForward10 = () => {
    if (audioRef.current) {
      const newTime = audioRef.current.currentTime + 10;
      const updatedTime =
        newTime < audioRef.current.duration
          ? newTime
          : audioRef.current.duration;
      audioRef.current.currentTime = updatedTime;
      setTrackProgress(updatedTime);
    }
  };

  return (
    <div>
      <Modal onHide={onHide} fullscreen>
        <div id="SelectedLanguagemodel">
          <div className="mb-32">
            <h1 className="text-16-500 color-0303">
              Al-Siyāsah al-Shar‘iyyah’s consideration and its approach among
              the governors in Islamic financial institutions: a Malaysian’s
              experience
            </h1>
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
                  <div className="track-info fixed-bottom  mb-28 ps-24 pe-24 mt-28">
                    <AudioControls
                      isPlaying={isPlaying}
                      onPlayPauseClick={setIsPlaying}
                      onPrevClick={toPrevTrack}
                      onNextClick={toNextTrack}
                      progress={trackProgress}
                      duration={audioRef.current?.duration || 0}
                      onScrub={onScrub}
                      onScrubEnd={onScrubEnd}
                      volume={volume}
                      setVolume={updatevolumn}
                      playbackSpeed={playbackSpeed}
                      setPlaybackSpeed={updatePlaybackSpeed}
                      selectedLanguage={selectedLanguage}
                      setSelectedLanguage={setSelectedLanguage}
                      onRewind10={onRewind10}
                      onForward10={onForward10}
                    />
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

// =================================

// import React, { useState, useEffect, useRef } from "react";
// import "./ListenModelpopup.scss";
// import { icons } from "@/utils/constants";
// import { Modal } from "@/components";
// import AudioControls from "@/components/inputs/AudioControls";
// import cali from "../../../../assets/song.mp3";
// import fifty from "../../../../assets/song.mp3";
// import iwonder from "../../../../assets/song.mp3";
// import { Spinner } from "react-bootstrap";
// import { TextTospeech } from "@/store/userSlice/projectSlice";
// import { useDispatch } from "react-redux";
// const ListenModelpopup = ({ onHide, abstract }) => {
//   const [trackIndex, setTrackIndex] = useState(0);
//   const [trackProgress, setTrackProgress] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [volume, setVolume] = useState(1.0);
//   const [playbackSpeed, setPlaybackSpeed] = useState(2.0);
//   const [selectedLanguage, setSelectedLanguage] = useState("eng-uk");
//   const [isLoading, setIsLoading] = useState(false);
//   const dispatch = useDispatch();

//   // const [textToSpeech, settextToSpeech] = useState("");

//   const [tracks, setTracks] = useState([{ audioSrc: null }]);

//   // useEffect(() => {
//   //   if (textToSpeech) {
//   //     setTracks([{ audioSrc: textToSpeech }]);
//   //   }
//   // }, [textToSpeech]);

//   const fetchaudio = async () => {
//     try {
//       const res = await dispatch(
//         TextTospeech({
//           abstract:
//             "Hello, this is a test for text to speech conversion. Hello, this is a test for text to speech conversion. Hello, this is a test for text to speech",
//           // voice: "en-US-Standard-C",
//         })
//       );
//       // settextToSpeech(res.data.response);
//       console.log("Audio File Response ", res.data.response);
//       setTracks([{ audioSrc: res.data.response }]);
//     } catch (error) {
//       console.error("Error fetching :", error);
//     }
//   };

//   console.log("tracks", tracks);

//   const abstrctpara = `Purpose Islamic financial institution
//                         Malaysia continue to promote Shari
//                         Purpose Islamic financial institutions (IFIs) in
//                         Malaysia continue to promote Shari
//                         Purpose Islamic financial institutions (IFIs) in
//                         Malaysia continue to promote Shari
//                         Purpose Islamic financial institutions (IFIs) in
//                         Malaysia continue to promote Shari
//                         Purpose Islamic financial institutions (IFIs) in
//                         Malaysia continue to promote Shari Purpose Islamic financial institutions (IFIs) in
//                         Malaysia continue to promote Shari
//                         Purpose Islamic financial institutions (IFIs) in
//                         Malaysia continue to promote Shari
//                         Purpose Islamic financial institutions (IFIs) in
//                         Malaysia continue to promote Shari
//                         Purpose Islamic financial institutions (IFIs) in
//                         Malaysia continue to promote Shari Purpose Islamic financial institutions (IFIs) in
//                         Malaysia continue to promote Shari
//                         Purpose Islamic financial institutions (IFIs) in
//                         Malaysia continue to promote Shari
//                         Purpose Islamic financial institutions (IFIs) in
//                         Malaysia continue to promote Shari
//                         Purpose Islamic financial institutions (IFIs) in
//                         Malaysia continue to promote Shari`;

//   const audioSrcupdate = tracks[trackIndex].audioSrc;

//   console.log(tracks, "track index");

//   const audioRef = useRef(
//     new Audio(
//       audioSrcupdate !== null && audioSrcupdate !== "" && audioSrcupdate
//     )
//   );

//   console.log(audioRef, "after audioref");
//   const intervalRef = useRef();
//   const isReady = useRef(false);
//   const { duration } = audioRef.current;

//   const startTimer = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       if (audioRef.current.ended) {
//         toNextTrack();
//       } else {
//         setTrackProgress(audioRef.current.currentTime);
//       }
//     }, 1000);
//   };

//   const onScrub = (value) => {
//     clearInterval(intervalRef.current);
//     audioRef.current.currentTime = value;
//     setTrackProgress(audioRef.current.currentTime);
//   };

//   const onScrubEnd = () => {
//     if (!isPlaying) {
//       setIsPlaying(true);
//     }
//     startTimer();
//   };

//   const toPrevTrack = () => {
//     setTrackIndex(
//       (prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length
//     );
//   };

//   const toNextTrack = () => {
//     setTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
//   };

//   //   useEffect(() => {
//   //     audioRef.current.pause();
//   //     audioRef.current = new Audio(audioSrc);
//   //     setTrackProgress(audioRef.current.currentTime);
//   //     audioRef.current.volume = volume;
//   //     audioRef.current.playbackRate = playbackSpeed;

//   //     if (isReady.current) {
//   //       audioRef.current.play();
//   //       setIsPlaying(true);
//   //       startTimer();
//   //     } else {
//   //       isReady.current = true;
//   //     }
//   //   }, [trackIndex, volume, playbackSpeed]);

//   const updatePlaybackSpeed = (newSpeed) => {
//     setPlaybackSpeed(newSpeed);
//     audioRef.current.playbackRate = newSpeed;
//   };

//   const updatevolumn = (volume) => {
//     setVolume(volume);

//     if (audioRef.current) {
//       audioRef.current.volume = volume;
//     }
//   };

//   const onRewind10 = () => {
//     const newTime = audioRef.current.currentTime - 10;
//     const updatedTime = newTime > 0 ? newTime : 0;
//     audioRef.current.currentTime = updatedTime;
//     setTrackProgress(updatedTime);
//   };

//   const onForward10 = () => {
//     const newTime = audioRef.current.currentTime + 10;
//     const updatedTime =
//       newTime < audioRef.current.duration ? newTime : audioRef.current.duration;
//     audioRef.current.currentTime = updatedTime;
//     setTrackProgress(updatedTime);
//   };

//   useEffect(() => {
//     fetchaudio();
//   }, []);

//   useEffect(() => {
//     return () => {
//       audioRef.current.pause();
//       clearInterval(intervalRef.current);
//     };
//   }, []);

//   useEffect(() => {
//     audioRef.current.pause();
//     audioRef.current = new Audio(audioSrcupdate);
//     setTrackProgress(audioRef.current.currentTime);

//     audioRef.current.volume = volume;
//     audioRef.current.playbackRate = playbackSpeed;

//     const currentTime = audioRef.current.currentTime;
//     audioRef.current.currentTime = currentTime;

//     if (isReady.current) {
//       audioRef.current.play();
//       setIsPlaying(true);
//       startTimer();
//     } else {
//       isReady.current = true;
//     }
//   }, [trackIndex]);

//   useEffect(() => {
//     if (isPlaying) {
//       audioRef.current.play();
//       startTimer();
//     } else {
//       audioRef.current.pause();
//     }
//   }, [isPlaying]);

//   return (
//     <div>
//       <Modal onHide={onHide} fullscreen>
//         <div id="SelectedLanguagemodel">
//           <div className="mb-32">
//             <h1 className="text-16-500 color-0303">
//               Al-Siyāsah al-Shar‘iyyah’s consideration and its approach among
//               the governors in Islamic financial institutions: a Malaysian’s
//               experience
//             </h1>
//           </div>
//           <div className="summary-section">
//             <div className="row">
//               <div className="col-12 mb-200">
//                 <div className="Abstract-model p-32 brave-scroll-gry ">
//                   <div className="mb-26">
//                     <h1 className="text-24-500 color-0303">Abstract</h1>
//                   </div>
//                   {isLoading ? (
//                     <div
//                       className="loader-container d-flex justify-content-center align-items-center"
//                       style={{ height: "100%" }}
//                     >
//                       <Spinner animation="border" variant="primary" />
//                     </div>
//                   ) : (
//                     <div className="mb-20">
//                       <p className="text-20-400 color-3333 mb-21">
//                         {abstrctpara}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//                 <div>
//                   <div className="track-info fixed-bottom  mb-28 ps-24 pe-24 mt-28">
//                     <AudioControls
//                       isPlaying={isPlaying}
//                       onPlayPauseClick={setIsPlaying}
//                       onPrevClick={toPrevTrack}
//                       onNextClick={toNextTrack}
//                       progress={trackProgress}
//                       duration={duration}
//                       onScrub={onScrub}
//                       onScrubEnd={onScrubEnd}
//                       volume={volume}
//                       setVolume={updatevolumn}
//                       playbackSpeed={playbackSpeed}
//                       setPlaybackSpeed={updatePlaybackSpeed}
//                       selectedLanguage={selectedLanguage}
//                       setSelectedLanguage={setSelectedLanguage}
//                       onRewind10={onRewind10}
//                       onForward10={onForward10}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default ListenModelpopup;
