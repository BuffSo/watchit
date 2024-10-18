import Image from "next/image";

export default function Test() {
  return (
    <>
      <Image
        src="/images/product.jpeg"
        width="400"
        height="400"
        alt="상품 이미지"
      />
    </>
  );
}
