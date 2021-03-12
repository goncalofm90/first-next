const Post = ({ query }) => {
  return <h1>{`This is post ${query.id}`}</h1>;
};
 
export const getServerSideProps = async ({ query }) => {
  return { props: { query } };
};
 
export default Post;