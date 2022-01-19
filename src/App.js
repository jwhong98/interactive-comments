import "./App.css";
import Body from "./components/Body";
import CommentCard from "./components/CommentCard";
import ReplyCard from "./components/ReplyCard";
import data from "./data.json";

function App() {
  const createComment = (info) => {
    return (
      <CommentCard
        key={info.id}
        content={info.content}
        createdAt={info.createdAt}
        score={info.score}
        img={info.user.image.webp}
        username={info.user.username}
        replies={info.replies}
      />
    );
  };
  return (
    <Body>
      {data.comments.map(createComment)}
      <ReplyCard />
    </Body>
  );
}

export default App;
