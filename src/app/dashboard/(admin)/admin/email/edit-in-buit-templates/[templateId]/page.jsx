"use client";

import { EllipsisVertical, Eye, Redo, Undo } from "lucide-react";
import { useReducer } from "react";

import { Button } from "~/components/common/common-button";
import AddLogo from "../_components/AddLogo";
import EditFooter from "../_components/EditFooter";
import FooterIcons from "../_components/FooterIcons";
import ImageBody from "../_components/ImageBody";
import SelectModal from "../_components/SelectModal";
import SideEditNav from "../_components/SideEditNav";
import {
  genAddLogo,
  genEditBody,
  genEditFooter,
  genImageBody,
} from "../_components/Utilities";
import PageHeader from "../../_components/page-header";

// Define the initial components
const initialComponents = [
  { id: "AddLogo", img: "" },
  {
    id: "ImageBody",
    img: "",
    header: "Welcome to Boilerplate!",
    subheader: "Thanks for signing up",
  },
  { id: "EditBody", paragraph: "Welcome to Boilerplate!" },
  {
    id: "EditFooter",
  },
];

// Define the types for actions
const handleImageChange = (event, ind) => {
  const file = event.target.files?.[0];

  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      initialComponents[ind].img = reader.result ?? "";
    };
    reader.readAsDataURL(file);
  }

  return file;
};

const handleHeaderChange = (event, ind) => {
  const value = event.target.value;

  initialComponents[ind].header = value;
  return value;
};

const handleSubheaderChange = (event, ind) => {
  const value = event.target.value;

  initialComponents[ind].subheader = value;
  return value;
};

const handleParagraphChange = (event, ind) => {
  const value = event.target.value;

  initialComponents[ind].paragraph = value;
  return value;
};

// Define the reducer
const reducer = (state, action) => {
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
        id: action.component,
      });
      break;
    }
    default: {
      break;
    }
  }
  return newState;
};

const saveTemplate = () => {
  // console.log("*************");
  // console.log(initialComponents);
  // console.log("*************");
  const _data_ = {
    styles: "",
    body: "",
  };

  for (const component of initialComponents) {
    // console.log(component);

    switch (component.id) {
      case "AddLogo": {
        const data = genAddLogo(component.img);

        _data_.styles += data.style;
        _data_.body += data.body;

        break;
      }
      case "ImageBody": {
        const data = genImageBody(
          component.img,
          component.header,
          component.subheader,
        );

        _data_.styles += data.style;
        _data_.body += data.body;

        break;
      }
      case "EditBody": {
        const data = genEditBody(component.paragraph);

        _data_.styles += data.style;
        _data_.body += data.body;

        break;
      }
      case "EditFooter": {
        const data = genEditFooter();

        _data_.styles += data.style;
        _data_.body += data.body;

        break;
      }
      // No default
    }
  }

  const _conplete_data_ = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email-Template</title>

          <style>
            .container {
              width: 100%;
              margin: auto;
            }
            @media (min-width: 1024px) {
              .container {
                width: 70%;
                margin: auto
              }
            }
            @media (min-width: 768px) {
              .container {
                width: 80%;
                margin: auto
              }
            }
            @media (min-width: 640px) {
              .container {
                width: 90%;
                margin: auto
              }
            }
            ${_data_.styles}
          </style>
      </head>
      <body>
        <div class="container">
        ${_data_.body}
        </div>
        <span id="_Template_Key_" style="display: none;pointer-events: none;opacity: 0;">${JSON.stringify(initialComponents)}</span>
      </body>
      </html>
    `;

  console.log(_conplete_data_);
};

export default function Page() {
  const [components, dispatch] = useReducer(reducer, initialComponents);

  const handleMoveUp = (index) => dispatch({ type: "MOVE_UP", index });
  const handleMoveDown = (index) => dispatch({ type: "MOVE_DOWN", index });
  const handleCopy = (index) => dispatch({ type: "COPY", index });
  const handleDelete = (index) => dispatch({ type: "DELETE", index });

  const handleSelectComponent = (comp) => {
    dispatch({ type: "ADD", component: comp });
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
            <Button className="bg-primary" onClick={saveTemplate}>
              Save
            </Button>
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
                // onAdd={handleAdd}
              />
              <div className="w-10/12">
                {comp.id === "AddLogo" ? (
                  <AddLogo
                    handleImage={handleImageChange}
                    img={comp?.img}
                    index={index}
                  />
                ) : comp.id === "ImageBody" ? (
                  <ImageBody
                    handleImage={handleImageChange}
                    handleHeader={handleHeaderChange}
                    handleSubheader={handleSubheaderChange}
                    img={comp?.img}
                    index={index}
                    header={comp?.header}
                    subheader={comp?.subheader}
                  />
                ) : comp.id === "EditBody" ? (
                  <FooterIcons
                    handleParagraph={handleParagraphChange}
                    index={index}
                    paragraph={comp?.paragraph}
                  />
                ) : comp.id === "EditFooter" ? (
                  <EditFooter />
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
        <SelectModal
          onSelect={handleSelectComponent}
          data={initialComponents}
        />
      </div>
    </div>
  );
}
