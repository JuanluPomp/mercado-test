import ProductDetail from "./product-detail";

export default function ProductResult() {
  return (
    <div className=" container mx-auto flex justify-center">
      <div className=" flex flex-col space-y-2 w-3/4">
        <span>Catrgorias y rutas</span>
        <ProductDetail />
      </div>
    </div>
  )
}
