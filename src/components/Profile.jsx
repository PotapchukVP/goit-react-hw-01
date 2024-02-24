import css from "../components/Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.commonContainer}>
      <div className={css.profileContainer}>
        <img className={css.maskAvatar} src={image} alt="User avatar" />
        <div className={css.personInfoWrapper}>
          <p className={css.personName}>{name}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
      </div>

      <ul className={css.metricWrapper}>
        <li className={css.metricItem}>
          <span>Followers</span>
          <span className={css.count}>{stats.followers}</span>
        </li>
        <li className={css.metricItem}>
          <span>Views</span>
          <span className={css.count}>{stats.views}</span>
        </li>
        <li className={css.metricItem}>
          <span>Likes</span>
          <span className={css.count}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
