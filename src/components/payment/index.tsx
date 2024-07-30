const Payment = () => {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:px-10 xl:px-10">
      <div className="min-h-screen p-4">
        <div className="lg:gap- flex w-full flex-col justify-between md:flex-col md:gap-20 lg:flex-row">
          {/* Summary Section */}
          <div className="mb-5 md:mb-0 md:w-full lg:mb-0 lg:w-1/2">
            <h2 className="text-[20px] font-normal leading-[24.2px] text-[#71717A]">
              Subscribe to Boilerplates
            </h2>
            <p className="mb-[18.5px] mt-2 text-[36px] font-semibold leading-[43.57px]">
              $3000.00 <span className="text-sm text-[#71717A]">per month</span>
            </p>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                className="mr-2 h-[24px] w-[24px]"
              />
              <p>
                Pay annually <span className="text-[#E77F1E]">Save 20%</span>
              </p>
            </label>
            <div className="mt-6 pt-4">
              <div>
                <div className="flex justify-between pb-[25px]">
                  <div>
                    <span className="mb-[4px] text-[16px] font-medium leading-[24px]">
                      Boilerplates Premium
                    </span>
                    <p className="max-w-[345px] text-[14px] leading-[16.94px] text-[#71717A]">
                      The essentials to provide your best work for clients.
                      Billed monthly
                    </p>
                  </div>
                  <span className="text-[16px] font-medium leading-[24px]">
                    $3000.00
                  </span>
                </div>
                <hr className="pb-[25px]" />
                <div className="flex justify-between pb-[25px]">
                  <div>
                    <span className="mb-[4px] text-[16px] font-medium leading-[24px]">
                      Subtotal
                    </span>
                    <p className="max-w-[345px] text-[14px] leading-[16.94px] text-[#71717A]">
                      Add promotional code
                    </p>
                  </div>
                  <span className="text-[16px] font-medium leading-[24px]">
                    $3000.00
                  </span>
                </div>
                <hr />
              </div>

              <div className="flex justify-between pt-[25px]">
                <span className="mb-[4px] text-[16px] font-medium leading-[24px]">
                  Total due today
                </span>
                <span className="mb-[4px] text-[16px] font-medium leading-[24px]">
                  $3000.00
                </span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="md:w-full lg:w-1/2">
            <form className="space-y-6">
              <div className="flex flex-col rounded-[8px] border border-[#939393]">
                <div className="px-[12px] py-[16px]">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      className="mr-2 h-[24px] w-[24px]"
                    />
                    PayPal
                  </label>
                </div>
                <hr />
                <div className="px-[12px] py-[16px]">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="creditCard"
                      className="mr-2 h-[24px] w-[24px]"
                    />
                    Debit/Credit Card
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <label htmlFor="email" className="block">
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="Johnsmith@gmail.com"
                    className="mt-1 h-[64px] w-full rounded-[8px] border border-[#B2B0B0] p-3"
                  />
                </label>

                <label htmlFor="cardInformation" className="block">
                  <span>Card Information </span>
                  <input
                    type="email"
                    placeholder="Card Information"
                    className="mt-1 h-[64px] w-full rounded-[8px] border border-[#B2B0B0] p-3"
                  />
                </label>

                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="mt-1 h-[64px] w-1/2 rounded-[8px] border border-[#B2B0B0] p-3"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="mt-1 h-[64px] w-1/2 rounded-[8px] border border-[#B2B0B0] p-3"
                  />
                </div>

                <label htmlFor="cardholderName" className="block">
                  <span>Cardholder Name</span>
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="mt-1 h-[64px] w-full rounded-[8px] border border-[#B2B0B0] p-3"
                  />
                </label>

                <label htmlFor="countryOrRegion" className="block">
                  <span>Country or Region</span>
                  <select
                    className="h-[64px] w-full rounded-[8px] border border-[#B2B0B0] pl-[16px] pr-[24px]"
                    name=""
                    id=""
                  >
                    <option value="">Nigeria</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </label>

                <div className="pb-[20px] pt-[20.5px]">
                  <label className="text-16px font-inter flex items-center font-normal leading-[19.2px]">
                    <input type="radio" className="mr-2 h-[24px] w-[24px]" />
                    Are you a company
                  </label>
                </div>

                <div className="max-w-[531px] pb-[32px]">
                  <span className="font-inter text-[13px] font-normal leading-[23.4px]">
                    Your subscription will renew automatically every month as
                    one payment of $800. Cancel it anytime from your
                    subscription settings. By clicking &quot;Confirm and
                    pay&quot; you agree to the{" "}
                    <span className="text-[#F97316]">
                      Terms and Conditions.
                    </span>
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-orange-500 p-3 text-white"
              >
                Confirm & Pay
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
