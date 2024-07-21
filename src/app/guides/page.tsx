"use client";

import { Orbit, Plus } from "lucide-react";
import React, { useState } from "react";

import Badge from "~/components/common/Badge/Badge";
import { Breadcrumb } from "~/components/common/Breadcrumb";
import CustomButton from "~/components/common/Button/button";
import HBPCommentBox from "~/components/common/Comment";
import { commentsData } from "~/components/common/Comment/ComentData";
import CustomInput from "~/components/common/Input/input";
import Sidebar from "~/components/layouts/Sidebar";
import CharacterLimitTextarea from "../../components/common/CharacterLimitTextarea";

const StyleGuide: React.FC = () => {
  const [text, setText] = useState("");

  const handleTextChange = (newValue: string) => {
    setText(newValue);
  };

  return (
    <main className="flex min-h-screen flex-col items-start gap-7 overflow-hidden p-6 sm:p-12 md:p-24">
      <h2 className="text-2xl font-semibold">Color Guides</h2>
      <div
        className="grid w-full items-start gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}
      >
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-default px-4 py-4 text-background">
          bg-default, text-background
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg border border-border bg-background px-4 py-4 text-foreground">
          bg-background, text-foreground
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary px-4 py-4 text-background">
          bg-primary, text-background
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-subtle px-4 py-4 text-foreground">
          bg-subtle, text-foreground
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-dark-1 px-4 py-4 text-background">
          bg-neutral-dark-1, text-background
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-dark-2 px-4 py-4 text-background">
          bg-neutral-dark-2, text-background
        </div>

        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-error px-4 py-4 text-background">
          bg-error, text-background
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-destructive px-4 py-4 text-background">
          bg-destructive, text-background
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-warning px-4 py-4 text-background">
          bg-warning, text-background
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success px-4 py-4 text-background">
          bg-success, text-background
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg border border-border px-4 py-4 text-foreground">
          border-border, text-foreground
        </div>
      </div>
      <h2 className="text-2xl font-semibold">Button Variants</h2>
      <div
        className="grid w-full grid-cols-5 items-start gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}
      >
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Default Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton>Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Primary Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="primary">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Destructive Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="destructive">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Subtle Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="subtle">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">
            With Icon Default Button
          </h2>
          <div className="flex items-center gap-4">
            <CustomButton isLeftIconVisible={true} icon={<Orbit />}>
              Button CTA
            </CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">
            With Icon Primary Button
          </h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="primary"
              isLeftIconVisible={true}
              icon={<Orbit />}
            >
              Button CTA
            </CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Loading Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="loading" isLoading={true} />
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Outline Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="outline">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">
            Link With Left Icon Button
          </h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="link"
              size="link"
              isLeftIconVisible={true}
              icon={<Orbit />}
            >
              Button CTA
            </CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">
            Link With Right Icon Button
          </h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="link"
              size="link"
              isRightIconVisible={true}
              icon={<Orbit />}
            >
              Button CTA
            </CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Link Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="link" size="link">
              Button CTA
            </CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Icon Only Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="outline"
              size="icon"
              isIconOnly={true}
              icon={<Plus />}
            />
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">
            Icon Only Circle Button
          </h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="outline"
              size="circle"
              isIconOnly={true}
              icon={<Plus />}
            />
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold">Usage</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span>Import the custom button component</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-white">
              import <span className="text-blue-400">CustomButton</span> from{" "}
              <span className="text-yellow-400">
                &quot;~/components/common/Button/button&quot;
              </span>
              ;
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Variant Types</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-gray-100">
              <span className="text-pink-400">type Variant</span> {"{"}
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              default <br />
              primary <br />
              destructive <br />
              subtle <br />
              loading <br />
              outline <br />
              link
            </span>
            <span className="block font-mono text-sm text-gray-100">{"}"}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Size Types</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-gray-100">
              <span className="text-pink-400">type Size</span> {"{"}
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              default <br />
              sm <br />
              lg <br />
              link <br />
              icon <br />
              circle
            </span>
            <span className="block font-mono text-sm text-gray-100">{"}"}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Accepted Custom Button Props</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-gray-100">
              <span className="text-pink-400">ButtonProps</span> {"{"}
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              variant<span className="text-pink-400">?: </span>Variant;
              <br />
              size<span className="text-pink-400">?: </span>Size;
              <br />
              icon<span className="text-pink-400">?: </span>React.ReactNode;
              <br />
              children<span className="text-pink-400">?: </span>React.ReactNode;
              <br />
              isLoading<span className="text-pink-400">?: </span>boolean;
              <br />
              isIconOnly<span className="text-pink-400">?: </span>boolean;
              <br />
              isLeftIconVisible<span className="text-pink-400">?: </span>
              boolean;
              <br />
              isRightIconVisible<span className="text-pink-400">?: </span>
              boolean;
              <br />
              isDisabled<span className="text-pink-400">?: </span>boolean;
              <br />
              ariaLabel<span className="text-pink-400">?: </span>string;
            </span>
            <span className="block font-mono text-sm text-gray-100">{"}"}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Example</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-gray-100">
              return (
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              <span className="text-green-400">{"<"}</span>
              <span className="text-blue-400">CustomButton</span>
              <br />
              <span className="ml-4">
                variant=
                <span className="text-yellow-400">&quot;subtle&quot;</span>{" "}
                <br />
              </span>
              <span className="ml-4">
                icon=<span className="text-yellow-400">{"{<Plus />}"}</span>{" "}
                <br />
              </span>
              <span className="ml-4">
                isLeftIconVisible=
                <span className="text-yellow-400">{"{true}"}</span> <br />
              </span>
              <span className="ml-4">
                isLoading={<span className="text-yellow-400">false</span>}{" "}
                <br />
              </span>
              <span className="ml-4">
                isDisabled={<span className="text-yellow-400">false</span>}{" "}
                <br />
              </span>
              <span className="text-green-400">{">"}</span> <br />
              <span className="ml-4">Click Me</span> <br />
              <span className="text-green-400">{"<"}</span>/
              <span className="text-blue-400">CustomButton</span>
              <span className="text-green-400">{">"}</span>
            </span>
            <span className="block font-mono text-sm text-gray-100">);</span>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold">Input Components</h2>
      <div
        className="grid w-full items-start items-center gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}
      >
        <CustomInput
          placeholder="Email"
          isDisabled={false}
          isButtonVisible={true}
          buttonContent="Save"
          gap="lg"
          label="Email"
          variant="primary"
          labelPosition="top"
        />
        <CustomInput
          placeholder="Enter Your name"
          isDisabled={true}
          isButtonVisible={true}
          buttonContent="Save"
          gap="lg"
          label="Email"
          variant="border"
          labelPosition="top"
        />
        <CustomInput
          placeholder="Hello"
          isDisabled={false}
          isButtonVisible={false}
          buttonContent="Save"
          gap="lg"
          label="Email"
          variant="border"
          labelPosition="top"
        />
        <CustomInput
          placeholder="Hello"
          isDisabled={false}
          isButtonVisible={true}
          buttonContent="Save"
          gap="lg"
          label="Enter Your Name"
          variant="primary"
          labelPosition="top"
        />
        <CustomInput
          placeholder="Hello"
          isDisabled={false}
          isButtonVisible={true}
          buttonContent="Save"
          gap="lg"
          label="Email"
          variant="border"
          labelPosition="side"
        />
        <CustomInput
          placeholder="Hello"
          isDisabled={false}
          isButtonVisible={false}
          buttonContent=""
          gap="lg"
          variant="primary"
          labelPosition="top"
        />
      </div>
      <h2 className="text-2xl font-semibold">Usage</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span>Import the custom input component</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-white">
              import <span className="text-blue-400">CustomInput</span> from{" "}
              <span className="text-yellow-400">
                &quot;~/components/common/Input/input&quot;
              </span>
              ;
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Variant Types</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-gray-100">
              <span className="text-pink-400">type Variant</span> {"{"}
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              primary <br />
              border <br />
            </span>
            <span className="block font-mono text-sm text-gray-100">{"}"}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Gap Types</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-gray-100">
              <span className="text-pink-400">type gap</span> {"{"}
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              sm <br />
              md <br />
              lg <br />
            </span>
            <span className="block font-mono text-sm text-gray-100">{"}"}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Label Position Types</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-gray-100">
              <span className="text-pink-400">type LabelPosition</span> {"{"}
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              side <br />
              top <br />
            </span>
            <span className="block font-mono text-sm text-gray-100">{"}"}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Accepted Custom Input Props</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-gray-100">
              <span className="text-pink-400">InputProps</span> {"{"}
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              variant<span className="text-pink-400">?: </span>Variant;
              <br />
              gap<span className="text-pink-400">?: </span>Gap;
              <br />
              label<span className="text-pink-400">?: </span>string;
              <br />
              placeholder<span className="text-pink-400">: </span>string;
              <br />
              type<span className="text-pink-400">?: </span>string;
              <br />
              value<span className="text-pink-400">?: </span>string
              <br />
              onChange<span className="text-pink-400">?: </span>
              React.ChangeEventHandler&lt;HTMLInputElement&gt;;
              <br />
              onFocus<span className="text-pink-400">?: </span>
              React.FocusEventHandler&lt;HTMLInputElement&gt;;
              <br />
              isButtonVisible<span className="text-pink-400">?: </span>boolean;
              <br />
              buttonContent<span className="text-pink-400">?: </span>string;
              <br />
              onButtonClick<span className="text-pink-400">?: </span>
              React.MouseEventHandler&lt;HTMLInputElement&gt;;
              <br />
              isDisabled<span className="text-pink-400">?: </span>boolean;
              <br />
              labelPosition<span className="text-pink-400">?: </span>
              LabelsPosition;
            </span>
            <span className="block font-mono text-sm text-gray-100">{"}"}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Example</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-gray-100">
              return (
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              <span className="text-green-400">{"<"}</span>
              <span className="text-blue-400">CustomInput</span>
              <br />

              <span className="ml-4">
                variant=
                <span className="text-yellow-400">
                  &quot;primary&quot;
                </span>{" "}
                <br />
              </span>
              <span className="ml-4">
                placeholder=
                <span className="text-yellow-400">&quot;Hello&quot;</span>{" "}
                <br />
              </span>
              <span className="ml-4">
                isDisabled=
                <span className="text-yellow-400">false</span> <br />
              </span>
              <span className="ml-4">
                isButtonVisible={<span className="text-yellow-400">true</span>}{" "}
                <br />
              </span>
              <span className="ml-4">
                buttonContent=
                {<span className="text-yellow-400">&quot;Save&quot;</span>}{" "}
                <br />
              </span>
              <span className="ml-4">
                gap={<span className="text-yellow-400">&quot;lg&quot;</span>}{" "}
                <br />
              </span>
              <span className="ml-4">
                label=
                {
                  <span className="text-yellow-400">&quot;Email&quot;</span>
                }{" "}
                <br />
                <span className="ml-4">
                  labelPosition=
                  {
                    <span className="text-yellow-400">&quot;top&quot;</span>
                  }{" "}
                  <br />
                </span>
                <span className="text-green-400">{"/>"}</span> <br />
              </span>
            </span>
            <span className="block font-mono text-sm text-gray-100">);</span>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold">Breadcrumbs</h2>
      <div
        className="grid w-full items-start gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}
      >
        <div className="flex h-full flex-col items-start justify-between gap-y-6 rounded-lg border px-5 py-5">
          <p>Breadcrumb with autogenerated pages</p>
          <Breadcrumb />
        </div>
        <div className="flex h-full flex-col items-start justify-between gap-y-6 rounded-lg border px-5 py-5">
          <p>
            Breadcrumb with{" "}
            <span className="font-bold text-primary">primary</span> variant
          </p>
          <Breadcrumb variant="primary" />
        </div>
        <div className="flex h-full flex-col items-start justify-between gap-y-6 rounded-lg border px-5 py-5">
          <p>
            Breadcrumb with <span className="font-bold">pages</span> prop
          </p>
          <Breadcrumb
            pages={[
              { name: "Home", href: "/" },
              { name: "Legal Terms", href: "/legal-terms" },
              {
                name: "Privacy Policy",
                href: "/legal-terms/policy",
                isCurrent: true,
              },
            ]}
          />
        </div>
        <div className="flex h-full flex-col items-start justify-between gap-y-6 rounded-lg border px-5 py-5">
          <p>
            Breadcrumb with <span className="font-bold">pages</span> and{" "}
            <span className="font-primary font-bold">variant</span> prop
          </p>
          <Breadcrumb
            variant="primary"
            pages={[
              { name: "Home", href: "/" },
              { name: "Legal Terms", href: "/legal-terms" },
              {
                name: "Privacy Policy",
                href: "/legal-terms/policy",
                isCurrent: true,
              },
            ]}
          />
        </div>
        <div className="flex h-full flex-col items-start justify-between gap-y-6 rounded-lg border px-5 py-5">
          <p>
            Breadcrumb with <span className="font-bold">pages</span> and{" "}
            <span className="font-bold">maxPages</span> prop
          </p>
          <Breadcrumb
            maxPages={2}
            pages={[
              { name: "Home", href: "/" },
              { name: "Legal Terms", href: "/legal-terms" },
              {
                name: "Privacy Policy",
                href: "/legal-terms/policy",
                isCurrent: true,
              },
            ]}
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold">User Dashboard Sidebar</h2>
      <p>How to Use:</p>
      <ul className="list-disc">
        <li>Import: Import Sidebar from the components/layouts/sidebar.tsx</li>
        <li>
          This component uses next/navigation&apos;s usePathname hook,
          compatible with Next.js app router.
        </li>
        <li>
          Customization: Customize the sidebarItems array in the Sidebar
          component to match your navigation structure.
        </li>
      </ul>

      <Sidebar />
      <div className="my-4 flex max-w-lg flex-col flex-wrap gap-6 border border-dashed border-stone-700 p-12">
        <div>
          <h4 className="mb-2 text-2xl font-extrabold text-slate-700">
            The Badge component
          </h4>
          <p className="mb-1 text-sm font-light">
            It accepts 2 mandatory &quot;label&quot; (string) and
            &quot;variant&quot; (any of the 4 variants) arguments, and 1
            optional &quot;icon&quot; (r) argument as props.
          </p>
          <div className="text-sm font-light">
            <ul>
              <li>- Label: string</li>
              <li>
                - Variant: &quot;default&quot; | &quot;primary&quot; |
                &quot;success&quot; | &quot;error&quot;
              </li>
              <li> - Icon?: React.ReactNode</li>
            </ul>
          </div>
          <p className="mb-1 text-sm font-bold text-slate-700">
            Refer to the component for more information
            &quot;~/components/common/Badge/Badge&quot;
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Badge variant="success" label="success" />
          <Badge variant="primary" label="primary" />
          <Badge variant="default" label="default" />
          <Badge variant="error" label="error" />
        </div>
        <div className="flex flex-wrap gap-4">
          <Badge
            variant="success"
            label="success"
            icon={<span>&#11042;</span>}
          />
          <Badge
            variant="primary"
            label="primary"
            icon={<span>&#11042;</span>}
          />
          <Badge
            variant="default"
            label="default"
            icon={<span>&#11042;</span>}
          />
          <Badge variant="error" label="error" icon={<span>&#11042;</span>} />
        </div>
      </div>

      <div className="space-y-4 rounded-lg bg-gray-100 p-4 shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">
          HBP Comment Box
        </h2>
        <div className="flex flex-col space-y-4">
          {commentsData.map((comment) => (
            <HBPCommentBox
              key={comment.id}
              id={comment.id}
              avatar={comment.avatar}
              name={comment.name}
              username={comment.username}
              content={comment.content}
              timestamp={comment.timestamp}
              date={comment.date}
              likes={comment.likes}
              dislikes={comment.dislikes}
              className="rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            />
          ))}
        </div>
      </div>

      <div className="w-full">
        <h2 className="mb-3 text-2xl font-semibold text-gray-800">
          A Textarea with Character Limit
        </h2>

        <p>
          To use: Import CharacterLimitTextarea from the
          components/common/CharacterLimitTextarea <br />
          The component should receive the following properties:
        </p>
        <ul className="mb-7 list-disc">
          <li>maxLength: The maximum number of characters allowed.</li>
          <li>value: The current value of the textarea.</li>
          <li>
            onChange: A callback function that is triggered when the textarea
            value changes.
          </li>
          <li>the label, id and name.</li>
        </ul>

        <CharacterLimitTextarea
          maxLength={25}
          value={text}
          label="Bio"
          id="message"
          name="message"
          onChange={handleTextChange}
        />
      </div>
    </main>
  );
};

export default StyleGuide;
