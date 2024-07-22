import { FC } from "react";

import { EditorProvider } from "~/components/common/context/editor-context";
import ReusableTemplateEditorBlock from "~/components/common/template/templateEditorBlock";

const PlaceholderContent: FC = () => {
  return (
    <EditorProvider>
      <div>
        <ReusableTemplateEditorBlock
          id="1"
          content="<p>We're thrilled to have you join us. Experience quality and innovation like never before.  Our product is made to fit your needs and make your life easier.</p><br/>
                   <p>Here's what you can look forward to:</p>
                   <ul class='list-none pl-4'>
                     <li>Exclusive Offers: Enjoy special promotions and discounts available only to our members.</li>
                     <li>Exclusive Offers: Enjoy special promotions and discounts available only to our members.</li>
                     <li>Exclusive Offers: Enjoy special promotions and discounts available only to our members.</li>
                   </ul>"
        />
      </div>
    </EditorProvider>
  );
};

export default PlaceholderContent;
