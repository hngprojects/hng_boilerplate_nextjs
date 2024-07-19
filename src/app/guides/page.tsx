import React from "react"
import CustomButton from "~/components/common/Button/button";
import { Orbit, Plus } from 'lucide-react';

const Btn: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col items-start gap-7 p-6 overflow-hidden md:p-24 sm:p-12">
            <h2 className="text-2xl font-semibold">
                Color Guides
            </h2>
            <div className="grid w-full items-start gap-4" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
                <div className="rounded-lg px-4 py-4 bg-default text-background whitespace-nowrap w-full flex items-center justify-center">
                    bg-default, text-background
                </div>
                <div className="rounded-lg px-4 py-4 bg-background text-foreground border border-border whitespace-nowrap w-full flex items-center justify-center">
                    bg-background, text-foreground
                </div>
                <div className="rounded-lg px-4 py-4 bg-primary text-background whitespace-nowrap w-full flex items-center justify-center">
                    bg-primary, text-background
                </div>
                <div className="rounded-lg px-4 py-4 bg-subtle text-foreground whitespace-nowrap w-full flex items-center justify-center">
                    bg-subtle, text-foreground
                </div>
                <div className="rounded-lg px-4 py-4 bg-neutral-dark-1 text-background whitespace-nowrap w-full flex items-center justify-center">
                    bg-neutral-dark-1, text-background
                </div>
                <div className="rounded-lg px-4 py-4 bg-neutral-dark-2 text-background whitespace-nowrap w-full flex items-center justify-center">
                    bg-neutral-dark-2, text-background
                </div>

                <div className="rounded-lg px-4 py-4 bg-error text-background whitespace-nowrap w-full flex items-center justify-center">
                    bg-error, text-background
                </div>
                <div className="rounded-lg px-4 py-4 bg-destructive text-background whitespace-nowrap w-full flex items-center justify-center">
                    bg-destructive, text-background
                </div>
                <div className="rounded-lg px-4 py-4 bg-warning text-background whitespace-nowrap w-full flex items-center justify-center">
                    bg-warning, text-background
                </div>
                <div className="rounded-lg px-4 py-4 bg-success text-background whitespace-nowrap w-full flex items-center justify-center">
                    bg-success, text-background
                </div>
                <div className="rounded-lg px-4 py-4 border-border border text-foreground whitespace-nowrap w-full flex items-center justify-center">
                    border-border, text-foreground
                </div>
            </div>
            <h2 className="text-2xl font-semibold">
                Button Variants
            </h2>
            <div className="grid grid-cols-5 w-full items-start gap-4" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}>
                <div
                    className="group rounded-lg border px-5 py-5 h-full flex justify-between items-start flex-col"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Default Button
                    </h2>
                    <div className="flex items-center gap-4">
                        <CustomButton >
                            Button CTA
                        </CustomButton>
                    </div>
                </div>
                <div
                    className="group rounded-lg border px-5 py-5 h-full flex justify-between items-start flex-col"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Primary Button
                    </h2>
                    <div className="flex items-center gap-4">
                        <CustomButton variant="primary">
                            Button CTA
                        </CustomButton>
                    </div>
                </div>
                <div
                    className="group rounded-lg border px-5 py-5 h-full flex justify-between items-start flex-col"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Destructive Button
                    </h2>
                    <div className="flex items-center gap-4">

                        <CustomButton variant="destructive">
                            Button CTA
                        </CustomButton>
                    </div>
                </div>
                <div
                    className="group rounded-lg border px-5 py-5 h-full flex justify-between items-start flex-col"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Subtle Button
                    </h2>
                    <div className="flex items-center gap-4">

                        <CustomButton variant="subtle">
                            Button CTA
                        </CustomButton>
                    </div>
                </div>
                <div
                    className="group rounded-lg border px-5 py-5 h-full flex justify-between items-start flex-col"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        With Icon Default Button
                    </h2>
                    <div className="flex items-center gap-4">
                        <CustomButton isLeftIconVisible={true} icon={<Orbit />}>
                            Button CTA
                        </CustomButton>
                    </div>
                </div>
                <div
                    className="group rounded-lg border px-5 py-5 h-full flex justify-between items-start flex-col"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        With Icon Primary Button
                    </h2>
                    <div className="flex items-center gap-4">
                        <CustomButton variant="primary" isLeftIconVisible={true} icon={<Orbit />}>
                            Button CTA
                        </CustomButton>
                    </div>
                </div>
                <div
                    className="group rounded-lg border px-5 py-5 h-full flex justify-between items-start flex-col"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Loading Button
                    </h2>
                    <div className="flex items-center gap-4">
                        <CustomButton variant="loading" isLoading={true} />
                    </div>
                </div>
                <div
                    className="group rounded-lg border px-5 py-5 h-full flex justify-between items-start flex-col"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Outline Button
                    </h2>
                    <div className="flex items-center gap-4">
                        <CustomButton variant="outline">
                            Button CTA
                        </CustomButton>
                    </div>
                </div>
                <div
                    className="group rounded-lg border px-5 py-5 h-full flex justify-between items-start flex-col"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Link With Left Icon Button
                    </h2>
                    <div className="flex items-center gap-4">
                        <CustomButton variant="link" size="link" isLeftIconVisible={true} icon={<Orbit />}>
                            Button CTA
                        </CustomButton>
                    </div>
                </div>
                <div
                    className="group rounded-lg border px-5 py-5 h-full flex justify-between items-start flex-col"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Link With Right Icon Button
                    </h2>
                    <div className="flex items-center gap-4">
                        <CustomButton variant="link" size="link" isRightIconVisible={true} icon={<Orbit />}>
                            Button CTA
                        </CustomButton>
                    </div>
                </div>
                <div
                    className="group rounded-lg border px-5 py-5 h-full flex justify-between items-start flex-col"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Link Button
                    </h2>
                    <div className="flex items-center gap-4">
                        <CustomButton variant="link" size="link">
                            Button CTA
                        </CustomButton>
                    </div>
                </div>
                <div
                    className="group rounded-lg border px-5 py-5 h-full flex justify-between items-start flex-col"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Icon Only Button
                    </h2>
                    <div className="flex items-center gap-4">
                        <CustomButton variant="outline" size="icon" isIconOnly={true} icon={<Plus />} />
                    </div>
                </div>
                <div
                    className="group rounded-lg border px-5 py-5 h-full flex justify-between items-start flex-col"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        Icon Only Circle Button
                    </h2>
                    <div className="flex items-center gap-4">
                        <CustomButton variant="outline" size="circle" isIconOnly={true} icon={<Plus />} />
                    </div>
                </div>
            </div>
            <h2 className="text-2xl font-semibold">Usage</h2>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <span>Import the custom button component</span>
                    <div className="bg-zinc-950 p-4 rounded-lg">
                        <span className="block font-mono text-sm text-white">
                            import <span className="text-blue-400">CustomButton</span> from <span className="text-yellow-400">"~/components/common/Button/button"</span>;
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span>Variant Types</span>
                    <div className="bg-zinc-950 p-4 rounded-lg">
                        <span className="block font-mono text-sm text-gray-100">
                            <span className="text-pink-400">type Variant</span> {'{'}
                        </span>
                        <span className="block font-mono text-sm text-gray-100 ml-4">
                            default <br />
                            primary <br />
                            destructive <br />
                            subtle <br />
                            loading <br />
                            outline <br />
                            link
                        </span>
                        <span className="block font-mono text-sm text-gray-100">{'}'}</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span>Size Types</span>
                    <div className="bg-zinc-950 p-4 rounded-lg">

                        <span className="block font-mono text-sm text-gray-100">
                            <span className="text-pink-400">type Size</span> {'{'}
                        </span>
                        <span className="block font-mono text-sm text-gray-100 ml-4">
                            default <br />
                            sm <br />
                            lg <br />
                            link <br />
                            icon <br />
                            circle
                        </span>
                        <span className="block font-mono text-sm text-gray-100">{'}'}</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span>Accepted Custom Button Props</span>
                    <div className="bg-zinc-950 p-4 rounded-lg">
                        <span className="block font-mono text-sm text-gray-100">
                            <span className="text-pink-400">ButtonProps</span> {'{'}
                        </span>
                        <span className="block font-mono text-sm text-gray-100 ml-4">
                            variant<span className="text-pink-400">?: </span>Variant;<br />
                            size<span className="text-pink-400">?: </span>Size;<br />
                            icon<span className="text-pink-400">?: </span>React.ReactNode;<br />
                            children<span className="text-pink-400">?: </span>React.ReactNode;<br />
                            isLoading<span className="text-pink-400">?: </span>boolean;<br />
                            isIconOnly<span className="text-pink-400">?: </span>boolean;<br />
                            isLeftIconVisible<span className="text-pink-400">?: </span>boolean;<br />
                            isRightIconVisible<span className="text-pink-400">?: </span>boolean;<br />
                            isDisabled<span className="text-pink-400">?: </span>boolean;<br />
                            ariaLabel<span className="text-pink-400">?: </span>string;
                        </span>
                        <span className="block font-mono text-sm text-gray-100">{'}'}</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span>Example</span>
                    <div className="bg-zinc-950 p-4 rounded-lg">
                        <span className="block font-mono text-sm text-gray-100">
                            return (
                        </span>
                        <span className="block font-mono text-sm text-gray-100 ml-4">
                            <span className="text-green-400">{'<'}</span><span className="text-blue-400">CustomButton</span><br />
                            <span className="ml-4">
                                variant=<span className="text-yellow-400">"subtle"</span> <br />
                            </span>
                            <span className="ml-4">
                                icon=<span className="text-yellow-400">{'{<Plus />}'}</span> <br />
                            </span>
                            <span className="ml-4">
                                isLeftIconVisible=<span className="text-yellow-400">{'{true}'}</span> <br />
                            </span>
                            <span className="ml-4">

                                isLoading={<span className="text-yellow-400">false</span>} <br />
                            </span>
                            <span className="ml-4">
                                isDisabled={<span className="text-yellow-400">false</span>} <br />
                            </span>
                            <span className="text-green-400">{'>'}</span> <br />
                            <span className="ml-4">Click Me</span> <br />
                            <span className="text-green-400">{'<'}</span>/<span className="text-blue-400">CustomButton</span><span className="text-green-400">{'>'}</span>
                        </span>
                        <span className="block font-mono text-sm text-gray-100">
                            );
                        </span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Btn