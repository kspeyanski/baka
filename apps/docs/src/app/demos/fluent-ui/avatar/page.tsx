import { BakaAvatar, BakaIcon, BakaText } from "baka-ui";
import Image from "next/image";

export default function AvatarDemo() {
  return (
    <div className="flex gap-[32px]">
      <BakaAvatar>
        <Image src="/avatar.jpeg" width={56} height={56} alt="" />
      </BakaAvatar>
      <BakaAvatar>
        <BakaIcon variant={"size-28"}>
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 14C18.6569 14 20 15.3431 20 17V17.7146C20 21.2924 15.7895 24 10 24C4.21053 24 0 21.4333 0 17.7146V17C0 15.3431 1.34315 14 3 14H17ZM17 15.5H3C2.2203 15.5 1.57955 16.0949 1.50687 16.8555L1.5 17V17.7146C1.5 20.389 4.88879 22.5 10 22.5C14.926 22.5 18.3548 20.3951 18.4955 17.876L18.5 17.7146V17C18.5 16.2203 17.9051 15.5796 17.1445 15.5069L17 15.5ZM10 0C13.3137 0 16 2.68629 16 6C16 9.31371 13.3137 12 10 12C6.68629 12 4 9.31371 4 6C4 2.68629 6.68629 0 10 0ZM10 1.5C7.51472 1.5 5.5 3.51472 5.5 6C5.5 8.48528 7.51472 10.5 10 10.5C12.4853 10.5 14.5 8.48528 14.5 6C14.5 3.51472 12.4853 1.5 10 1.5Z"
              fill="currentColor"
            />
          </svg>
        </BakaIcon>
      </BakaAvatar>
      <BakaAvatar>
        <BakaText>TS</BakaText>
      </BakaAvatar>
      <BakaAvatar variant={"brand"}>
        <BakaIcon variant={"size-28"}>
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 14C18.6569 14 20 15.3431 20 17V17.7146C20 21.2924 15.7895 24 10 24C4.21053 24 0 21.4333 0 17.7146V17C0 15.3431 1.34315 14 3 14H17ZM17 15.5H3C2.2203 15.5 1.57955 16.0949 1.50687 16.8555L1.5 17V17.7146C1.5 20.389 4.88879 22.5 10 22.5C14.926 22.5 18.3548 20.3951 18.4955 17.876L18.5 17.7146V17C18.5 16.2203 17.9051 15.5796 17.1445 15.5069L17 15.5ZM10 0C13.3137 0 16 2.68629 16 6C16 9.31371 13.3137 12 10 12C6.68629 12 4 9.31371 4 6C4 2.68629 6.68629 0 10 0ZM10 1.5C7.51472 1.5 5.5 3.51472 5.5 6C5.5 8.48528 7.51472 10.5 10 10.5C12.4853 10.5 14.5 8.48528 14.5 6C14.5 3.51472 12.4853 1.5 10 1.5Z"
              fill="currentColor"
            />
          </svg>
        </BakaIcon>
      </BakaAvatar>
      <BakaAvatar variant={"brand"}>
        <BakaText>TS</BakaText>
      </BakaAvatar>
      <BakaAvatar variant={"darkred"}>
        <BakaIcon variant={"size-28"}>
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 14C18.6569 14 20 15.3431 20 17V17.7146C20 21.2924 15.7895 24 10 24C4.21053 24 0 21.4333 0 17.7146V17C0 15.3431 1.34315 14 3 14H17ZM17 15.5H3C2.2203 15.5 1.57955 16.0949 1.50687 16.8555L1.5 17V17.7146C1.5 20.389 4.88879 22.5 10 22.5C14.926 22.5 18.3548 20.3951 18.4955 17.876L18.5 17.7146V17C18.5 16.2203 17.9051 15.5796 17.1445 15.5069L17 15.5ZM10 0C13.3137 0 16 2.68629 16 6C16 9.31371 13.3137 12 10 12C6.68629 12 4 9.31371 4 6C4 2.68629 6.68629 0 10 0ZM10 1.5C7.51472 1.5 5.5 3.51472 5.5 6C5.5 8.48528 7.51472 10.5 10 10.5C12.4853 10.5 14.5 8.48528 14.5 6C14.5 3.51472 12.4853 1.5 10 1.5Z"
              fill="currentColor"
            />
          </svg>
        </BakaIcon>
      </BakaAvatar>
      <BakaAvatar variant={"darkred"}>
        <BakaText>TS</BakaText>
      </BakaAvatar>
    </div>
  );
}
