import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./Post.module.scss";
import { PostSkeleton } from "./Skeleton";


export const Post = ({
                       id,
                       title,
                       imageUrl,
                       city,
                       address,
                       children,
                       isFullPost,
                       isLoading,
                     }) => {

  if (isLoading) {
    return <PostSkeleton />;
  }



  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      
      <div className={styles.wrapper}>
        {imageUrl && (
          <img
            className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
            src={imageUrl}
            alt={title}
          />
        )} 
        <div className={styles.indention}>
          <h2 className={clsx(styles.titleFull, { [styles.titleFull]: isFullPost })}>
            {isFullPost ? title : <Link to={`/hotel/${id}`}>{title}</Link>}
          </h2>
        
          {children && <div className={styles.content}>{children}</div>}
          <h3 className={clsx(styles.cityFull, { [styles.cityFull]: isFullPost })}>
            {city}, {address}
          </h3>
        </div>
      </div>
    </div>
  );
};
