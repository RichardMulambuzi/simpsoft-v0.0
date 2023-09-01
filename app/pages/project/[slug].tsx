import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '@/app/layout';

interface ProjectData {
title: string;
  description: string;
  // Add other properties as needed
}

const ProjectDetailsPage: React.FC<{ projectData: ProjectData }> = ({ projectData }) => {
  const router = useRouter();
  const slug = router.query.slug as string; // Assert that slug exists and is a string

  return (
    <Layout>
      <div>
       {/* Display project details based on projectData */}
        <h1>{projectData.title}</h1>
        <p>{projectData.description}</p>
    </div>
    </Layout>
    
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the list of project slugs here
  const projectSlugs = ['project1', 'project2']; // Example slugs

  const paths = projectSlugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false, // Set to true if you have dynamic slugs not specified here
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string; // Assert that slug exists and is a string

  // Fetch project data based on the slug
  const projectData = await fetchProjectData(slug); // Replace with your fetch method

  return {
    props: { projectData },
  };
};

export default ProjectDetailsPage;
