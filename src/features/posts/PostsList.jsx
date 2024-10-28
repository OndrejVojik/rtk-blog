import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {

    // const posts = useSelector(selectAllPosts); // Before normalization
    const orderedPostIds = useSelector(selectPostIds);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    let content
    if (postStatus === "loading") {
      content = <p>"Loading..."</p>
    } else if (postStatus === "succeeded") {

    //   const orderedPosts = posts
    //     .slice()
    //     .sort((a, b) => b.date.localeCompare(a.date)) //before normalization
  
    //   const preContent = orderedPosts.filter((val, i) => {
    //     if (i !== orderedPosts.length - 1) {
    //       return val.id !== orderedPosts[i + 1].id
    //     }
    //     return val
    //   }) //before normalization to eliminate duplicates

      content = orderedPostIds.map((postId) => (
        <PostsExcerpt key={postId} postId={postId} />
      ))
    } else if (postStatus === "failed") {
      content = <p>{error}</p>
    }
  
  

    return (
        <section>
            {content}
        </section>
    )
}
export default PostsList