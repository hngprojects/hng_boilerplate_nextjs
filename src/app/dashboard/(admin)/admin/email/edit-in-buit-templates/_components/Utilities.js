export const genAddLogo = (_img_) => {
  const styles = `
      * {
        margin: 0;
        padding: 0;
      }
      .logoContainer {
        width: calc(100% - 2rem);
        display: flex;
        justify-content: center;
        background-color: white;
        padding: 4rem 1rem /* 16px */;
      }
      .logoSubContainer {
        height: 10rem /* 208px */;
      }
      .logo {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
  `;
  const body = `
        <div class="logoContainer lg:w-4/5">
        <div class="logoSubContainer">
            <img
                src="${_img_}"
                alt="Selected"
                class="logo"
            />
        </div>
        </div>
    `;

  return { style: styles, body: body };
};

export const genImageBody = (_img_, _header_, _subHeader_) => {
  const styles = `
      .imageContainer {
        width: calc(100% - 2rem);
        display: flex;
        justify-content: center;
        background-color: white;
        padding: 4rem 1rem /* 16px */;
      }
      .imageSubContainer {
        height: 20rem /* 208px */;
        width: 100%;
        position: relative;
      }
      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .imageTextContainer {
        display: flex;
        flex-flow: column;
        align-items: center;
        padding-bottom: 4rem;
      }
  `;
  const body = `
    <div class="imageContainer">
      <div class="imageSubContainer">
        <image
          src="${_img_}"
          alt="Selected"
          class="image"
        />
        </div>
    </div>
    <div class="imageTextContainer">
      <h1>${_header_}</h1>
      <br/>
      <h3>${_subHeader_}</h3>
    </div>
    `;

  return { style: styles, body: body };
};

export const genEditBody = (_paragraph_) => {
  const styles = `
      .editBodyContainer {
        width: calc(100% - 3rem);
        display: flex;
        justify-content: center;
        background-color: #ffffff;
        padding: 4rem 1.5rem /* 16px */;
      }
  `;
  const body = `
    <div class="editBodyContainer">
      <p>${_paragraph_}</p>
    </div>
    `;

  return { style: styles, body: body };
};

export const genEditFooter = () => {
  const styles = `
      .editFooterContainer {
        padding: 5rem 2rem 2rem 2rem;
      }
      .editFooterIconContainer {
        margin-bottom: 1rem /* 16px */;
        display: flex;
        gap: 0.7rem;
        justify-content: center;
        color: #4b5563 /* #4b5563 */;
      }
      .btn {
        background-color: transparent;
        border: none;
      }
      p {
        text-align: center;
      }
      .line {
        width: 50%;
        height: 1px;
        background-color: rgb(212, 212, 212);
        margin: 2rem auto;
      }
  `;
  const body = `
    <div class="editFooterContainer">
      <div class="editFooterIconContainer">
        <button class="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M6 13H4V6h2zM5 5a1 1 0 1 1 0-2a1 1 0 1 1 0 2m8 8h-2V9a1 1 0 1 0-2 0v4H7V6h2v1.241C9.412 6.675 10.044 6 10.75 6C11.994 6 13 7.119 13 8.5z"
            />
          </svg>
        </button>
        <button class="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            height="2.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"
            />
          </svg>
        </button>
        <button class="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
            />
          </svg>
        </button>
      </div>
      <div class="py-10">
        <p
          class="border-b border-dashed border-gray-300 pb-12 text-center text-sm text-gray-500 md:text-left"
        >
          Thank you for choosing Boilerplate. Need help?
          <a href="#" class="">
            Contact our customer support
          </a>
        </p>
        <div class="line"></div>
        <p class="pt-10 text-center text-sm text-gray-600 md:text-left">
          You are receiving this email because you signed up at Boilerplate.com.
          Want to change how you receive these emails?
        </p>
        <p class="mt-10 text-center text-sm text-gray-600 md:text-left">
          You can 
          <a href="#" class="font-semibold text-black">
            update your preferences </a
          > or 
          <a href="#" class="font-semibold text-black">
            unsubscribe from this list
          </a>
          .
        </p>
      </div>
    </div>
    `;

  return { style: styles, body: body };
};
