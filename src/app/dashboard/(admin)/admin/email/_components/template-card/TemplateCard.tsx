import axios from "axios";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

interface ITemplateCard {
  setTogglePreview: Dispatch<SetStateAction<boolean>>;
  togglePreview: boolean;
  templateId: string;
}

interface EmailTemplate {
  id: string;
  title: string;
  template: string;
  status: boolean;
  created_at: string;
  updated_at: string;
}

const fetchTemplate = async (id: string) => {
  try {
    const response = await axios.get(
      `https://virtserver.swaggerhub.com/EzeanyimHenry(Oracus)/GetSingleEmailTemplate/1.0.0/api/v1/email-templates/${id}`,
      {
        headers: {
          Authorization: `Bearer YOUR_JWT_TOKEN`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching template:", error);
    throw error;
  }
};

const TemplateCard: FC<ITemplateCard> = ({
  togglePreview,
  setTogglePreview,
  templateId,
}) => {
  const [template, setTemplate] = useState<EmailTemplate | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTemplate = async () => {
      try {
        const data = await fetchTemplate(templateId);
        setTemplate(data);
      } catch {
        setError("Failed to load template.");
      }
    };

    if (templateId) {
      loadTemplate();
    }
  }, [templateId]);

  return (
    <div
      onClick={() => setTogglePreview(!togglePreview)}
      className="flex cursor-pointer items-center justify-between gap-2 border-b-[1px] border-border px-5 py-6 transition-all duration-300 hover:border-primary hover:bg-neutral-dark-1/5"
    >
      <div className="flex flex-1 items-center justify-start gap-5">
        <div className="h-[102px] w-full max-w-[102px] rounded-[3px] border-[1px] border-border"></div>
        <h4>{template ? template.title : "Loading..."}</h4>
      </div>
      <div className="flex w-full max-w-[102px] items-center justify-between gap-2">
        <span className="duration-all cursor-pointer text-xs font-medium text-neutral-dark-2 transition-all hover:text-primary">
          Preview
        </span>
        <span className="duration-all cursor-pointer text-xs font-medium text-neutral-dark-2 transition-all hover:text-primary">
          Edit
        </span>
      </div>
    </div>
  );
};

export default TemplateCard;
