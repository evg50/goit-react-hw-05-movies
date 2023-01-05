export default function CastView({ cast }) {
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <ul>
      {cast.map(cast => (
        <li key={cast.id}>
          name : {cast.name}
          <br />
          character: {cast.character}
          <img
            src={`${baseImageUrl}${cast.profile_path}`}
            alt="img"
            width="150"
          />
        </li>
      ))}
    </ul>
  );
}
