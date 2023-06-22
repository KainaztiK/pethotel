import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import styles from "./Post.module.scss";
import { PostSkeleton } from "./Skeleton";
import { Button } from "@mui/material";

export const Post = ({
                      advertisementId,
                      title,
                      imageUrl,
                      city,
                      address,
                      inn,
                      number,
                      children,
                      isFullPost,
                      isLoading,
                      
                     }) => {
  const router = useNavigate()

  if (isLoading) {
    return <PostSkeleton />;
  }
  

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      
      <div className={styles.wrapper}>
        <div  className={styles.buttonback}>
          <Button 
          style={{
            backgroundColor: "#FF5E00",
            fontSize: "14px"
          }} 
          variant="contained" 
          onClick={() => router(-3)}>
            Назад
          </Button>
        </div>
        {imageUrl && (
          <img
            className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
            src={imageUrl}
            alt={title}
          />
        )} 
        <div className={styles.indention}>
          <h2 className={clsx(styles.titleFull, { [styles.titleFull]: isFullPost })}>
            {isFullPost ? title : <Link to={`${advertisementId}`}>{title}</Link>}
          </h2>
          <h3 className={clsx(styles.cityFull, { [styles.cityFull]: isFullPost })}>
            Адрес: {city}, {address}
          </h3>
          <h3 className={clsx(styles.cityFull, { [styles.cityFull]: isFullPost })}>
            ИНН: {inn}
          </h3>
          <h3 className={clsx(styles.cityFull, { [styles.cityFull]: isFullPost })}>
            Номер: {number}
          </h3>
          {children && <div className={styles.content}>{children}</div>}
        </div>
      </div>
    </div>
  );
};
