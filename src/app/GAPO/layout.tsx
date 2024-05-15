"use client";
import React, { useEffect, useState } from "react";
import Main from "@/components/layouts/main";
import SideBar from "@/components/sidebar/main";
import { Box } from "@mui/material";
import { connectDatabase } from "./db.js";






export default function DashboardLayout({
  
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("aaa");
  const [openNav, setOpenNav] = useState(false);
  const [db, setDb] = useState<any>(null);
  console.log("bbb");
  useEffect(() => {
    async function initializeDatabase() {
      try {
        const connection = await connectDatabase();
        setDb(connection);
      } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
      }
    }
    console.log("ccc");
    initializeDatabase();

    return () => {
      if (db) {
        (db as any).end();
      }
    };
  }, []);

  return (
    <Box display={"flex"}>
      <SideBar openNav={openNav} onCloseNav={() => setOpenNav(false)} />
      <Main>{children}</Main>
    </Box>
  );
}
