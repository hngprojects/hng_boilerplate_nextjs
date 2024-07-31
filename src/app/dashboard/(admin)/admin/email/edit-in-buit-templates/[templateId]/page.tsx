"use client";

import { EllipsisVertical, Eye, Redo, Undo } from "lucide-react";
import { useReducer, useState } from "react";

import { Button } from "~/components/common/common-button";
import AddLogo from "../_components/AddLogo";
import EditFooter from "../_components/EditFooter";
import ImageBody from "../_components/ImageBody";
import SelectModal from "../_components/SelectModal";
import SideEditNav from "../_components/SideEditNav";
import PageHeader from "../../_components/page-header";

// Define the types for actions
type ActionType =
  | { type: "MOVE_UP"; index: number }
  | { type: "MOVE_DOWN"; index: number }
  | { type: "COPY"; index: number }
  | { type: "DELETE"; index: number }
  | { type: "ADD" };

// Define the initial components
const initialComponents = [
  { id: "AddLogo", component: <AddLogo /> },
  { id: "ImageBody", component: <ImageBody /> },
  { id: "EditFooter", component: <EditFooter /> },
];

// Define the reducer
const reducer = (state: any[], action: ActionType) => {
  const newState = [...state];
  switch (action.type) {
    case "MOVE_UP": {
      if (action.index > 0) {
        [newState[action.index], newState[action.index - 1]] = [
          newState[action.index - 1],
          newState[action.index],
        ];
      }
      break;
    }
    case "MOVE_DOWN": {
      if (action.index < state.length - 1) {
        [newState[action.index], newState[action.index + 1]] = [
          newState[action.index + 1],
          newState[action.index],
        ];
      }
      break;
    }
    case "COPY": {
      newState.splice(action.index, 0, state[action.index]);
      break;
    }
    case "DELETE": {
      newState.splice(action.index, 1);
      break;
    }
    case "ADD": {
      newState.push({
        id: "NewComponent",
        component: (
          <div className="new-component-placeholder">New Component</div>
        ),
      });
      break;
    }
    default: {
      break;
    }
  }
  return newState;
};

export default function Page() {
  const [components, dispatch] = useReducer(reducer, initialComponents);
  const [showSelectModal, setShowSelectModal] = useState(false);

  const handleMoveUp = (index: number) => dispatch({ type: "MOVE_UP", index });
  const handleMoveDown = (index: number) =>
    dispatch({ type: "MOVE_DOWN", index });
  const handleCopy = (index: number) => dispatch({ type: "COPY", index });
  const handleDelete = (index: number) => dispatch({ type: "DELETE", index });
  const handleAdd = () => setShowSelectModal(true);

  const handleCloseModal = () => setShowSelectModal(false);

  const handleSelectComponent = (component: JSX.Element) => {
    dispatch({ type: "ADD" });
    setShowSelectModal(false);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-between sm:flex-row sm:gap-6">
        <PageHeader
          title="Edit template"
          description="Paste your HTML code below to generate your email template."
        />
        <div className="w-full sm:max-w-[40%]">
          <div className="flex w-full items-center justify-between">
            <button title="Preview">
              <Eye color="#141414" />
            </button>
            <button title="Undo">
              <Undo color="#141414" />
            </button>
            <button title="Redo">
              <Redo color="#141414" />
            </button>
            <Button className="bg-primary">Send</Button>
            <button>
              <EllipsisVertical color="#141414" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12sm:mt-20 md:ml-4 lg:mb-[213px] lg:ml-[89px] lg:mt-[156px]">
        <div className="flex w-full flex-col items-center">
          {components.map((comp, index) => (
            <div
              key={index}
              className="mb-4 flex w-full flex-row-reverse items-center"
            >
              <SideEditNav
                onMoveUp={() => handleMoveUp(index)}
                onMoveDown={() => handleMoveDown(index)}
                onCopy={() => handleCopy(index)}
                onDelete={() => handleDelete(index)}
                onAdd={handleAdd}
              />
              <div className="w-10/12">{comp.component}</div>
            </div>
          ))}
        </div>
        {showSelectModal && <SelectModal onSelect={handleSelectComponent} />}
      </div>
    </div>
  );
}
