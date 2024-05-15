//page.tsx
import React from "react";
import { Grid, Typography } from "@mui/material";
import ChartCard from "../../components/charts/chartcard";
import { faker } from "@faker-js/faker";
import AppWidgetSummary from "@/components/layouts/appWidgetSummary";
import AppWebsiteVisits from "@/components/layouts/appWebsiteVisits";
import AppCurrentVisits from "@/components/layouts/appCurrentVisits";
import AppConversionRates from "@/components/layouts/appConversionRates";
import AppCurrentSubject from "@/components/layouts/appCurrentSubject";
import AppNewsUpdate from "@/components/layouts/appNewsUpdate";
import Head from 'next/head';
import Box from "@mui/material/Box";
import {redirect} from "next/navigation";
import {useSession} from 'next-auth/react';
import pool from "../../utils/mysql";
import { connectDatabase } from "./db";

const MainGroovy: React.FC = () => {

  connectDatabase()
  .then(data =>{
    console.log("Received data:", data);
        //Log. con dataaa
  })
  .catch(error =>{
      // handle error
    console.error("Error fetching data:", error);

  });


  return (
    <>
    <div>
      <Head>
        <title>Terraati</title>
      </Head>
    </div>

    <Typography variant="h4" sx={{ mb: 5 }}>
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
            width: 1480, // Adjust the width to make it thinner
          }}
        />
      </Typography>





      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="M2 con estrés hídrico alto"
            total={7}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Monthly Production (Tn)"
            total={1320}
            color="info"
            icon={
              <img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />
            }
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="M2 Healthy"
            total={250}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="M2 Unhealthy"
            total={10}
            color="error"
            icon={
              <img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />
            }
          />
        </Grid>



  
        <Grid item xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="(GAPO) Groovy Action Plans Operations - Overview"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Alert Distribution"
            subheader="(+43%) than last year"
            chart={{
              colors: [],
              options: {},
              categories: [
                "English",
                "History",
                "Physics",
                "Geography",
                "Chinese",
                "Math",
              ],
              series: [
                { name: "Series 1", data: [80, 50, 30, 40, 100, 20] },
                { name: "Series 2", data: [20, 30, 40, 80, 20, 80] },
                { name: "Series 3", data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>



        <Grid item xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Production (Tn)"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                "01/01/2003",
                "02/01/2003",
                "03/01/2003",
                "04/01/2003",
                "05/01/2003",
                "06/01/2003",
                "07/01/2003",
                "08/01/2003",
                "09/01/2003",
                "10/01/2003",
                "11/01/2003",
              ],
              series: [
                {
                  name: "Team A",
                  type: "column",
                  fill: "solid",
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: "Team B",
                  type: "area",
                  fill: "gradient",
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: "Team C",
                  type: "line",
                  fill: "solid",
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
              colors: [],
              options: {},
            }}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current Visits"
            subheader="(+96%) than last year"
            chart={{
              series: [
                { label: "America", value: 4344 },
                { label: "Asia", value: 5435 },
                { label: "Europe", value: 1443 },
                { label: "Africa", value: 4443 },
              ],
              colors: [],
              options: {},
            }}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Conversion Rates"
            subheader="(+43%) than last year"
            chart={{
              colors: [],
              options: {},
              series: [
                { label: "Italy", value: 400 },
                { label: "Japan", value: 430 },
                { label: "China", value: 448 },
                { label: "Canada", value: 470 },
                { label: "France", value: 540 },
                { label: "Germany", value: 580 },
                { label: "South Korea", value: 690 },
                { label: "Netherlands", value: 1100 },
                { label: "United States", value: 1200 },
                { label: "United Kingdom", value: 1380 },
              ],
            }}
          />
        </Grid>





        <Grid item xs={12} md={6} lg={4}>
          App Order
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          App Trafiic by site
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          APP TASKS
        </Grid>
      </Grid>
    </>
  );
};

export default MainGroovy;
