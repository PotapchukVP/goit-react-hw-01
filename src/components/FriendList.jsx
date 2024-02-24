import FriendListItem from "../components/FriendListItem.jsx";
import css from "../components/FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css.friendListWrapper}>
        {friends.map((friend, index) => (
          <FriendListItem key={index} friend={friend} />
        ))}
      </ul>
    </div>
  );
}
