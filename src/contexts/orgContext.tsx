"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
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
}

export const OrgContext = createContext({} as OrgContextProperties);

const OrgContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [organizations, setOrganizations] = useState<Organisation[]>([]);
  const [isLoading, startTransition] = useTransition();
  const [monthlyData, setMonthlydata] = useState<MonthlyData | undefined>();
  const [dashboardData, setDashboardData] = useState<
    DashboardData | undefined
  >();
  const [products, setProducts] = useState<Product[]>([]);
  const [org_id] = useLocalStorage<string>("current_orgid", "");
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [isNewModal, setIsNewModal] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isOpen, updateOpen] = useState(false);
  const [isActionModal, setIsActionModal] = useState(false);
  const [active_filter, setActive_filter] = useState<ActiveFilter>("all");
  const [userOrg] = useLocalStorage<Organisation[]>("user_org", []);

  const isAnyModalOpen = isNewModal || isDelete || isOpen || isActionModal;

  useLayoutEffect(() => {
    if (organizations.length === 0) {
      startTransition(() => {
        getAllOrg().then((data) => {
          const fetchedOrganizations = data.organization || [];
          const newOrganizations = fetchedOrganizations.filter(
            (fetchedOrg: { organisation_id: string }) =>
              !organizations.some(
                (org) => org.organisation_id === fetchedOrg.organisation_id,
              ),
          );

          if (newOrganizations.length > 0) {
            setOrganizations((previousOrganizations) => [
              ...previousOrganizations,
              ...newOrganizations,
            ]);
          }
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
    }
  }, [organizations]);

  useEffect(() => {
    if (userOrg.length > 0) {
      const uniqueOrgs = userOrg.filter(
        (org) =>
          !organizations.some(
            (existingOrg) =>
              existingOrg.organisation_id === org.organisation_id,
          ),
      );
      setOrganizations((previousOrganizations) => [
        ...previousOrganizations,
        ...uniqueOrgs,
      ]);
    }
  }, [userOrg, organizations]);

  useEffect(() => {
    document.body.style.overflow = isAnyModalOpen ? "hidden" : "auto";

    const handleKeyDown = (entries: KeyboardEvent) => {
      if (entries.key === "Escape") {
        setIsNewModal(false);
        setIsDelete(false);
        updateOpen(false);
        setIsActionModal(false);
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
        setProducts(data.products || []);
      });
    });
  }, [org_id]);

  const value = useMemo(
    () => ({
      isLoading,
      organizations,
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
    }),
    [
      isLoading,
      organizations,
      monthlyData,
      dashboardData,
      products,
      selectedProduct,
      isNewModal,
      isDelete,
      isOpen,
      isActionModal,
      active_filter,
    ],
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

// "use client";

// import React, {
//   createContext,
//   useContext,
//   useEffect,
//   useLayoutEffect,
//   useMemo,
//   useReducer,
//   useTransition,
// } from "react";

// import { getAllProduct } from "~/actions/product";
// import { useLocalStorage } from "~/hooks/use-local-storage";
// import { DashboardData, MonthlyData, Organisation, Product } from "~/types";
// import {
//   getAllOrg,
//   getAnalytics,
//   getStatistics,
// } from "../actions/organization";

// type ActiveFilter = "in stock" | "out of stock" | "preorder" | "all";

// interface OrgState {
//   organizations: Organisation[];
//   isLoading: boolean;
//   monthlyData: MonthlyData | undefined;
//   dashboardData: DashboardData | undefined;
//   products: Product[];
//   selectedProduct: string;
//   isNewModal: boolean;
//   isDelete: boolean;
//   isOpen: boolean;
//   isActionModal: boolean;
//   active_filter: ActiveFilter;
// }

// type OrgAction =
//   | { type: "SET_ORGANIZATIONS"; payload: Organisation[] }
//   | { type: "SET_LOADING"; payload: boolean }
//   | { type: "SET_MONTHLY_DATA"; payload: MonthlyData | undefined }
//   | { type: "SET_DASHBOARD_DATA"; payload: DashboardData | undefined }
//   | { type: "SET_PRODUCTS"; payload: Product[] }
//   | { type: "SET_SELECTED_PRODUCT"; payload: string }
//   | { type: "TOGGLE_NEW_MODAL"; payload: boolean }
//   | { type: "TOGGLE_DELETE"; payload: boolean }
//   | { type: "TOGGLE_OPEN"; payload: boolean }
//   | { type: "TOGGLE_ACTION_MODAL"; payload: boolean }
//   | { type: "SET_ACTIVE_FILTER"; payload: ActiveFilter };

// const initialState: OrgState = {
//   organizations: [],
//   isLoading: false,
//   monthlyData: undefined,
//   dashboardData: undefined,
//   products: [],
//   selectedProduct: "",
//   isNewModal: false,
//   isDelete: false,
//   isOpen: false,
//   isActionModal: false,
//   active_filter: "all",
// };

// function orgReducer(state: OrgState, action: OrgAction): OrgState {
//   switch (action.type) {
//     case "SET_ORGANIZATIONS": {
//       return { ...state, organizations: action.payload };
//     }
//     case "SET_LOADING": {
//       return { ...state, isLoading: action.payload };
//     }
//     case "SET_MONTHLY_DATA": {
//       return { ...state, monthlyData: action.payload };
//     }
//     case "SET_DASHBOARD_DATA": {
//       return { ...state, dashboardData: action.payload };
//     }
//     case "SET_PRODUCTS": {
//       return { ...state, products: action.payload };
//     }
//     case "SET_SELECTED_PRODUCT": {
//       return { ...state, selectedProduct: action.payload };
//     }
//     case "TOGGLE_NEW_MODAL": {
//       return { ...state, isNewModal: action.payload };
//     }
//     case "TOGGLE_DELETE": {
//       return { ...state, isDelete: action.payload };
//     }
//     case "TOGGLE_OPEN": {
//       return { ...state, isOpen: action.payload };
//     }
//     case "TOGGLE_ACTION_MODAL": {
//       return { ...state, isActionModal: action.payload };
//     }
//     case "SET_ACTIVE_FILTER": {
//       return { ...state, active_filter: action.payload };
//     }
//     default: {
//       return state;
//     }
//   }
// }

// export const OrgContext = createContext<{
//   state: OrgState;
//   dispatch: React.Dispatch<OrgAction>;
// }>({ state: initialState, dispatch: () => {} });

// const OrgContextProvider = ({ children }: { children: React.ReactNode }) => {
//   const [state, dispatch] = useReducer(orgReducer, initialState);
//   const [, startTransition] = useTransition();
//   const [org_id] = useLocalStorage<string>("current_orgid", "");
//   const [userOrg] = useLocalStorage<Organisation[]>("user_org", []);

//   const isAnyModalOpen =
//     state.isNewModal || state.isDelete || state.isOpen || state.isActionModal;

//   useLayoutEffect(() => {
//     if (state.organizations.length === 0) {
//       startTransition(() => {
//         getAllOrg().then((data) => {
//           const fetchedOrganizations = data.organization || [];
//           const newOrganizations = fetchedOrganizations.filter(
//             (fetchedOrg: { organisation_id: string }) =>
//               !state.organizations.some(
//                 (org) => org.organisation_id === fetchedOrg.organisation_id,
//               ),
//           );

//           if (newOrganizations.length > 0) {
//             dispatch({
//               type: "SET_ORGANIZATIONS",
//               payload: [...state.organizations, ...newOrganizations],
//             });
//           }
//         });

//         getStatistics().then((subResponse) => {
//           dispatch({
//             type: "SET_DASHBOARD_DATA",
//             payload: subResponse.data,
//           });
//         });

//         getAnalytics().then((data) => {
//           const formattedData: MonthlyData = Object.keys(data.data).map(
//             (key) => ({
//               month: key,
//               revenue: data.data[key],
//             }),
//           );
//           dispatch({
//             type: "SET_MONTHLY_DATA",
//             payload: formattedData,
//           });
//         });
//       });
//     }
//   }, [state.organizations]);

//   useEffect(() => {
//     if (userOrg.length > 0) {
//       const uniqueOrgs = userOrg.filter(
//         (org) =>
//           !state.organizations.some(
//             (existingOrg) =>
//               existingOrg.organisation_id === org.organisation_id,
//           ),
//       );
//       dispatch({
//         type: "SET_ORGANIZATIONS",
//         payload: [...state.organizations, ...uniqueOrgs],
//       });
//     }
//   }, [userOrg]);

//   useEffect(() => {
//     document.body.style.overflow = isAnyModalOpen ? "hidden" : "auto";

//     const handleKeyDown = (entries: KeyboardEvent) => {
//       if (entries.key === "Escape") {
//         dispatch({ type: "TOGGLE_NEW_MODAL", payload: false });
//         dispatch({ type: "TOGGLE_DELETE", payload: false });
//         dispatch({ type: "TOGGLE_OPEN", payload: false });
//         dispatch({ type: "TOGGLE_ACTION_MODAL", payload: false });
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [isAnyModalOpen]);

//   useLayoutEffect(() => {
//     if (!org_id || org_id === undefined) return;
//     startTransition(() => {
//       getAllProduct(org_id).then((data) => {
//         dispatch({
//           type: "SET_PRODUCTS",
//           payload: data.products || [],
//         });
//       });
//     });
//   }, [org_id]);

//   const value = useMemo(
//     () => ({
//       state,
//       dispatch,
//     }),
//     [state],
//   );

//   return <OrgContext.Provider value={value}>{children}</OrgContext.Provider>;
// };

// export const useOrgContext = () => {
//   const context = useContext(OrgContext);

//   if (!context) {
//     throw new Error("useOrgContext must be used within a OrgContextProvider");
//   }
//   return context;
// };

// export default OrgContextProvider;
