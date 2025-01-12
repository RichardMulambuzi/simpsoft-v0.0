import { useEffect } from "react";
import { useSession } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface UseSessionCheckReturn {
    isLoaded: boolean;
}

const useUserSessionCheck = (): UseSessionCheckReturn => {
    const { isLoaded, session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (isLoaded) {
            const userRole = session?.lastActiveToken?.jwt?.claims?.org_role;
            if (!session) {
                router.replace("/access-denied");
            } else if (userRole === "org:admin") {
                router.replace("/pages/admin");
            }
        }
    }, [isLoaded, session, router]);

    return { isLoaded };
};

export default useUserSessionCheck;
