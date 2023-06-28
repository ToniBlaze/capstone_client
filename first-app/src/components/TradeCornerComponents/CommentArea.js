import { useEffect, useState } from "react";
import axios from "axios";
import SingleComment from "./SingleComment";
import AddComment from "./AddComment";

export default function CommentArea({ id }) {
  const [comments, setComments] = useState([]);
  const [commentsCount, setCommentsCount] = useState(0);
  let postId = id;

  // Chiamata per Dati dei COMMENTI del POST
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}/comments`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [commentsCount]);

  function deleteComment(postId, commentId) {
    axios
      .delete(`http://localhost:3000/posts/${postId}/comments/${commentId}`)
      .then((res) => {
        setComments(comments.filter((comment) => comment._id !== commentId));
      });
  }

  return (
    <div>
      <hr></hr>
      <div>
        <p className="text-black fs-4 fw-semibold mb-0">Recensioni:</p>
        <AddComment postId={postId} setCommentsCount={setCommentsCount} />
      </div>
      {comments.length > 0 ? (
        comments.map((item) => (
          <SingleComment
            item={item}
            key={item._id}
            postId={postId}
            deleteComment={deleteComment}
            setCommentsCount={setCommentsCount}
          />
        ))
      ) : (
        <p className="pt-5 text-white fs-3">Non ci sono commenti.</p>
      )}
    </div>
  );
}
