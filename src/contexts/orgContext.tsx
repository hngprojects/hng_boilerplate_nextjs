"use client";

import { useSession } from "next-auth/react";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { DashboardData, MonthlyData, Organisation, Product } from "~/types";

type ActiveFilter = "in stock" | "out of stock" | "preorder" | "all";

interface NotificationPreview {
  message: string;
  created_at: string;
  is_read: boolean;
  id: string;
}

interface NotificationsData {
  data: {
    total_unread_notification_count: number;
    total_notification_count: number;
    notifications: NotificationPreview[];
  };
  message: string;
}

interface OrgContextProperties {
  organizations: Organisation[];
  isLoading: boolean;
  monthlyData: MonthlyData | undefined;
  dashboardData: DashboardData | undefined;
  products: Product[];
  selectedProduct: string;
  setSelectedProduct: React.Dispatch<React.SetStateAction<string>>;
  active_filter: ActiveFilter;
  setActive_filter: React.Dispatch<React.SetStateAction<ActiveFilter>>;
  isNewModal: boolean;
  setIsNewModal: React.Dispatch<React.SetStateAction<boolean>>;
  isDelete: boolean;
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  updateOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isActionModal: boolean;
  setIsActionModal: React.Dispatch<React.SetStateAction<boolean>>;
  switchOrganization: (orgId: string) => void;
  notifications: NotificationsData | undefined;
}

interface SessionCheckerProperties {
  children: React.ReactNode;
}

export const OrgContext = createContext({} as OrgContextProperties);

interface ProviderProperties {
  children: React.ReactNode;
  initialData: {
    monthlyData?: MonthlyData;
    dashboardData?: DashboardData;
    products?: Product[];
    notifications?: NotificationsData;
  };
}
const OrgContextProvider = (properties: ProviderProperties) => {
  const { children, initialData } = properties;

  const monthlyData = initialData.monthlyData;
  const dashboardData = initialData.dashboardData;
  const products = initialData.products || [];
  const notifications = initialData.notifications;

  const { data: session, update, status } = useSession();

  const [selectedProduct, setSelectedProduct] = useState("");
  const [isNewModal, setIsNewModal] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isOpen, updateOpen] = useState(false);
  const [isActionModal, setIsActionModal] = useState(false);
  const [active_filter, setActive_filter] = useState<ActiveFilter>("all");
  const isAnyModalOpen = isNewModal || isDelete || isOpen || isActionModal;
  const isLoading = status === "loading";

  const switchOrganization = useCallback(
    (orgId: string) => {
      if (session) {
        const updatedSession = { ...session, currentOrgId: orgId };
        update(() => updatedSession);
      }
    },
    [session, update],
  );
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsNewModal(false);
        setIsDelete(false);
        updateOpen(false);
        setIsActionModal(false);
      }
    };

    document.body.style.overflow = isAnyModalOpen ? "hidden" : "auto";
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isAnyModalOpen]);

  function SessionChecker({ children }: SessionCheckerProperties) {
    if (status === "loading") {
      return <div>Loading...</div>;
    }

    return <>{children}</>;
  }

  return (
    <OrgContext.Provider
      value={{
        isLoading,
        organizations: session?.userOrg || [],
        monthlyData,
        dashboardData,
        products,
        selectedProduct,
        setSelectedProduct,
        isNewModal,
        setIsNewModal,
        isDelete,
        setIsDelete,
        isOpen,
        updateOpen,
        isActionModal,
        setIsActionModal,
        active_filter,
        setActive_filter,
        switchOrganization,
        notifications,
      }}
    >
      <SessionChecker>{children}</SessionChecker>
    </OrgContext.Provider>
  );
};

export const useOrgContext = () => {
  const context = useContext(OrgContext);

  if (!context) {
    throw new Error("useOrgContext must be used within a OrgContextProvider");
  }
  return context;
};

export default OrgContextProvider;
