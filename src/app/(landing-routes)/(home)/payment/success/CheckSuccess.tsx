"use client";

import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";

function CheckSuccess() {
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const searchParameters = useSearchParams();
  const sessionId = searchParameters.get("session_id");

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const apiUrl = await getApiUrl();
        const response = await axios.get(
          `${apiUrl}/api/v1/payment/stripe/status?session_id=${sessionId}`,
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          },
        );

        if (response.data.status === "SUCCESS") {
          setIsSuccess(true);
        }
      } catch {
        throw new Error("An error occured");
      } finally {
        setLoading(false);
      }
    };
    checkPaymentStatus();
  }, [sessionId]);

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex justify-center py-20">
          {loading && <div className="spinner-border animate-spin" />}
          {!loading && (
            <div className="flex max-w-max flex-col items-center">
              {isSuccess ? (
                <svg
                  className="mb-2 h-16 w-16 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="mb-2 h-16 w-16 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              )}
              <h3 className="mb-2 text-center text-2xl font-semibold">
                {isSuccess ? "Payment done" : "Payment failed"}
              </h3>
              <p className="mb-10 text-lg">
                {isSuccess
                  ? "The transaction was successful"
                  : "The transaction failed"}
              </p>
              <Link href="/">
                <a className="rounded-full bg-orange-500 px-10 py-3 text-white hover:bg-orange-400 active:bg-orange-400">
                  Explore App
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CheckSuccess;
