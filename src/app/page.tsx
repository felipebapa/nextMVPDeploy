import Image from "next/image";
import styles from "./page.module.css";
import { Grid, Typography } from "@mui/material";
import Head from 'next/head';
import Box from "@mui/material/Box";

export default function Home() {
  

  return (

    
    <main className={styles.main}>
      <div className={styles.description}>

        <div>
        <Typography variant="h4" sx={{ mb: 1 }}>
      <Box
          component="img"
          src="/assets/background/terratiarriba.png"
          
          sx={{
            px: 0, // Adjust the padding to make it thinner
            py: 0,

            position: "relative",
            top: 0, // Adjust the top position as per your requirement
            left: 0, // Adjust the left position as per your requirement
            zIndex: 1000, // Adjust the z-index if necessary
            backgroundColor: "#fff", // Optional: Set background color
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Optional: Add shadow
            width: 1520, // Adjust the width to make it thinner
          }}
        />
      </Typography>

          <a
            href="https://norangle.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" Sandax"}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
function getProjects() {
  throw new Error("Function not implemented.");
}

