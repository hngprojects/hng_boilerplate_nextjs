import { Heading, Section, Text } from "@react-email/components";
import React, { ReactNode } from "react";

export interface ITemplateTableProperties {
  title?: string;
  subTitle?: string;
  data: {
    key: string;
    values: (string | ReactNode)[];
  }[];
}

const tableStyles: React.CSSProperties = {
  backgroundColor: "#F6F8FB",
  borderCollapse: "collapse",
  width: "100%",
};

const tableCellStyles: React.CSSProperties = {
  border: "1px solid #E1E1E1",
  padding: "24px",
};

const headingStyles: React.CSSProperties = {
  fontSize: "18px",
  color: "#333",
  margin: "0",
};

const subHeadingStyles: React.CSSProperties = {
  fontSize: "16px",
  color: "#666",
  margin: "0",
};

const rowSeparatorStyles: React.CSSProperties = {
  // borderBottom: "1px solid #E1E1E1",
};

export function TemplateTable({
  data,
  title,
  subTitle,
}: ITemplateTableProperties) {
  return (
    <>
      <Section style={{ margin: "1rem 0", color: "#333" }}>
        <Heading as="h6" style={headingStyles}>
          {title}
        </Heading>
        <Text style={subHeadingStyles}>{subTitle}</Text>
      </Section>
      <table style={tableStyles}>
        <tbody>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <tr>
                <td style={{ ...tableCellStyles, textAlign: "left" }}>
                  {item.key}
                </td>
                {item.values.map((value, valueIndex) => (
                  <td
                    key={valueIndex}
                    style={{
                      ...tableCellStyles,
                      textAlign: "right",
                      fontWeight: "700",
                      color: "#000",
                    }}
                  >
                    {value}
                  </td>
                ))}
              </tr>
              <tr>
                <td
                  colSpan={item.values.length + 1}
                  style={rowSeparatorStyles}
                />
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
}
