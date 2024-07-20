import { Orbit, Plus } from "lucide-react";
import React from "react";

import CustomButton from "~/components/common/Button/button";
import Sidebar from "~/components/layouts/Sidebar";

const Button: React.FC = () => {
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
        <div className="bg-neutral-dark-1 flex w-full items-center justify-center whitespace-nowrap rounded-lg px-4 py-4 text-background">
          bg-neutral-dark-1, text-background
        </div>
        <div className="bg-neutral-dark-2 flex w-full items-center justify-center whitespace-nowrap rounded-lg px-4 py-4 text-background">
          bg-neutral-dark-2, text-background
        </div>

        <div className="bg-error flex w-full items-center justify-center whitespace-nowrap rounded-lg px-4 py-4 text-background">
          bg-error, text-background
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-destructive px-4 py-4 text-background">
          bg-destructive, text-background
        </div>
        <div className="bg-warning flex w-full items-center justify-center whitespace-nowrap rounded-lg px-4 py-4 text-background">
          bg-warning, text-background
        </div>
        <div className="bg-success flex w-full items-center justify-center whitespace-nowrap rounded-lg px-4 py-4 text-background">
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
    </main>
  );
};

export default Button;
