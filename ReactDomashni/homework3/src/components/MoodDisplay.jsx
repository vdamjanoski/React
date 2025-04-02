const moodEmojiMap = {
    Happy: '😊',
    Sad: '😢',
    Excited: '🤩',
    Tired: '😴',
  };

const MoodDisplay = ({mood}) => {
    return(
        <div>
            {mood ? (
                <p>
                    {mood} {moodEmojiMap[mood]}
                </p>
            ) : (
                <p>Select your mood</p>
            )
            }
        </div>
    )
}

export default MoodDisplay