import { render, screen } from "@testing-library/react";
import Pricingplan from "./Pricingplan";

test('renders monthly basic plan correctly', () => {
    const { getByText, getByRole, queryByText } = render(<Pricingplan period="monthly" plan="Basic" />);
  
    expect(getByText('Basic')).toBeInTheDocument();
    expect(getByText('$800')).toBeInTheDocument();
    expect(getByRole('list')).toBeInTheDocument(); 
    expect(queryByText('greyed')).not.toBeInTheDocument();
  });

  test('renders monthly premium plan correctly', () => {
    const { getByText, getByRole } = render(<Pricingplan period="monthly" plan="Premium" />);
  
    expect(getByText('Premium')).toBeInTheDocument();
    expect(getByText('$3,000')).toBeInTheDocument();
    expect(getByRole('list')).toBeInTheDocument();
  });
  
  test('renders annually basic plan correctly', () => {
    const { getByText, getByRole } = render(<Pricingplan period="annually" plan="Basic" />);
  
    expect(getByText('Basic')).toBeInTheDocument();
    expect(getByText('$500')).toBeInTheDocument();
    expect(getByRole('list')).toBeInTheDocument();
  });

  test('renders annually premium plan correctly', () => {
    const { getByText, getByRole, queryByText } = render(<Pricingplan period="annually" plan="Premium" />);
  
    expect(getByText('Premium')).toBeInTheDocument();
    expect(getByText('$2,000')).toBeInTheDocument();
    expect(getByRole('list')).toBeInTheDocument();
  });
  
  