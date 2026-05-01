'use client'
import Image from "next/image";
import styles from "./page.css";
import { useState } from "react";
import { PostType } from "@/types";
import { api } from "@/lib/axios";

export default function Home() {
  const [posts, setPosts] = useState<PostType[]>()

  // const getPosts = async () => {
  //   await api
  //          .post<{posts: PostType[]}>(`/api/home
  //           `, {
  //               headers: {
  //                 xname: 'Francisco González',
  //                 Authorization: Bearer <>
  //               }
  //           })
  //           .then((e) => {
  //           console.log('Registrado correctamente');
  //            setUser(user);
  //            setToken(token);
  //          })
  //          .catch((e) => {
  //            setError(`Error al registrar: ${e}`);
  //            console.log(error);
  //          })
  //          .finally(() => {
  //           console.log('se ha llegado al finaly')
  //            setLoading(false);
  //          });
    
  //       }
  

  return (
    <div>
      
    </div>
  );
}
