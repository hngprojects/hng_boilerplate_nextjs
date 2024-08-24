"use client";

import { useRouter } from "next/navigation"; // Import from next/navigation
import { useEffect } from "react";

import { acceptInviteRequest } from "~/actions/inviteMembers";

const extractToken = () => {
  const queryString = window.location.search.slice(1); // Remove the leading '?'
  const ampersandIndex = queryString.indexOf("&");
  return ampersandIndex === -1
    ? queryString
    : queryString.slice(0, Math.max(0, ampersandIndex));
};
const AcceptInvitePage = () => {
  const router = useRouter();

  // Function to extract token from the query string

  const handleAcceptInvite = async () => {
    // Extract token using the function
    const token = extractToken();

    if (!token) {
      router.push("/error?message=Invalid invite link");
      return;
    }

    try {
      const response = await acceptInviteRequest(token);

      switch (response.status) {
        case 200: {
          // User was added, redirect to login page
          router.push("/login?message=Invite accepted, please login");
          break;
        }
        case 202: {
          // Redirect to registration page
          router.push("/register?message=Please complete registration");
          break;
        }
        case 422: {
          // Bad invite code, redirect to error page
          router.push("/error?message=Invalid invite code");
          break;
        }
        default: {
          // Handle unexpected status codes
          router.push(
            `/error?message=${response.error || "Unexpected error occurred"}`,
          );
        }
      }
    } catch {
      // Handle unexpected errors
      router.push("/error?message=An unexpected error occurred");
    }
  };

  // Process the invite on page load
  useEffect(() => {
    handleAcceptInvite();
  }, []);

  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
      <p className="text-[2rem] text-[#f85318]">Redirecting...</p>
    </div>
  );
};

export default AcceptInvitePage;
