import styles from './ProductFilter.module.css';
import words from '../../data/words.json';
import { useState } from 'react';

const ProductFilter = () => {
  let charSet = [];

  const convertIntToChar = () => {
    for (let i = 65; i < 91; i++) {
      let str = String.fromCharCode(i);
      charSet.push(str);
    }
  };
  convertIntToChar();

  const [currentCharacter, setcurrentCharacter] = useState('');

  const handleMouseEnter = (character) => {
    setcurrentCharacter(character);
  };

  const handleMouseLeave = () => {
    setcurrentCharacter('');
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query
  };

  // Filter words based on the searchQuery and currentCharacter
  const filteredWords = words.words.filter((word) => {
    // Filter by both search query and current character
    const matchesSearch = word
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    word.toLowerCase().startsWith(currentCharacter.toLowerCase());
    return matchesSearch; // If no currentCharacter, return all matching search results
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ProductFilter</h1>
      <div className={styles.searchAndCharBtn}>
        <input
          type="text"
          placeholder="Search"
          className={styles.search}
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <nav className={styles.charBtnContainer}>
          {charSet.map((char) => (
            <button
              className={`${styles.characterBtn} ${
                char === currentCharacter ? styles.highlight : null
              }`}
              key={char}
              onMouseEnter={() => handleMouseEnter(char)}
              onMouseLeave={handleMouseLeave}
            >
              {char}
            </button>
          ))}
        </nav>
      </div>
      <div className={styles.wordContainer}>
        {filteredWords.map((word) => (
          <p
            className={`${styles.word} ${
              currentCharacter &&
              word.toLowerCase().startsWith(currentCharacter.toLowerCase())
                ? styles.highlight // Highlight all words when no character is selected or if it starts with the character
                : '' // Remove highlight for words that don't start with the current character
            }`}
            key={word}
          >
            {word}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
