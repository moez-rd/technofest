import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-black py-8 text-primary-50 sm:py-14">
      <div className="relative h-10 w-10">
        <Image src="/technofest.png" alt="" layout="fill" objectFit="cover" />
      </div>
      <p className="mt-1 font-metal-storm font-medium lowercase">Technology Festival</p>
      <p className="mt-3 text-xs text-gray-500">
        &copy; Copyright 2022 All Rights Reserved by Infokom Himasisko
      </p>
    </footer>
  );
}
