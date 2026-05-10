import Image from 'next/image'

function UserAvatarCascade() {
  return (
    <div className="flex shrink-0 items-center">
      <div className="flex items-center [&>*:first-child]:ml-0 [&>*]:-ml-3">
        <UserAvatar imageSrc="/images/landing-page/user-avatar-1.jpg" />
        <UserAvatar imageSrc="/images/landing-page/user-avatar-2.jpg" />
        <UserAvatar imageSrc="/images/landing-page/user-avatar-3.jpg" />
        <UserAvatar imageSrc="/images/landing-page/user-avatar-4.jpg" />
      </div>
    </div>
  )
}

function UserAvatar({ imageSrc }: { imageSrc: string }) {
  return (
    <Image
      className="border-1.5 h-10 min-h-10 w-10 min-w-10 rounded-full border-white"
      width={40}
      height={40}
      src={imageSrc}
      alt=""
    />
  )
}

export default UserAvatarCascade
