
// Enum for Application Status
export enum ApplicationStatusEnum {
    Received = 'received',
    UnderReview = 'under review',
    Accepted = 'accepted',
    Rejected = 'rejected',
    Processing = 'processing',
    Interview = 'interview',
}

// Enum for Status
export enum Status {
    Open = "open",
    Closed = "closed",
    Unknown = "unknown",
  }
  
  // Interface for Job Details
  export interface Job {
    id?: number;
    job_title: string; // Job title
    location: string; // Location of the job
    job_category?: string; // Optional job category
    experience: number; // Required experience in years
    qualification: string; // Required qualification
    skills:string[]; // Required skills
    description?: string; // Optional job description
    time_posted?: Date; // Optional timestamp when the job was posted
    status?: Status; // Optional status using the Status enum
    salary_range?: string; // Optional salary range, e.g., "$60,000 - $80,000 annually"
    responsibilities?: string[]; // Optional list of responsibilities
    employment_type?: string; // Optional employment type, e.g., "Full-Time"
    work_setup?: string; // Optional work setup, e.g., "Remote", "Hybrid", or "Onsite"
  }
  

// Interface for User Information
export interface UserInfo {
    // matchScore: any;
    id: string; // User ID
    full_name: string | undefined; // Full name, can be undefined
    email: string; // Email address
    profile_image_url?: string; // Optional profile image URL
    role?: string; // Optional user role
    phone_number?: string;
    organisation_id?: string;
    organisation_name?: string;// Optional phone number
}

// Interface for Application Status
export interface ApplicationStatus {
    application_id: number; // Application ID
    job_title: string; // Job title
    status: 'received' | 'under review' | 'accepted' | 'rejected'; // Current status of the application
}

// Interface for Job Application
export interface Application {
    user_id?: string; // Optional user ID
    id: number; // Application ID
    job_id?: number; // Optional job ID
    job_title?: string; // Job title
    description?: string; // Optional job description
    full_name?: string | undefined; // Full name of the applicant
    email?: string; // Email address of the applicant
    profile_image_url?: string; // Optional profile image URL
    role?: string; // Optional role of the applicant
    phone_number?: string; // Optional phone number
    date_applied?: Date; // Optional application date
    experience: number; // Applicant's experience in years
    qualification: string; // Applicant's qualification
    skills: string; // Applicant's skills
    status?: 'received' | 'under review' | 'accepted' | 'rejected'; // Current status of the application
}

// Interface for Applicant Details
export interface Applicant {
    readonly user_id?: string; // Optional, readonly user ID
    id: number; // Applicant ID
    readonly job_id?: number; // Optional, readonly job ID
    job_title?: string; // Job title
    description?: string; // Optional job description
    full_name?: string | undefined; // Full name of the applicant
    email?: string; // Applicant's email address
    profile_image_url?: string; // Optional profile image URL
    role?: string; // Optional role
    phone_number?: string; // Optional phone number
    experience: number; // Applicant's experience in years
    qualification: string; // Applicant's qualification
    skills: string; // Applicant's skills
    applied_date?: Date; // Optional application date
    matchScore?: number; // Optional match score for the applicant
}

// Interface for Job Items (UI/Component Usage)
export interface ItemProps {
    item: ReadonlyArray<Job>; // List of jobs, immutable
}

// Interface for Testimonials
export interface Testimonial {
    readonly id: number; // Testimonial ID, immutable
    full_name: string; // Full name of the person giving the testimonial
    role: string; // Role or position of the person
    testimonial: string; // Testimonial content
    avatar_url?: string | null; // Optional avatar URL
    blur_data_URL?: string; // Optional blurred image placeholder URL
}
