import React, { useState } from 'react';

export default function Search({ onChange }) {
  const [search, setSearch] = useState('');
  return (
    <div>
      <input type="text" onChange={e => setSearch(e.target.value)} />
      <input type="submit" onClick={() => onChange(search)} />
    </div>
  );
}
