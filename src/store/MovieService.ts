import db from "../firebase";
import { Movie } from "./MoviesSlice";

export const getAllMoviesListFromDb = async () => {
  const response = await db.collection("movies").get();
  return response.docs.map((res) => {
    return {
      id: res.id,
      title: res.data().title,
      subTitle: res.data().subTitle,
      titleImg: res.data().titleImg,
      type: res.data().type,
      description: res.data().description,
      cardImg: res.data().cardImg,
      backgroundImg: res.data().backgroundImg,
    };
  });

  //   return db.collection("movies").onSnapshot((snapshot) => {
  //     return snapshot.docs.map((doc) => {
  //       return { id: doc.id, ...doc.data() };
  //     });
  //   });
};
