import React, {useEffect, useState, Suspense} from 'react';
import PageDefault from "~/components/PageDefault";
import GetAllProduct from "~/Data/GetAllProduct";
import Loading from "~/components/Loading";
import GetProductSale from "~/Data/GetProductSale";
import GetBestSeller from "~/Data/GetBestSeller";
import GetProductsByType from "~/Data/GetProductsByType";
import GetAllProductType from "~/Data/GetAllProductType";
import GetProductByRange from "~/Data/GetProductByRange";
import {Drawer} from "antd";
import './Food.scss';

const Products = React.lazy(() => import('./components/Products'));
const Bread = React.lazy(() => import("../../components/Breadcrumb"));
const SideBar = React.lazy(() => import("./components/SideBar"));

function Food() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(0);
    const [productType, setProductType] = useState([]);
    const [range, setRange] = useState([]);
    const [isSettingRage, setIsSettingRange] = useState(false);

    const [openFilter, setOpenFilter] = useState(false);

    const showFilter = () => {
        setOpenFilter(true);
    };

    const closeFilter = () => {
        setOpenFilter(false);
    };

    useEffect(() => {
        GetAllProductType()
            .then(data => setProductType(data))
            .catch(error => {});
    }, []);

    useEffect(() => {
        if(!isSettingRage) {
            switch (category) {
                case 0: case 2: {
                    GetAllProduct()
                        .then(data => setProducts(data))
                        .catch(error => {});
                    break;
                }
                case 1: {
                    GetBestSeller()
                        .then(data => setProducts(data))
                        .catch(error => {});
                    break;
                }
                case 3: {
                    GetProductSale()
                        .then(data => setProducts(data))
                        .catch(error => {});
                    break;
                }
                case 4: {
                    GetProductByRange(range[0], range[1])
                        .then(data => setProducts(data))
                        .catch(error => {});
                    break;
                }
                default: {
                    GetProductsByType(category)
                        .then(data => setProducts(data))
                        .catch(error => {});
                    break;
                }
            }
        }
        else {
            setIsSettingRange(false);
        }
    }, [category, range, isSettingRage]);

    return (
        <div className="food">
            <Suspense fallback={<Loading />}>
                <PageDefault>
                <Bread>Thực Đơn</Bread>
                <Drawer title="Poly Food" onClose={closeFilter} open={openFilter}>
                    <SideBar setCategory={setCategory} productType={productType} setRange={setRange} setIsSettingRange={setIsSettingRange}/>
                </Drawer>
                <div className="flex flex-wrap lg:flex-nowrap justify-between mt-5 lg:mt-10 content">
                    <div className="filter hidden w-full lg:block lg:w-2/12">
                        <SideBar setCategory={setCategory} productType={productType} setRange={setRange} setIsSettingRange={setIsSettingRange}/>
                    </div>
                    <div className="w-full lg:w-9/12">
                        {
                            products ?
                                <Products products={products} order={true} box={8} showFilter={showFilter}/>
                                : <></>
                        }
                    </div>
                </div>
                </PageDefault>
            </Suspense>
        </div>
    );
}

export default Food;