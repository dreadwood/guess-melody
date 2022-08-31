import {useEffect, useRef, useState} from 'react';

type AudioPlayerProps = {
  src: string;
}

function AudioPlayer({src}: AudioPlayerProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  // A flag indicating whether the effect has been executed or not
  // because of Strict mode
  const isExecuted = useRef(false);

  useEffect(() => {
    if (isExecuted.current) {
      return;
    }

    if (audioRef.current !== null) {
      audioRef.current.onloadeddata = () => setIsLoading(false);
    }

    isExecuted.current = true;
  }, []);


  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    // TODO: add node .track
    <>
      <button className={`track__button track__button--${isPlaying ? 'pause' : 'play'}`}
        type="button"
        disabled={isLoading}
        title={isLoading ? 'Аудио еще не загрузилось' : ''}
        onClick={() => setIsPlaying(!isPlaying)}
        style={isLoading ? {
          cursor: 'not-allowed',
        } : {}}
      >
      </button>
      <div className="track__status">
        <audio src={src} ref={audioRef}></audio>
      </div>
    </>
  );
}

export default AudioPlayer;
