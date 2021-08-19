import React from "react"

import { createUseStyles } from "react-jss"

import { Text } from "@components"
import { Section } from "@sections"

interface Job {
  id: string
  role: string
  company: string
  location: string
  timeFrame: string
}

const jobs: Job[] = [
  {
    id: "hyphen",
    role: "Senior Software Engineer",
    company: "Hyphen",
    location: "Atlanta",
    timeFrame: "2021 - Now",
  },
  {
    id: "samsara",
    role: "Software Engineer IV",
    company: "Samsara",
    location: "Atlanta",
    timeFrame: "2019 - 2021",
  },
  {
    id: "intel",
    role: "Cloud Software Engineer II",
    company: "Intel",
    location: "Various",
    timeFrame: "2016 - 2019",
  },
  {
    id: "boeing",
    role: "Software Engineer Intern",
    company: "Boeing",
    location: "Houston",
    timeFrame: "2015 - 2015",
  },
  {
    id: "tuskegee",
    role: "Computer Science Teacher Assistant",
    company: "Tuskegee",
    location: "Tuskegee",
    timeFrame: "2013 - 2016",
  },
]

interface JobCardProps {
  job: Job
}

const JobCard = (props: JobCardProps) => {
  const classes = createUseStyles((theme) => ({
    container: {
      display: "flex",
      justifyContent: "center",
      border: `.2rem solid ${theme.palette.secondary}`,
      borderRadius: theme.spacing.md,
      maxWidth: "30rem",
      minHeight: "15rem",
      padding: "3rem",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    role: {
      marginBottom: theme.spacing.md,
    },
  }))()

  const {
    job: { role, company, timeFrame, location },
  } = props

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Text variant="h4" align="center" className={classes.role}>
          {`${role} @ ${company}`}
        </Text>
        <Text
          variant="caption"
          color="grey"
          align="center"
        >{`${location} | ${timeFrame}`}</Text>
      </div>
    </div>
  )
}

export const Experience = () => {
  const classes = createUseStyles((theme) => ({
    container: {
      display: "grid",
      justifyItems: "center",
      gridTemplateColumns: "1fr 1fr",
      gridGap: "5rem",
    },

    "@media (max-width: 48rem)": {
      container: {
        gridTemplateColumns: "1fr",
      },
    },
  }))()

  return (
    <Section
      showSplitter={{
        caption: "Experience",
        heading: "Where I've made an impact?",
      }}
    >
      <div className={classes.container}>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </Section>
  )
}
