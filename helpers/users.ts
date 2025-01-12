import { UserInfo } from "@/types/types";

// Helper to handle API errors
const handleApiError = (response: Response, action: string): void => {
    const errorMessage = `Error ${action}: ${response.status} ${response.statusText}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
};

// Generic fetch function to handle API requests
const fetchData = async (url: string, method: string, body?: any): Promise<any> => {
    try {
        const response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
            handleApiError(response, `fetching data from ${url}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Error during fetch: ${error instanceof Error ? error.message : error}`);
        throw new Error("Network or server error occurred.");
    }
};

// Fetch current logged-in user
export const fetchCurrentUser = async (): Promise<UserInfo | null> => {
    try {
        const data = await fetchData("/api/users/fetch", "GET");
        if (data && !data.error) {
            return {
                id: data.id,
                full_name: data.full_name || "",
                email: data.email || "",
            };
        } else {
            throw new Error("Error fetching user data.");
        }
    } catch (error) {
        console.error("Error fetching current user:", error);
        return null;
    }
};

// Fetch all users
export const getUsers = async (): Promise<UserInfo[]> => {
    const apiUrl = "/api/users";
    console.log("Fetching from URL:", apiUrl);

    try {
        const data = await fetchData(apiUrl, "GET");
        console.log("Full API response data:", data);

        if (Array.isArray(data)) {
            console.log("Users data fetched successfully (Array):", data);
            return data.map((user: any) => ({
                id: user.id,
                full_name: `${user.first_name || ""} ${user.last_name || ""}`.trim(),
                email: user.email_addresses?.[0]?.email_address || null,
                profile_image_url: user.profile_image_url || null,
            }));
        } else if (data && data.success && Array.isArray(data.users)) {
            console.log("Users data fetched successfully (Wrapped Object):", data.users);
            return data.users.map((user: any) => ({
                id: user.id,
                full_name: `${user.first_name || ""} ${user.last_name || ""}`.trim(),
                email: user.email_addresses?.[0]?.email_address || null,
                profile_image_url: user.profile_image_url || null,
            }));
        } else {
            console.error("Failed to fetch users. Invalid data structure:", data);
            throw new Error("Failed to fetch users. Invalid data structure.");
        }
    } catch (error) {
        console.error("Error in getUsers:", error);
        throw new Error("Error fetching users.");
    }
};

// Fetch a user by ID
export const getUserById = async (userId: string): Promise<UserInfo | null> => {
    try {
        const data = await fetchData(`/api/users/${userId}`, "GET");
        if (data.success && data.user) {
            return {
                id: data.user.id,
                full_name: data.user.full_name,
                email: data.user.email,
                profile_image_url: data.user.profile_image_url || null,
            };
        } else {
            throw new Error(`Failed to fetch user with ID: ${userId}`);
        }
    } catch (error) {
        console.error("Error fetching user by ID:", error);
        throw error;
    }
};
