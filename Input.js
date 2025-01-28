// src/SearchForm.js
import React, { useState } from 'react';

function SearchForm() {
  const [university, setUniversity] = useState('');
  const [major, setMajor] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!university || !major) {
      setError('Please enter both university and major.');
      return;
    }
    // 这里可以添加调用后端API或处理逻辑来生成岗位推荐和学习规划
    console.log(`University: ${university}, Major: ${major}`);
    setError('Recommendations generated successfully.');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto' }}>
      <h1>Enter Your Information</h1>
      <label>
        University:
        <input
          type="text"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          placeholder="Enter university"
        />
      </label>
      <br />
      <label>
        Major:
        <input
          type="text"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          placeholder="Enter major"
        />
      </label>
      <br />
      <button type="submit">Get Recommendations</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default SearchForm;