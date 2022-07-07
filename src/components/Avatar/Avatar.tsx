import React from 'react';

import styles from './Avatar.module.css';

interface IProps {
    src: string;
    hasBorder: boolean;
}

const Avatar: React.FC<IProps> = ({ src, hasBorder }) => {
  return (



    <img
          className={hasBorder ? styles.avatarWithBorder : styles.avatar}
          src={src}
    />
  );
}

export default Avatar;