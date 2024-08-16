import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { acceptInvite } from "~/actions/inviteMembers";

const AcceptInvitePage = ({
  valid,
  statusCode,
  message,
}: {
  valid: boolean;
  statusCode: number;
  message: string;
}) => {
  const router = useRouter();

  useEffect(() => {
    if (valid) {
      if (statusCode === 200) {
        // Redirect to login page if the user was successfully added
        router.push("/login");
      } else if (statusCode === 202) {
        // Redirect to registration page if the invite requires registration
        router.push("/register");
      }
    }
  }, [valid, statusCode, router]);

  return (
    <div>
      {valid ? (
        <div>Processing invite... Redirecting...</div>
      ) : (
        <div>Error: {message}</div>
      )}
    </div>
  );
};

// This function runs server-side before the page is sent to the client
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const token = Object.keys(query)[0]; // Extract the token directly from the URL's query string

  if (!token) {
    return {
      props: {
        valid: false,
        statusCode: 422,
        message: "Invalid invite link.",
      },
    };
  }

  const inviteLink = `http://localhost:3000/invite?${token}`;

  try {
    const result = await acceptInvite(inviteLink);

    if (result.status === 200 || result.status === 202) {
      return {
        props: {
          valid: true,
          statusCode: result.status,
          message: "Invite accepted successfully!",
        },
      };
    } else if (result.status === 422) {
      return {
        props: {
          valid: false,
          statusCode: 422,
          message: "Invalid invite code.",
        },
      };
    }

    return {
      props: {
        valid: false,
        statusCode: result.status,
        message: "Unexpected response from the server.",
      },
    };
  } catch {
    return {
      props: {
        valid: false,
        statusCode: 500,
        message: "An error occurred while processing your invite.",
      },
    };
  }
};

export default AcceptInvitePage;
