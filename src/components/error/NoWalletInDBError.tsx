"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const NoWalletInDBError = () => (
	<div className="grid place-items-center h-screen relative select-none">
		<div className="absolute top-4 ">
			<Image
				src="/logo-white.png"
				alt="logo"
				width={200}
				height={50}
				className="opacity-50 w-full max-w-[100px] min-[400px]:max-w-[150px] lg:max-w-[200px]"
			/>
		</div>
		<div className="flex flex-col items-center gap-y-4 md:gap-y-8">
			<p className="text-center font-extralight sm:text-xl xl:text-2xl">
				We couldn&apos;t find a wallet associated with your account.
			</p>

			<Link
				href="/create-password"
				className="flex relative items-center [perspective:300px] transform-gpu "
			>
				<motion.button
					// @ts-expect-error
					initial={{ "--x": "100%", scale: 1 }}
					// @ts-expect-error
					animate={{ "--x": "-100%" }}
					whileTap={{ scale: 0.97 }}
					transition={{
						repeat: Infinity,
						repeatType: "loop",
						repeatDelay: 1,
						type: "spring",
						stiffness: 20,
						damping: 15,
						mass: 2,
						scale: {
							type: "spring",
							stiffness: 10,
							damping: 5,
							mass: 0.1,
						},
					}}
					className="px-6 py-4 rounded-xl relative w-full flex justify-center radial-gradient "
				>
					<span className="tracking-wide font-extralight h-full w-full block relative linear-mask text-xl">
						Create Password &rarr;
					</span>
					<span className="block absolute inset-0 rounded-lg p-px linear-overlay" />
				</motion.button>
			</Link>
		</div>
	</div>
);
