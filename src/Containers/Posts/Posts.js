import React, {useEffect, useState} from 'react';
import classes from "./Posts.module.css"
import axios from "axios";
import addButton from "../../images/addPost.png";
import changePost from "../../images/change.png";
import deletePost from "../../images/delete.png";
import {useNavigate} from "react-router-dom";
import Axios from "../../API/api"
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";
import postImg from "../../images/posts.png";


function Posts() {
    const [userInfo, setUserInfo] = useState('');
    const [posts,setPosts] = useState([])
    const router = useNavigate()
    const isUserAuth = useSelector(isAuth);
    
    useEffect(()=>{
        fetchUserInfo();
        if(window.localStorage.getItem("role")==="User")
        {
            router("/hotels");
        }
        if(window.localStorage.getItem("role")==="Companyy")
        {
            router("/posts");
        }
        if(!window.localStorage.getItem("token"))
        {
            router("/autorization");
        }

    }, [router, isUserAuth])

    useEffect(() => {
        if(userInfo.id !== undefined)
        {//axios.get(`https://localhost:5001/api/hotels/advertisements/${userInfo.id}/advertisements`)
        axios.get(`http://185.139.69.220/api/hotels/advertisements/${userInfo.id}/advertisements`)
            .then(res => {
                setPosts(res.data)
                console.log(res) 
            })
            .catch(err=>{
                console.log(err);
            });
        }
    }, [userInfo]);

    useEffect(() => {
        if(userInfo.id !== undefined)
        {
            if(posts.length === 0 || posts === undefined){
                document.querySelector('#posts_img').className = classes.PostsEmty;
                document.querySelector('#cont').className = classes.ContainerEmpty;
                document.querySelector('#img_title').className = classes.imgTitleEmpty;
            }
            else{
                document.querySelector('#posts_img').className = classes.PostsThere;
                document.querySelector('#cont').className = classes.Container;
                document.querySelector('#img_title').className = classes.imgTitleThere;
            }  
        }                  
    }, [posts, userInfo]);

    const addPost=()=>{
        window.location.href = '/posts/add-post';
    }

    const fetchUserInfo = async () => {
        const response = await Axios.get('api/authentication/CheckAuthorization');
        setUserInfo(response.data);
    };

    let token = window.localStorage.getItem('token');
    const headers= {
        'Authorization': `${token}`
    };
    const Post = posts.map((post) => {
        
        const deletePostClick = async()=>{
            try{
                const res = await axios.delete(
                    //`http://185.139.69.220/api/hotels/advertisements/advertisement/${post.advertisementId}`
                    `http://185.139.69.220/api/hotels/advertisements/advertisement/${post.advertisementId}`
                    ,{headers} )
                console.log(res);
                document.location.reload();
            }
            catch {
                alert("что-то пошло не так")
            }
        }
        const editPostClick = () => router(`/posts/edit-post/${post.advertisementId}`)
        const checkPost=()=>{
            router(`/hotel/${post.advertisementId}`)
        }

        return(
            <div key={post.advertisementId} className={classes.Post}>
                {(post.photos ? post.photos.length : 0) ? 
                    (<>
                        <img alt={'Изображение объявления'} className={classes.PostImage} src={(post.photos ? post.photos.length : 0) ? `http://185.139.69.220/photo/${post.photos[0]}` : ''}/>
                    </>
                    )
                    :(<></>)
                }
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
                    <div className={classes.Container} id={'cont'}>
                        <div className={classes.ContentPosts}>
                            <p className={classes.Title}>Ваши объявления</p>
                            <div className={classes.BlockForPosts}>
                                {Post}
                                <img src={postImg} className={classes.PostsThere} alt='Нет объявлений' id={'posts_img'}/>
                                <p className={classes.imgTitleThere} id={'img_title'}> У Вас сейчас нет объявлений, скорее добавьте его!</p>
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
