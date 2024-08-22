import { Column, Container, Img, Row, Text } from "@react-email/components";

const EmailHeader = () => (
  <Container style={headerContainerStyle}>
    <Row style={headerRowStyle}>
      <Column align="center" style={headerColumnStyle}>
        <Img
          src="https://imgur.com/PQnOCZv.png"
          alt="boilerplate"
          height="18px"
          width="18px"
          style={imgStyle}
        />
        <Text style={textStyle}>Boilerplate.</Text>
      </Column>
    </Row>
  </Container>
);

const headerContainerStyle = {
  backgroundColor: "#E1D6D666",
  border: "1px solid #E1D6D666",
  padding: "10px",
  textAlign: "center",
  maxWidth: "792px",
  height: "122px",
  margin: "0 auto",
} as React.CSSProperties;

const headerRowStyle: React.CSSProperties = {
  width: "fit-content",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  gap: "10px",
};

const headerColumnStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center" as const,
  alignItems: "center" as const,
  height: "fit-content",
};

const imgStyle: React.CSSProperties = {
  display: "inline-block",
  marginRight: "10px",
};

const textStyle: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: 0,
};

export default EmailHeader;
