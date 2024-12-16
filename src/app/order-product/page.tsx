"use client";

import { useRouter } from "next/navigation"

export default function OrderProduct() {
  const router =  useRouter();

  const orderProduct = () => {
    console.log("Product has been ordered successfully!")
    router.push('/products');
  }

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={orderProduct}>Place Order</button>
    </>
  )
}