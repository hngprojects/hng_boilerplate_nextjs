import AdminLayout from "~/components/superadminlayout";
import ProductManagement from "./components/Product-management/product-management";

const ProductDetailsPage = () => {
  return (
    <>
      <AdminLayout>
        <div className="pt-5 md:container">
          <ProductManagement />
        </div>
      </AdminLayout>
    </>
  );
};

export default ProductDetailsPage;
