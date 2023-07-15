const LikeComponent = ({ isLiked, toggleLike }: any) => {
  return <button onClick={toggleLike}>{isLiked ? 'Un Like' : 'Like'}</button>;
};

export default LikeComponent;
