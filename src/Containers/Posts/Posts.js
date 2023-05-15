import React, {useEffect, useState} from 'react';
import classes from "./Posts.module.css"
import axios from "axios";
import addButton from "../../images/addPost.png";
import changePost from "../../images/change.png";
import deletePost from "../../images/delete.png";
import {useNavigate} from "react-router-dom";

function Posts() {

    const [posts,setPosts] = useState([])
    useEffect(() => {
        axios.get('https://localhost:5001/api/hotels/advertisements/')
            .then(res => {
                setPosts(res.data)
                console.log(res)
            })
            .catch(err=>{
                console.log(err);
            });
    }, []);

    const addPost=()=>{
        window.location.href = '/posts/add-post';
    }
    const router = useNavigate()
    const Post = posts.map((post) => {
        
        const deletePostClick=()=>{
            try{
                let url = 'https://localhost:5001/api/hotels/advertisements/';
                url += post.id;
                const res = axios.delete(url)
                console.log(res);
                document.location.reload();
            }
            catch {
                alert("что-то пошло не так")
            }
        }
        const editPostClick = () => router(`/posts/edit-post/${post.id}`)
        const checkPost=()=>{
            let params={
                name:post.name,
                city:post.city,
                address:post.address,
                description:post.description,
                number1:post.number,
                cats:post.cat,
                dogs:post.dog,
                rodent:post.rodent,
                other:post.other
            }
            let w = window.open('/posts/post')
            w.window.parameters = params;
        }

        return(
            <div key={post.id} className={classes.Post}>
                <div className={classes.PostData}>
                    <div onClick={checkPost} className={classes.PostTitle}>{post.name} </div>
                    <div className={classes.PostAddress}>{post.city}</div>
                </div>
                <div className={classes.PostButton}>
                
                    <img onClick={editPostClick}  src={changePost} className={classes.PostImg} alt={'Картинка'}/>

                    <img onClick={deletePostClick} src={deletePost} className={classes.PostImg} alt={'Картинка'}/>
                </div>
            </div>
        )
    })

    return (
        <div className={classes.Window}>

            <div className={classes.ContentBg}>
                <div className={classes.Content}>
                    <div className={classes.Container}>
                        <div className={classes.ContentPosts}>
                            <p className={classes.Title}>Ваши объявления</p>
                            <div className={classes.BlockForPosts}>
                                {Post}
                            </div>
                            <button className={classes.AddButton} onClick={addPost}><img  src={addButton} alt={'Картинка'}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;