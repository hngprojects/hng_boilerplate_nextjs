"use client";

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

import user from "../../../../../../public/images/user.png";

const Discard = () => {
  alert("Changes discard");
};

const ProductDetail = () => {
  const [textValue, setTextValue] = useState<string>("Product 2");
  const [messageValue, setmessageValue] = useState<string>(
    "A fusion of ripe bananas, pure honey, and succulent raspberries with our bread. Crafted to perfection.",
  );
  const [image, setImage] = useState<string | undefined>();
  const [smallQuantity, setSmallQuantity] = useState<number>(0);
  const [standardQuantity, setStandardQuantity] = useState<number>(24);
  const [largeQuantity, setLargeQuantity] = useState<number>(0);
  const [smallPrice, setSmallPrice] = useState<number | string>("$12.00");
  const [standardPrice, setStandardPrice] = useState<number | string>("$29.00");
  const [largePrice, setLargePrice] = useState<number | string>("$32.00");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !textValue.trim() ||
      !messageValue.trim() ||
      !smallQuantity ||
      !standardQuantity ||
      !largeQuantity ||
      !smallPrice ||
      !standardPrice ||
      !largePrice ||
      !largePrice ||
      !image
    ) {
      alert(
        "Please fill in all the necessary fields including your image before submitting.",
      );
      return;
    }
    alert("Details updated");
  };

  const handleSmallQty = (event: ChangeEvent<HTMLInputElement>) => {
    setSmallQuantity(Number(event.target.value));
  };

  const handleStandardQty = (event: ChangeEvent<HTMLInputElement>) => {
    setStandardQuantity(Number(event.target.value));
  };

  const handleLargeQty = (event: ChangeEvent<HTMLInputElement>) => {
    setLargeQuantity(Number(event.target.value));
  };

  //upload media section
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  //comment section
  const [comments, setComments] = useState([
    {
      name: "Adetunji Oluwatobi",
      date: "02 Jan, 2020",
      time: "Wed 02:30pm",
      comment: "Living a balanced lifestyle is essential...",
    },
    {
      name: "Afolabi Oyewole",
      date: "02 Jan, 2020",
      time: "Wed 02:30pm",
      comment: "Living a balanced lifestyle is essential...",
    },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString("default", { month: "short" })}, ${currentDate.getFullYear()}`;
      const formattedTime = `${currentDate.toLocaleString("default", { weekday: "short" })} ${currentDate.getHours()}:${currentDate.getMinutes() < 10 ? "0" : ""}${currentDate.getMinutes()}pm`;

      const commentToAdd = {
        name: "New User",
        date: formattedDate,
        time: formattedTime,
        comment: newComment,
      };

      setComments([...comments, commentToAdd]);
      setNewComment("");
    }
  };

  return (
    <div className="p-6 pt-16">
      <form onSubmit={handleSubmit}>
        <div className="mb-6 w-[240px] rounded-md bg-gray-100 p-2">
          <div className="list-reset flex text-gray-600">
            <Link
              href="/dashboard/products"
              className="font-semibold text-black"
            >
              Products
            </Link>

            <span className="mx-2">{">"}</span>

            <Link href="" className="text-gray-500">
              Product Details
            </Link>
          </div>
        </div>
        <div className="mb-6 flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div className="flex items-center">
            <button className="mr-2 rounded-md border-[1px] px-1 font-[700] text-black">
              ←
            </button>
            <h1 className="mr-2 text-[16px] font-semibold">Product 2</h1>
            <span className="mr-2 text-green-500">● In stock</span>
          </div>
          <div className="mt-5 flex items-center sm:mt-0">
            <div
              onClick={Discard}
              className="disabled mr-2 rounded-md border-[1px] p-2 text-gray-500"
            >
              Discard
            </div>
            <button
              type="submit"
              className="rounded bg-orange-500 px-4 py-2 text-white"
            >
              Save changes
            </button>
          </div>
        </div>

        <div className="mb-4 flex flex-col justify-between md:flex-row">
          <div className="flex flex-col md:basis-[63%]">
            <div className="mb-6 rounded-md bg-white p-4 shadow-md">
              <h2 className="text-lg font-semibold">Product Details</h2>
              <p className="mb-2 text-sm text-gray-500">
                Make quick changes to your product.
              </p>
              <hr className="mb-6" />

              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium">
                  Title<small className="text-red-600">*</small>{" "}
                </label>
                <input
                  type="text"
                  value={textValue}
                  onChange={(event) => setTextValue(event.target.value)}
                  placeholder="Product title"
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none"
                />
              </div>
              <div className="">
                <label className="mb-1 block text-sm font-medium">
                  Description:
                </label>
                <textarea
                  value={messageValue}
                  onChange={(event) => setmessageValue(event.target.value)}
                  className="w-full rounded-md border border-gray-300 p-2 focus:outline-none"
                  rows={4}
                  maxLength={170}
                  placeholder="Product description."
                ></textarea>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-white p-4 shadow-md">
              <h2 className="text-lg font-bold">Stock</h2>
              <p className="leading-2 text-gray-500">Add and remove products</p>
              <hr className="mb-6" />
              <table className="w-full rounded-lg border-[1px] text-left">
                <thead className="bg-[#F1F5F9] p-2">
                  <tr>
                    <th className="border-b px-2 py-4">Size</th>
                    <th className="border-b px-2 py-4">Stock</th>
                    <th className="border-b px-2 py-4">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="w-full p-2">
                    <td className="pb-2 pl-2 pt-2">Small</td>
                    <td>
                      <input
                        type="number"
                        className="my-2 w-20 rounded-md border border-gray-300 p-1 outline-none sm:w-32"
                        value={smallQuantity}
                        onChange={handleSmallQty}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="my-2 w-20 rounded-md border border-gray-300 p-1 outline-none sm:w-32"
                        value={smallPrice}
                        onChange={(event) => setSmallPrice(event.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <div className="w-full border-b"></div>
                    </td>
                  </tr>
                  <tr className="w-full p-2">
                    <td className="my-2 pb-2 pl-2 pt-2">Standard</td>
                    <td>
                      <input
                        type="number"
                        className="w-20 rounded-md border border-gray-300 p-1 outline-none sm:w-32"
                        value={standardQuantity}
                        onChange={handleStandardQty}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="my-2 w-20 rounded-md border border-gray-300 p-1 outline-none sm:w-32"
                        value={standardPrice}
                        onChange={(event) =>
                          setStandardPrice(event.target.value)
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <div className="w-full border-b"></div>
                    </td>
                  </tr>
                  <tr className="w-full p-8">
                    <td className="my-2 pb-2 pl-2 pt-2">Large</td>
                    <td>
                      <input
                        type="number"
                        className="my-2 w-20 rounded-md border border-gray-300 p-1 outline-none sm:w-32"
                        value={largeQuantity}
                        onChange={handleLargeQty}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="my-2 w-20 rounded-md border border-gray-300 p-1 outline-none sm:w-32"
                        value={largePrice}
                        onChange={(event) => setLargePrice(event.target.value)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <button className="my-2 mt-4 cursor-pointer rounded-md border-[1px] bg-white px-4 py-2">
                Add a Variant
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col md:mt-0 md:basis-[33%]">
            <div className="mb-6 h-[390px] rounded-md bg-white p-4 shadow-md">
              <h2 className="text-lg font-semibold">Media</h2>
              <hr className="mb-6" />
              <p className="mb-2 text-sm text-gray-500">
                Upload media for your product.
              </p>
              <div className="flex justify-between">
                <div className="flex h-[200px] basis-[80%] items-center justify-center rounded-b-md bg-[#FAFAFA] p-6 text-center outline-none">
                  {image ? (
                    <Image
                      src={image}
                      alt="Uploaded"
                      width={100}
                      height={100}
                      className="h-full w-full rounded-md object-cover"
                    />
                  ) : (
                    <p className="text-gray-400">Image here</p>
                  )}
                </div>
                <label className="flex h-[200px] basis-[10%] cursor-pointer items-center justify-center rounded-md border-[1px] bg-white px-4 py-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  +
                </label>
              </div>
            </div>

            <div className="">
              <div className="mb-6 rounded-md bg-white p-4 shadow-md">
                <h2 className="text-lg font-semibold">Status</h2>
                <p className="mb-2 text-sm text-gray-500">Availability</p>
                <hr className="my-4" />
                <select className="mb-4 w-full rounded-md border border-gray-300 p-2 outline-none">
                  <option>In Stock</option>
                  <option>Out of Stock</option>
                  <option>Low in Stock</option>
                </select>
              </div>
              <div className="rounded-md bg-white p-4 shadow-md">
                <h2 className="mt-2 text-lg font-semibold">Archive</h2>
                <p className="mb-2 text-sm text-gray-500">Archive a product.</p>
                <hr className="my-3" />
                <button className="mb-4 w-full rounded-md bg-gray-200 px-4 py-2">
                  Archive Product 2
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="mt-8 rounded-md bg-white p-4 shadow-md">
        <h2 className="mb-4 text-lg font-semibold">Comments</h2>
        {comments.map((comment, index) => (
          <div key={index} className="mb-4">
            <div className="mb-2 flex items-center">
              <Image
                src={user}
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold">{comment.name}</p>
                <p className="text-sm text-gray-500">{`${comment.date} ${comment.time}`}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">{comment.comment}</p>
          </div>
        ))}
        <textarea
          className="w-full rounded-md border-[1px] border-orange-500 bg-[#FAFAFA] p-2 focus:outline-none"
          rows={4}
          placeholder="Add a comment..."
          value={newComment}
          onChange={handleCommentChange}
        ></textarea>
        <div className="flex justify-end">
          <button
            onClick={handleCommentSubmit}
            type="submit"
            className="mt-2 rounded-md bg-orange-500 px-4 py-2 text-white"
          >
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
