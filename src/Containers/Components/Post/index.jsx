import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./Post.module.scss";
import { Button } from "@mui/material";
import { PostSkeleton } from "./Skeleton";


export const Post = ({
                       advertisementId,
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
            {isFullPost ? title : <div>{title}</div>}
          </h2>
        
          {children && <div className={styles.content}>{children}</div>}
          <h3 className={clsx(styles.cityFull, { [styles.cityFull]: isFullPost })}>
            {city}, {address}
          </h3>
          <div className={styles.buttonNext}>
            <Link to={`${advertisementId}`}><Button
            style={{
              backgroundColor: "#FF5E00",
              fontSize: "14px"
            }} 
            variant="contained">
              Подробнее
            </Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
