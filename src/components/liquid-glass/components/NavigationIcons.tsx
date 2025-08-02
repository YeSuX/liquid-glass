import { APP_ICONS } from '../constants';

/**
 * 导航图标组件
 */
export const NavigationIcons = () => {
  return (
    <div className="nav-wrap">
      <nav>
        {APP_ICONS.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            loading="lazy"
          />
        ))}
      </nav>
    </div>
  );
};