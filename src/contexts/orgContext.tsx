"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useTransition,
} from "react";

import { getAllProduct } from "~/actions/product";
import { useLocalStorage } from "~/hooks/use-local-storage";
import { DashboardData, MonthlyData, Organisation, Product } from "~/types";
import {
  getAllOrg,
  getAnalytics,
  getStatistics,
} from "../actions/organization";

type ActiveFilter = "in stock" | "out of stock" | "preorder" | "all";

interface OrgState {
  organizations: Organisation[];
  isLoading: boolean;
  monthlyData: MonthlyData | undefined;
  dashboardData: DashboardData | undefined;
  products: Product[];
  selectedProduct: string;
  isNewModal: boolean;
  isDelete: boolean;
  isOpen: boolean;
  isActionModal: boolean;
  active_filter: ActiveFilter;
}

type OrgAction =
  | { type: "SET_ORGANIZATIONS"; payload: Organisation[] }
  | { type: "SET_MONTHLY_DATA"; payload: MonthlyData }
  | { type: "SET_DASHBOARD_DATA"; payload: DashboardData }
  | { type: "SET_PRODUCTS"; payload: Product[] }
  | { type: "SET_SELECTED_PRODUCT"; payload: string }
  | { type: "SET_IS_NEW_MODAL"; payload: boolean }
  | { type: "SET_IS_DELETE"; payload: boolean }
  | { type: "SET_IS_OPEN"; payload: boolean }
  | { type: "SET_IS_ACTION_MODAL"; payload: boolean }
  | { type: "SET_ACTIVE_FILTER"; payload: ActiveFilter }
  | { type: "SET_IS_LOADING"; payload: boolean };

const initialState: OrgState = {
  organizations: [],
  isLoading: false,
  monthlyData: undefined,
  dashboardData: undefined,
  products: [],
  selectedProduct: "",
  isNewModal: false,
  isDelete: false,
  isOpen: false,
  isActionModal: false,
  active_filter: "all",
};

const orgReducer = (state: OrgState, action: OrgAction): OrgState => {
  switch (action.type) {
    case "SET_ORGANIZATIONS": {
      return { ...state, organizations: action.payload };
    }
    case "SET_MONTHLY_DATA": {
      return { ...state, monthlyData: action.payload };
    }
    case "SET_DASHBOARD_DATA": {
      return { ...state, dashboardData: action.payload };
    }
    case "SET_PRODUCTS": {
      return { ...state, products: action.payload };
    }
    case "SET_SELECTED_PRODUCT": {
      return { ...state, selectedProduct: action.payload };
    }
    case "SET_IS_NEW_MODAL": {
      return { ...state, isNewModal: action.payload };
    }
    case "SET_IS_DELETE": {
      return { ...state, isDelete: action.payload };
    }
    case "SET_IS_OPEN": {
      return { ...state, isOpen: action.payload };
    }
    case "SET_IS_ACTION_MODAL": {
      return { ...state, isActionModal: action.payload };
    }
    case "SET_ACTIVE_FILTER": {
      return { ...state, active_filter: action.payload };
    }
    case "SET_IS_LOADING": {
      return { ...state, isLoading: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const OrgContext = createContext<
  | {
      state: OrgState;
      dispatch: React.Dispatch<OrgAction>;
    }
  | undefined
>(undefined);

const OrgContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(orgReducer, initialState);
  const [, startTransition] = useTransition();
  const [org_id] = useLocalStorage<string>("current_orgid", "");

  const isAnyModalOpen =
    state.isNewModal || state.isDelete || state.isOpen || state.isActionModal;

  useLayoutEffect(() => {
    startTransition(() => {
      getAllOrg().then((data) => {
        dispatch({
          type: "SET_ORGANIZATIONS",
          payload: data.organization || [],
        });
      });
      getStatistics().then((subResponse) => {
        dispatch({ type: "SET_DASHBOARD_DATA", payload: subResponse.data });
      });
      getAnalytics().then((data) => {
        const formattedData: MonthlyData = Object.keys(data.data).map(
          (key) => ({
            month: key,
            revenue: data.data[key],
          }),
        );
        dispatch({ type: "SET_MONTHLY_DATA", payload: formattedData });
      });
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = isAnyModalOpen ? "hidden" : "auto";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dispatch({ type: "SET_IS_NEW_MODAL", payload: false });
        dispatch({ type: "SET_IS_DELETE", payload: false });
        dispatch({ type: "SET_IS_OPEN", payload: false });
        dispatch({ type: "SET_IS_ACTION_MODAL", payload: false });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAnyModalOpen]);

  useLayoutEffect(() => {
    if (!org_id || org_id === undefined) return;
    startTransition(() => {
      getAllProduct(org_id).then((data) => {
        dispatch({ type: "SET_PRODUCTS", payload: data.products || [] });
      });
    });
  }, [org_id]);

  const value = useMemo(() => ({ state, dispatch }), [state]);

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
