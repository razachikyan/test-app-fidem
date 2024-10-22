export const signInUser = async (
  email: string
): Promise<{ success: boolean; message?: string }> => {
  try {
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    localStorage.setItem('user', email)
    return { success: true, message: data.message };
  } catch (error: any) {
    console.error("Error signing in user:", error);
    return { success: false, message: error.message };
  }
};
