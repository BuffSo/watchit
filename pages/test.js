import Image from "next/image";

export default function Test() {
  return (
    <>
    <div style={{
      position: 'relative',
      width: "50%",
      height: '200px',
    }}>
      <Image
        fill
        src="/images/product.jpeg"
        alt="상품 이미지"
        style={{
          objectFit: 'cover',   // 이미지 비율 유지
        }}
      />      
    </div>
    </>
  );
}
