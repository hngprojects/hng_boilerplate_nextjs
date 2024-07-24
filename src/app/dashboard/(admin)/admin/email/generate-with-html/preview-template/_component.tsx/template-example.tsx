export const templateOne = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>INBOUND 22 Email</title>
    <style>
      .container {
        width: 100%;
        max-width: 382px;
        margin: 0 auto;
        background-color: #ffffff;
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        padding: 0;
      }
      .header {
        background-color: #000000;
        color: #ffffff;
        text-align: center;
      }
      .header img {
        max-width: 100%;
        height: auto;
      }

      .content {
        color: #333333;
        padding: 2rem 1rem;
      }
      .content h2 {
        font-size: 20px;
        color: #ff6600;
      }
      .content p {
        font-size: 12px;
        line-height: 1.3rem;
      }
      .footer {
        text-align: center;
      }
      .button {
        background-color: #ff6600;
        color: #ffffff;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 4px;
        display: inline-block;
        margin: 20px 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1718221413/jqigzj4ysi46k9jhmm1c.jpg"
          alt="INBOUND 22"
        />
      </div>

      <div class="content">
        <p>
        Hi Chaviva,
          Been a long time...and we've missed you as much as you've missed us.
          This year, we're excited to introduce the first ever
          <strong>INBOUND hybrid experience</strong>, including the return of
          our in-person event in Boston (safety first, in compliance with all
          state and federal regulations and recommendations) and an upgraded
          online, fully immersive experience. Passes are now on sale, and you
          can learn about our pass types on our registration page or read the
          summary of pass perks below. Finally, the countdown begins!
        </p>
        <br />
        <p>— Forever Yours, The INBOUND Team</p>
      </div>
      <div class="footer">
        <a href="#" class="button">Register here</a>
      </div>
    </div>
  </body>
</html>`;

export const templateTwo = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Styled Email Template</title>
    <style>
      .email-container {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #cccccc50;
        max-width: 482px;
        width: 100%;
        margin: 0 auto;
      }
      .header {
        background-color: hsl(25 95% 53%);
        color: white;
        padding: 10px 20px;
        text-align: center;
        border-radius: 8px 8px 0 0;
        position: relative;
      }
      .header img {
        width: 100%;
        height: 100%;
        border-radius: 8px 8px 0 0;
      }
      .content {
        font-size: 10px;
        padding: 20px;
        line-height: 1.6;
      }
      .footer {
        background-color: hsl(25 95% 53%);
        color: white;
        text-align: center;
        padding: 10px 20px;
        border-radius: 0 0 8px 8px;
        font-size: 0.8em;
      }
      .button {
        display: inline-block;
        background-color: hsl(25 95% 53%);
        color: white;
        padding: 10px 20px;
        margin-top: 10px;
        border-radius: 5px;
        text-decoration: none;
      }
      .button:hover {
        background-color: #45a049;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <img
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1718221413/jqigzj4ysi46k9jhmm1c.jpg"
          alt="Header Image"
        />
        <h1>Welcome to Our Newsletter</h1>
      </div>
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          deleniti, sit unde ullam consequuntur est at! Ullam officia possimus
          maiores nam cumque earum atque dolores provident! Aliquam iste quaerat
          quasi placeat tenetur, voluptatum inventore ad ratione, veniam error
          illo repellendus eaque quam magnam nobis autem totam in veritatis
          doloribus soluta unde? Nemo sequi ipsam tempora pariatur hic veniam
          harum magni provident iste iusto
        </p>
        <br />
        <p>
          qui blanditiis, totam aspernatur natus laboriosam eligendi itaque cum
          quidem voluptate officiis dolorum ex beatae aut dolores? Dolorem odit
          repellat, nisi eveniet perferendis quasi eum facilis nemo? Eum iure
          debitis officiis pariatur, reprehenderit voluptates perferendis
          perspiciatis optio!
        </p>
        <p>
          We hope you find this information helpful and engaging. As always, we
          welcome your feedback and suggestions. Feel free to
          <a href="mailto:contact@example.com">contact us</a> with any questions
          or comments.
        </p>
        <a href="https://www.example.com" class="button">Learn More</a>
      </div>
      <div class="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
`;
