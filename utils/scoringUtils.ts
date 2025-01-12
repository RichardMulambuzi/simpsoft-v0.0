import { Application, Job } from "@/types/types";
const QUALIFICATION_WEIGHT = 0.3;
const EXPERIENCE_WEIGHT = 0.3;
const SKILLS_WEIGHT = 0.3;
const AI_INFLUENCE_WEIGHT = 0.1;
export const calculateCandidateMatchScore = (
    applicant: Application,
    jobDetails: Job,
    getQualificationScore: Function,
    getExperienceScore: Function,
    getSkillsScore: Function,
    aiInfluence = 0
) => {
    const qualificationScore = getQualificationScore(
        applicant.qualification,
        jobDetails?.qualification || ""
    );
    const experienceScore = getExperienceScore(
        applicant.experience,
        jobDetails?.experience || 0
    );
    const skillsScore = getSkillsScore(
        applicant.skills,
        jobDetails?.skills || ""
    );

    return (
        qualificationScore * QUALIFICATION_WEIGHT +
        experienceScore * EXPERIENCE_WEIGHT +
        skillsScore * SKILLS_WEIGHT +
        aiInfluence * AI_INFLUENCE_WEIGHT
    );
};
