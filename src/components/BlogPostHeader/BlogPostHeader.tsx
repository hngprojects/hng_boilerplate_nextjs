import Image from 'next/image';
import Link from 'next/link';

interface BlogPostHeaderProps {
    title: string;
    subtitle: string;
    date: string;
    authorName: string;
    authorProfilePicture: string;
    tag: string;
    readingTime: string;
    blogImage: string;
    excerpt: string;
    commentsCount: number;
    likesCount: number;
}

const BlogPostHeader = ({
    title,
    subtitle,
    date,
    authorName,
    authorProfilePicture,
    tag,
    readingTime,
    blogImage,
    excerpt,
    commentsCount,
    likesCount,
}: BlogPostHeaderProps) => {
    return (
        <header className="relative text-white bg-[#525252]">
            <div className=" max-w-4xl mx-auto p-[32px] sm:p-6 lg:p-12 md:w-[689px] flex flex-col gap-[16px] md:gap-[16px]">
                <nav>
                    <div className="flex items-center space-x-4">
                        <Link href="/" legacyBehavior>
                            <a className="flex items-center gap-2 text-white">
                                Home
                                <Image src="/arrow-left.svg" alt="Arrow Left" width={6} height={6} className="mr-1" />
                            </a>
                        </Link>
                        <Link href="/blog" legacyBehavior>
                            <a className="flex items-center gap-2 text-white">
                                Blog
                                <Image src="/arrow-left.svg" alt="Arrow Left" width={6} height={6} className="mr-1" />
                            </a>
                        </Link>
                        <span className="flex items-center text-white">
                            Blogpost
                        </span>
                    </div>
                </nav>
                <div className="bg-[#F97316] rounded-full w-fit flex items-center gap-2 px-2 mb-4">
                    <span className="inline-block w-[6px] h-[6px] bg-white rounded-full"></span>
                    <span className="py-1 text-xs sm:text-sm">{tag}</span>
                </div>
                <h1 className="text-[18px] sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 leading-custom-58">{title}</h1>
                <p className="text-xs sm:text-sm">{subtitle}</p>
                <div className="flex items-center mb-2 sm:mb-4">
                    <Image
                        src={authorProfilePicture}
                        alt={authorName}
                        width={40}
                        height={40}
                        className="rounded-full md:w-[60px] md:h-[60px]"
                    />
                    <div className="ml-3">
                        <p className="text-sm sm:text-base mb-[8px]">{authorName}</p>
                        <p className="text-xs sm:text-sm">
                            {date} <span className="mx-1.5 inline-block w-2 h-2 bg-white rounded-full"></span> {readingTime} read
                        </p>
                    </div>
                </div>
                    <p className="text-sm sm:text-base mb-4">{excerpt}</p>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <Image src="/like-icon.svg" alt="Likes" width={18} height={18} />
                        <span className="ml-1 text-xs sm:text-sm">{likesCount}</span>
                    </div>
                    <div className="flex items-center">
                        <Image src="/comment-icon.svg" alt="Comments" width={18} height={18} />
                        <span className="ml-1 text-xs sm:text-sm">{commentsCount}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default BlogPostHeader;
