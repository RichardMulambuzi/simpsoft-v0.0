import { Application, Job } from "@/types/types";
/**
 * Generates an AI prompt based on job and applicant information.
 * 
 * @param jobDetails - The job details for the position.
 * @param applications - The list of applicants for the job.
 * @returns A string prompt to be used by the AI model.
 */
export const createAIRecommendationPrompt = (jobDetails: Job | null, applications: Application[]) => {
    if (!jobDetails) {
        throw new Error("Job details are required to generate AI prompt.");
    }

    return `
    Job: ${jobDetails.job_title}
    Qualifications: ${jobDetails.qualification}
    Experience Required: ${jobDetails.experience}
    Skills Required: ${jobDetails.skills}

    Candidates:
    ${applications
            .map(
                (app) =>
                    `Full Name: ${app.full_name}, Experience: ${app.experience}, Skills: ${app.skills}, Qualifications: ${app.qualification}`
            )
            .join("\n")}
    
    Please rank the candidates based on their match with the job qualifications, experience, and skills.
  `;
};

/**
 * Parses the AI's response and returns a list of recommended candidate IDs.
 * 
 * @param aiResponse - The raw AI response as a string.
 * @returns A list of candidate IDs that the AI has recommended.
 */
export const parseAIResponse = (aiResponse: string) => {
    return aiResponse
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
};

/**
 * Creates a candidate evaluation prompt for detailed analysis.
 * 
 * @param applicant - The applicant for detailed analysis.
 * @param jobDetails - The job details for the evaluation.
 * @returns A string prompt for AI to evaluate a specific candidate.
 */
export const createCandidateEvaluationPrompt = (applicant: Application, jobDetails: Job | null) => {
    if (!jobDetails) {
        throw new Error("Job details are required for candidate evaluation.");
    }

    return `

    Analyze the suitability of the following candidate for the job described, providing a brief assessment (up to three lines).
    Evaluate the following candidate for the job position: ${jobDetails.job_title}

    Job Requirements:
    Qualifications: ${jobDetails.qualification}
    Experience Required: ${jobDetails.experience}
    Skills Required: ${jobDetails.skills}

    Candidate Details:
    Full Name: ${applicant.full_name}
    Experience: ${applicant.experience}
    Skills: ${applicant.skills}
    Qualifications: ${applicant.qualification}

    Please focus on the candidate's qualifications, experience, and skills, highlighting why they would be a good fit for this position. Limit your response to three concise lines.
     Provide a recommendation on whether this candidate is a good match for the job and explain why.
  `;
};
