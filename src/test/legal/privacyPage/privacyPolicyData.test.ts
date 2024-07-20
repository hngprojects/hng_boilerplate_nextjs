import privacyPolicyData, {
  getTableOfContents,
} from "~/components/layouts/Legal/PrivacyPolicy/constants/privacyPolicyData";

describe("the Data for the Privacy Policy Page", () => {
  it("contains the expected number of sections", () => {
    expect.hasAssertions();
    expect(privacyPolicyData).toHaveLength(9);
  });

  it("each section has the required properties", () => {
    expect.hasAssertions();
    for (const section of privacyPolicyData) {
      expect(section).toHaveProperty("id");
      expect(section).toHaveProperty("title");
      expect(section).toHaveProperty("description");
      expect(section.description).toHaveProperty("text");
    }
  });

  it("each section's description list is an array if present", () => {
    expect.hasAssertions();
    for (const section of privacyPolicyData) {
      const hasList = !!section.description.list;
      expect(hasList).toBe(Array.isArray(section.description.list));
    }
  });

  it("each section's description list items have the required properties if present", () => {
    expect.hasAssertions();

    const itemsWithLists: { title: string; body: string }[] = [];
    for (const section of privacyPolicyData) {
      if (section.description.list) {
        itemsWithLists.push(...section.description.list);
      }
    }

    for (const item of itemsWithLists) {
      expect(item).toHaveProperty("title");
      expect(item).toHaveProperty("body");
    }
  });

  it("generates the correct table of contents with the expected number of items", () => {
    expect.hasAssertions();
    const tableOfContents = getTableOfContents(privacyPolicyData);
    expect(tableOfContents).toHaveLength(privacyPolicyData.length);
  });

  it("each table of contents item has the required properties and correct values", () => {
    expect.hasAssertions();
    const tableOfContents = getTableOfContents(privacyPolicyData);

    let index = 0;
    for (const item of tableOfContents) {
      expect(item).toHaveProperty("href");
      expect(item).toHaveProperty("label");
      expect(item.href).toBe(`#${privacyPolicyData[index].id}`);
      expect(item.label).toBe(privacyPolicyData[index].title);
      index++;
    }
  });
});
