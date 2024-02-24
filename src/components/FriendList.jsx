import css from "../components/FriendList.module.css";

export default function FriendList({ children }) {
  let markup = [];
  if (children)
    markup = children.map((friend, index) => (
      <li className={css.friendItemWrapper} key={index}>
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
    ));

  return (
    <div className={css.container}>
      <ul className={css.friendListWrapper}> {markup}</ul>
    </div>
  );
}

// export default function FriendList({ children }) {
//   let markup = null;
//   if (children) {
//     markup = (
//       <div>
//         <ul>
//           {children.map((friend, index) => (
//             <li key={index}>
//               <img src={friend.avatar} alt="Avatar" width="48" />
//               <p>{friend.name}</p>
//               <p>{friend.isOnline ? "Online" : "Offline"}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }

//   return markup;
// }
