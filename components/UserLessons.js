import React, { useState, useEffect } from 'react';
import styles from '../app/page.module.css';

const UserLessons = () => {
  const [lessons, setLessons] = useState({ proficiencyLevels: [], topics: [] });
  const [selectedLevelIndex, setSelectedLevelIndex] = useState(0);
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);

  useEffect(() => {
    fetch('/api/lessons')
      .then(response => response.json())
      .then(data => {
        setLessons(prevState => ({
          ...prevState,
          ...data,
          topics: data.topics || [],
          proficiencyLevels: data.proficiencyLevels || []
        }));
        if (data.proficiencyLevels && data.proficiencyLevels.length > 0) {
          setSelectedLevelIndex(0);
        }
        if (data.topics && data.topics.length > 0) {
          setSelectedTopicIndex(0);
        }
      });
  }, []);

  const handleLevelChange = (event) => {
    setSelectedLevelIndex(event.target.value);
  };

  const handleTopicChange = (event) => {
    setSelectedTopicIndex(event.target.value);
  };

  const selectedLevel = lessons.proficiencyLevels && lessons.proficiencyLevels.length > 0 ? lessons.proficiencyLevels[selectedLevelIndex] : null;
  const selectedTopic = lessons.topics && lessons.topics.length > 0 ? lessons.topics[selectedTopicIndex] : null;

  return (
    <div className={styles.container}>
      <h2>User Lessons</h2>
  
      <label htmlFor="topic-select">Topic:</label>
      <select id="topic-select" value={selectedTopicIndex} onChange={handleTopicChange}>
        {lessons.topics.map((topic, index) => (
          <option key={index} value={index}>
            {topic.name}
          </option>
        ))}
      </select>
  
      <label htmlFor="level-select">Proficiency Level:</label>
      <select id="level-select" value={selectedLevelIndex} onChange={handleLevelChange}>
        {lessons.proficiencyLevels.map((level, index) => (
          <option key={index} value={index}>
            {level.level}
          </option>
        ))}
      </select>

      {selectedLevel && (
        <div>
          <h3>{selectedLevel.level} Overview</h3>
          <p>{selectedLevel.overview}</p>
          <div>
            <h4>Grammar</h4>
            <p>Title: {selectedLevel.grammar.title}</p>
            <p>Content: {selectedLevel.grammar.content}</p>
          </div>
          <div>
            <h4>Vocabulary</h4>
            <p>Title: {selectedLevel.vocabulary.title}</p>
            <ul>
              {selectedLevel.vocabulary.words.map((word, idx) => (
                <li key={idx}>{word}</li>
              ))}
            </ul>
          </div>
          <div>
  <h4>Activities</h4>
  {selectedLevel.activities && (
    <ul>
      {Object.keys(selectedLevel.activities).map((key, index) => (
        <li key={index}>{selectedLevel.activities[key].name}</li> 
      ))}
    </ul>
  )}
</div>
        </div>
      )}

      {selectedTopic && (
        <div>
          <h3>{selectedTopic.name}</h3>
          {/* Display other properties of the topic */}
        </div>
      )}
    </div>
  );
};

export default UserLessons;