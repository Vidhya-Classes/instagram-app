import { useEffect, useState } from 'react';
import LikeComponent from './Like.Component';
import moment from 'moment';

const LikeLayout = () => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const cDate = moment(new Date()).format('lll');
    console.log({ cDate });
  }, []);

  const onToggleLike = () => {
    setIsLiked((prevState) => !prevState);
  };
  return (
    <div>
      <p>Title {isLiked ? 'LIked' : 'Unliked'}</p>
      <button onDoubleClick={onToggleLike}>Change</button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, debitis molestiae?
        Dolorum nulla architecto aliquam? Aperiam sit dolores voluptas minima dolore quis, magni
        cumque corrupti deleniti fugiat sint dignissimos alias.
      </p>

      <LikeComponent isLiked={isLiked} toggleLike={onToggleLike} />
    </div>
  );
};

export default LikeLayout;
