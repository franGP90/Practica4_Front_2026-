 
export type Autor = {
  _id: string;
  username: string;
};
 
export type Retweet = {
  usuario: string;
  fecha: string; 
};
 
export type Comentario = {
  _id: string;
  contenido: string;
  autor: Autor;
  fecha: string; 
};
 
 
export type PostType = {
  _id: string;
  contenido: string;
  autor: Autor;
  likes: string[];       
  retweets: Retweet[];
  comentarios: Comentario[];
  createdAt: string;     
  updatedAt: string;    
};
