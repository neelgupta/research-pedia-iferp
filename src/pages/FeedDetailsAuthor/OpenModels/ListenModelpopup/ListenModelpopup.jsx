import React, { useState, useEffect, useRef } from "react";
import "./ListenModelpopup.scss";
import { icons } from "@/utils/constants";
import { Modal } from "@/components";
import AudioControls from "@/components/inputs/AudioControls";
import cali from "../../../../assets/song.mp3";
import fifty from "../../../../assets/song.mp3";
import iwonder from "../../../../assets/song.mp3";
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
  const tracks = [
    { audioSrc: cali, title: "Cali" },
    { audioSrc: fifty, title: "Fifty" },
    { audioSrc: iwonder, title: "I Wonder" },
  ];

  const abstrctpara = `Purpose Islamic financial institutions (IFIs) in
                        Malaysia continue to promote Shari
                        Purpose Islamic financial institutions (IFIs) in
                        Malaysia continue to promote Shari
                        Purpose Islamic financial institutions (IFIs) in
                        Malaysia continue to promote Shari
                        Purpose Islamic financial institutions (IFIs) in
                        Malaysia continue to promote Shari
                        Purpose Islamic financial institutions (IFIs) in
                        Malaysia continue to promote Shari Purpose Islamic financial institutions (IFIs) in
                        Malaysia continue to promote Shari
                        Purpose Islamic financial institutions (IFIs) in
                        Malaysia continue to promote Shari
                        Purpose Islamic financial institutions (IFIs) in
                        Malaysia continue to promote Shari
                        Purpose Islamic financial institutions (IFIs) in
                        Malaysia continue to promote Shari Purpose Islamic financial institutions (IFIs) in
                        Malaysia continue to promote Shari
                        Purpose Islamic financial institutions (IFIs) in
                        Malaysia continue to promote Shari
                        Purpose Islamic financial institutions (IFIs) in
                        Malaysia continue to promote Shari
                        Purpose Islamic financial institutions (IFIs) in
                        Malaysia continue to promote Shari`;

  const { audioSrc } = tracks[trackIndex];

  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
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
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  //   useEffect(() => {
  //     audioRef.current.pause();
  //     audioRef.current = new Audio(audioSrc);
  //     setTrackProgress(audioRef.current.currentTime);
  //     audioRef.current.volume = volume;
  //     audioRef.current.playbackRate = playbackSpeed;

  //     if (isReady.current) {
  //       audioRef.current.play();
  //       setIsPlaying(true);
  //       startTimer();
  //     } else {
  //       isReady.current = true;
  //     }
  //   }, [trackIndex, volume, playbackSpeed]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
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
  }, [trackIndex]);

  const updatePlaybackSpeed = (newSpeed) => {
    setPlaybackSpeed(newSpeed);
    audioRef.current.playbackRate = newSpeed;
  };

  const updatevolumn = (volume) => {
    setVolume(volume);

    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

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

  const fetchaudio = async () => {
    try {
      const res = await dispatch(
        TextTospeech({
          abstractText: abstrctpara,
          voice: "en-US-Standard-C",
        })
      );

      console.log("Audio File Response ->", res);
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
  };

  useEffect(() => {
    fetchaudio();
  }, []);

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
              {/* <div className="col-2">
                <div>
                  <h1 className="text-16-500 color-0303">Section</h1>
                </div>
                <div className="start-stop-section">
                  {card.map((item, index) => (
                    <div
                      key={index}
                      className={`start-stop-card d-flex justify-content-between align-items-center gap-2 ${clickedIndex === index ? "active-start-stop-card" : ""}`}
                      onClick={() => handleCardClick(index)}
                    >
                      <div>
                        <h1 className="text-16-400 color-3333">{item.Title}</h1>
                      </div>
                      <div>
                        <img
                          src={icons.stopplay}
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
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
                      <p className="text-20-400 color-3333 mb-20">
                        {/* Purpose Islamic financial institutions (IFIs) in
                        Malaysia continue to promote Shari‘ah-compliant business
                        and transactions. As a result, the governors have a lot
                        to think about before issuing any fatwa or ordinance,
                        which impacts the majority of Malaysians. Nevertheless,
                        the point of views from the governors have not been
                        highlighted much. This research seeks to investigate the
                        extent to which the conception of al-Siyasah
                        al-Shar‘iyyah is embraced by Shari‘ah committees’
                        leadership roles within IFIs. The importance of
                        al-Siyasah al-Shar‘iyyah in decision-making makes
                        abandoning the Shari‘ah principle untenable and its
                        significant role for IFIs in Malaysia cannot be
                        overstated. It serves as a crucial tool for
                        decision-making by authorities and governors.
                        Design/methodology/approach The objectives of this
                        research are attained by examining diverse sources
                        obtained through library research, encompassing books,
                        journals, newspapers, websites and reports. In addition,
                        to use an analytical method to assess the role of
                        al-Siyasah al-Shar‘iyyah in IFIs pratical, the authors
                        collect information through interviews with five
                        participants actively engaged in Shari‘ah committees
                        within financial institutions, both directly and
                        indirectly. Findings The research paper concludes that
                        al-Siyasah al-Shar‘iyyah holds significance for Shari‘ah
                        committees in IFIs when providing legal opinions. In
                        situations where existing madhhab-based laws prove
                        insufficient for addressing a particular issue, the
                        Shari‘ah committees will autonomously engage in new
                        ijtihad to ensure effective resolution of the matter.
                        Research limitations/implications The implication that
                        could have been resulted from this study is to indicate
                        how Shari‘ah committees in IFIs structuring a set of
                        rules and regulations embedded by al-Siyasah
                        al-Shar‘iyyah elements to produce maṣlaḥaḥ for the
                        ummah. This perspective is barely discussed in depth as
                        Malaysia has unanimous scholars who work in this area.
                        Thus, the authors attempt to bring the discussion
                        academically and express the point of view from
                        governors’ perspective. Originality/value In the
                        Malaysian context, where Islamic banks and financial
                        institutions are overseen by Shari‘ah committee members
                        and the Central Bank of Malaysia, this study delves into
                        the practical experiences of governors in carrying out
                        the responsibilities of al-Siyasah al-Shar‘iyyah within
                        the decision-making process. The objective is to
                        investigate the perspectives */}

                        {abstrctpara}
                      </p>
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
                      duration={duration}
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
