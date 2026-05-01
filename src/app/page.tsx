'use client'
import Image from "next/image";
import styles from "./page.css";
import { useEffect, useState } from "react";
import { PostType } from "@/types";
import { api } from "@/lib/axios";
import { useAuth } from "@/context/authContext";
import Post from "./components/post/page";

export default function Home() {
  const [posts, setPosts] = useState<PostType[]>();
  const [error, setError] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);
  const { token } = useAuth();

  const getPosts = async (page = 1, limit = 5) => {
    await api
           .post<{posts: PostType[]}>(`/api/home
            `, {
                headers: {"x-nombre": 'Francisco González'},
                params: {page, limit}
              })
            .then((e) => {
            setPosts(e.data.posts)
           })
           .catch((e) => {
             setError(`Error al registrar: ${e}`);
             console.log(error);
           })
           .finally(() => {
             setLoading(false);
           });
    
        }

        useEffect(()=> {
          getPosts();
        },[posts])
  

  return (
    <div>
      {posts && posts.map(e => <Post key={''} post={e}></Post>)}
    </div>
  );
}
