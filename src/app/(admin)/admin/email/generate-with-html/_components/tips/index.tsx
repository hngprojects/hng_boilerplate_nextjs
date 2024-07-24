const tips = [
  "Ensure the link points directly to an HTML file containing the complete email template.",
  "The link should be accessible without requiring login or permissions",
  "Use static HTML pages that do not include dynamic content or scripts.",
  "Ensure the HTML content is well-structured and valid.",
];
const TipsCard = () => {
  return (
    <div className="rounded-[6px] border-[1px] border-primary bg-primary/10 px-5 py-4">
      <h4 className="text-semibold mb-3 text-sm font-semibold text-primary">
        Tips on Acceptable HTML Links
      </h4>
      <ul>
        {tips.map((tip, index) => (
          <li key={index} className="text-dark-neutral-dark-2 text-sm">
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TipsCard;
