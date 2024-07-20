interface TemplateListItemProperties {
  template: {
    id: number;
    name: string;
  };
  onPreview: (id: number) => void;
}

const TemplateListItem = ({
  template,
  onPreview,
}: TemplateListItemProperties) => (
  <div className="flex w-full items-center justify-between border-b p-5 pr-10">
    <div className="flex items-center gap-[21px]">
      <div className="h-[102px] w-[102px] bg-gray-400"></div>
      <p className="text-[#525252]">{template.name}</p>
    </div>
    <div className="flex gap-8">
      <p onClick={() => onPreview(template.id)}>Preview</p>
      <p>Edit</p>
    </div>
  </div>
);

export default TemplateListItem;
