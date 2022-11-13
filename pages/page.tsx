import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [likes, setLikes] = React.useState(0);
  const [random, setRandom] = React.useState();
  const callAPI = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_TEST as string);
      const data = await res.json();
      console.log(data);
      setRandom(data.title);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async () => {
    setLikes(likes + 1);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button onClick={callAPI}>Make API Call</button>
        {random}
        <button onClick={handleClick}>Like({likes})</button>
        {likes}
      </main>
    </div>
  );
}
