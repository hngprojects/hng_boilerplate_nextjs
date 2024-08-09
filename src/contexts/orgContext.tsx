"use client";

import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  useTransition,
} from "react";

import { DashboardData, MonthlyData, Organisation } from "~/types";
import {
  getAllOrg,
  getAnalytics,
  getStatistics,
} from "../actions/organization";

interface OrgContextProperties {
  organizations: Organisation[];
  isLoading: boolean;
  monthlyData: MonthlyData | undefined;
  dashboardData: DashboardData | undefined;
}

export const OrgContext = createContext({} as OrgContextProperties);

const OrgContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [organizations, setOrganizations] = useState<Organisation[]>([]);
  const [isLoading, startTransition] = useTransition();
  const [monthlyData, setMonthlydata] = useState<MonthlyData | undefined>();
  const [dashboardData, setDashboardData] = useState<
    DashboardData | undefined
  >();

  useLayoutEffect(() => {
    startTransition(() => {
      getAllOrg().then((data) => {
        setOrganizations(data.organization || []);
      });
      getStatistics().then((subResponse) => {
        setDashboardData(subResponse.data);
      });
      getAnalytics().then((data) => {
        const formattedData: MonthlyData = Object.keys(data.data).map(
          (key) => ({
            month: key,
            revenue: data.data[key],
          }),
        );
        setMonthlydata(formattedData);
      });
    });
  }, []);

  const value = useMemo(
    () => ({
      isLoading,
      organizations,
      monthlyData,
      dashboardData,
    }),
    [isLoading, organizations, monthlyData, dashboardData],
  );

  return <OrgContext.Provider value={value}>{children}</OrgContext.Provider>;
};

export const useOrgContext = () => {
  const context = useContext(OrgContext);

  if (!context) {
    throw new Error("useOrgContext must be used within a OrgContextProvider");
  }
  return context;
};

export default OrgContextProvider;
