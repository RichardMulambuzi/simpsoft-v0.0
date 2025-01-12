export const sendEmailNotification = async (
    type: string,
    email: string,
    name: string,
    interviewDate?: string
) => {
    const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ type, email, name, interviewDate }),
    });

    if (!response.ok) {
        throw new Error("Failed to send email");
    }
};
