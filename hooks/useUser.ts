import { useEffect, useState, useCallback } from "react";
import { getUserById, getUsers, fetchCurrentUser } from "@/helpers/users";
import { UserInfo } from "@/types/types";

const useUser = () => {
    const [users, setUsers] = useState<UserInfo[]>([]);
    const [currentUser, setCurrentUser] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch users, admins, and current user
    const fetchUserData = useCallback(async () => {
        setLoading(true);
        setError(null); // Reset error state

        try {
            // Fetch users and admins
            const fetchedUsers = await getUsers();
            setUsers(fetchedUsers);

            // Fetch current user
            const user = await fetchCurrentUser();
            setCurrentUser(user);

        } catch (err) {
            console.error("Error fetching users, admins, or current user:", err);
            setError("Failed to fetch users, admins, or current user. Please try again.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUserData();

        // Optionally, poll every 30 seconds
        const interval = setInterval(fetchUserData, 30000);

        return () => clearInterval(interval); // Clean up on unmount
    }, [fetchUserData]);


    // Fetch user by ID
    const handleGetUserById = async (userId: string) => {
        setLoading(true);
        setError(null);

        try {
            const user = await getUserById(userId);
            return user;
        } catch (err) {
            console.error("Error fetching user by ID:", err);
            setError("Failed to fetch user details. Please try again.");
            return null;
        } finally {
            setLoading(false);
        }
    };

    return {
        users,
        currentUser,
        loading,
        error,
        handleGetUserById
    };
};

export default useUser;
