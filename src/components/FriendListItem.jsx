import css from "../components/FriendListItem.module.css";

export default function FriendListItem({ friend }) {
  return (
    <li className={css.friendItemWrapper}>
      <img
        className={css.friendAvatar}
        src={friend.avatar}
        alt="Avatar"
        width="98"
      />
      <p>{friend.name}</p>
      <p
        className={`${css.friendStatus} ${
          friend.isOnline ? css.friendOnline : css.friendOffline
        }`}
      >
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
}
