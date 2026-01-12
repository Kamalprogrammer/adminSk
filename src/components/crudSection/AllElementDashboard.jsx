import { useState, useEffect, useRef } from 'react';
import {
    Download,
    Plus,
    Search,
    Filter,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight,
    Edit,
    Trash2,
    X
} from 'lucide-react';
import AddElement from './AddElement';

const MOCK_DATA = [
    {
        id: 1,
        name: "MacBook Pro 16-inch M3 Max",
        category: "Electronics",
        brand: "Apple",
        price: "2499.00",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=100&q=80",
        createdAt: "12 Jan, 2024"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        category: "Electronics",
        brand: "Samsung",
        price: "1299.00",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=100&q=80",
        createdAt: "15 Feb, 2024"
    },
    {
        id: 3,
        name: "Sony WH-1000XM5 Headphones",
        category: "Accessories",
        brand: "Sony",
        price: "349.99",
        stock: "Limited",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=100&q=80",
        createdAt: "20 Feb, 2024"
    },
    {
        id: 4,
        name: "Nike Air Jordan 1 High",
        category: "Clothing",
        brand: "Nike",
        price: "180.00",
        stock: "Out of Stock",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&q=80",
        createdAt: "01 Mar, 2024"
    },
    {
        id: 5,
        name: "Herman Miller Aeron Chair",
        category: "Furniture",
        brand: "Herman Miller",
        price: "1450.00",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=100&q=80",
        createdAt: "10 Mar, 2024"
    },
    {
        id: 6,
        name: "iPad Pro 12.9-inch",
        category: "Electronics",
        brand: "Apple",
        price: "1099.00",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=100&q=80",
        createdAt: "12 Mar, 2024"
    },
    {
        id: 7,
        name: "PlayStation 5 Slim Console",
        category: "Electronics",
        brand: "Sony",
        price: "499.00",
        stock: "Limited",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=100&q=80",
        createdAt: "14 Mar, 2024"
    },
    {
        id: 8,
        name: "Canon EOS R5 Mirrorless",
        category: "Electronics",
        brand: "Canon",
        price: "3899.00",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&q=80",
        createdAt: "15 Mar, 2024"
    },
    {
        id: 9,
        name: "Levi's 501 Original Jeans",
        category: "Clothing",
        brand: "Levi's",
        price: "79.50",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=100&q=80",
        createdAt: "18 Mar, 2024"
    },
    {
        id: 10,
        name: "Dyson V15 Detect Vacuum",
        category: "Home",
        brand: "Dyson",
        price: "749.99",
        stock: "Out of Stock",
        image: "https://images.unsplash.com/photo-1558317374-a3594743e9c7?w=100&q=80",
        createdAt: "20 Mar, 2024"
    },
    {
        id: 11,
        name: "Adidas Ultraboost Light",
        category: "Clothing",
        brand: "Adidas",
        price: "190.00",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=100&q=80",
        createdAt: "22 Mar, 2024"
    },
    {
        id: 12,
        name: "LG C3 OLED TV 65-inch",
        category: "Electronics",
        brand: "LG",
        price: "1699.00",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1593784991095-a20506948430?w=100&q=80",
        createdAt: "25 Mar, 2024"
    },
    {
        id: 13,
        name: "Nespresso Vertuo Coffee Maker",
        category: "Home",
        brand: "Nespresso",
        price: "199.00",
        stock: "Limited",
        image: "https://images.unsplash.com/photo-1517255116124-73d877eeb099?w=100&q=80",
        createdAt: "28 Mar, 2024"
    },
    {
        id: 14,
        name: "Ray-Ban Aviator Sunglasses",
        category: "Accessories",
        brand: "Ray-Ban",
        price: "163.00",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=100&q=80",
        createdAt: "30 Mar, 2024"
    },
    {
        id: 15,
        name: "Nintendo Switch OLED",
        category: "Electronics",
        brand: "Nintendo",
        price: "349.00",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1578303512597-8147061c2c0e?w=100&q=80",
        createdAt: "02 Apr, 2024"
    },
    {
        id: 16,
        name: "Gucci GG Marmont Bag",
        category: "Accessories",
        brand: "Gucci",
        price: "2550.00",
        stock: "Out of Stock",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=100&q=80",
        createdAt: "05 Apr, 2024"
    },
    {
        id: 17,
        name: "Dell XPS 15 Laptop",
        category: "Electronics",
        brand: "Dell",
        price: "1899.00",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1593642632823-8f78536788c6?w=100&q=80",
        createdAt: "08 Apr, 2024"
    },
    {
        id: 18,
        name: "Yeti Tundra 45 Cooler",
        category: "Outdoor",
        brand: "Yeti",
        price: "325.00",
        stock: "Limited",
        image: "https://images.unsplash.com/photo-1507968603681-4328eb92ace5?w=100&q=80",
        createdAt: "10 Apr, 2024"
    },
    {
        id: 19,
        name: "GoPro HERO12 Black",
        category: "Electronics",
        brand: "GoPro",
        price: "399.00",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1564466021188-1e18cc89ca61?w=100&q=80",
        createdAt: "12 Apr, 2024"
    },
    {
        id: 20,
        name: "Samsung Odyssey Monitor",
        category: "Electronics",
        brand: "Samsung",
        price: "999.00",
        stock: "In Stock",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=100&q=80",
        createdAt: "15 Apr, 2024"
    }
];

export default function AllElementDashboard() {
    const [editingProduct, setEditingProduct] = useState(null);
    const [isAddProductOpen, setIsAddProductOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [deletingItems, setDeletingItems] = useState(null);

    // Filter logic
    const filteredData = MOCK_DATA.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const handleUpdate = (item) => {
        // Set the product to be edited, which opens the modal
        setEditingProduct(item);
    };

    const handleDelete = (id) => {
        setDeletingItems(id);
    };

    const confirmDelete = () => {
        console.log('Delete product:', deletingItems);
        // Add your delete API call logic here
        setDeletingItems(null);
    };
    return (
        <div className="w-full min-h-screen bg-page-bg dark:bg-page-bg p-2 sm:p-4 md:p-6 font-sans text-text-black dark:text-text-black">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold">Products List</h1>
                    <p className="text-sm text-text-gray dark:text-text-gray mt-1">
                        Track your store's progress to boost your sales.
                    </p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-section-bg dark:bg-section-bg border border-border-light dark:border-border-light rounded-lg text-sm font-medium hover:bg-hover-bg dark:hover:bg-hover-bg transition-colors">
                        <Download className="w-4 h-4" />
                        Export
                    </button>
                    <button
                        onClick={() => setIsAddProductOpen(true)}
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                        <Plus className="w-4 h-4" />
                        Add Product
                    </button>
                </div>
            </div>

            <div className="bg-section-bg dark:bg-section-bg rounded-t-xl border border-border-light dark:border-border-light p-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="relative w-full sm:w-auto sm:min-w-[300px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full sm:min-w-[300px] pl-10 pr-4 py-2 bg-page-bg dark:bg-page-bg border border-border-light dark:border-border-light rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-text-muted"
                    />
                </div>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-page-bg dark:bg-page-bg border border-border-light dark:border-border-light rounded-lg text-sm font-medium hover:bg-hover-bg dark:hover:bg-hover-bg transition-colors">
                    <Filter className="w-4 h-4" />
                    Filter
                </button>
            </div>

            <div className="bg-section-bg dark:bg-section-bg border-x border-b border-border-light dark:border-border-light rounded-b-xl overflow-hidden shadow-sm min-h-[400px]"> {/* Added minimum height */}
                <div className="overflow-x-auto scrollbar-hide">
                    <table className="w-full min-w-[800px]">
                        <thead className="bg-page-bg dark:bg-page-bg border-b border-border-light dark:border-border-light">
                            <tr>
                                <th className="py-3 px-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider pl-6">S.No</th>
                                <th className="py-3 px-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider pl-6">Image</th>
                                <th className="py-3 px-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider pl-6">Products</th>
                                <th className="py-3 px-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Category</th>
                                <th className="py-3 px-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Brand</th>
                                <th className="py-3 px-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Price</th>
                                <th className="py-3 px-4 text-center text-xs font-semibold text-text-muted uppercase tracking-wider">Stock</th>
                                <th className="py-3 px-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Created At</th>
                                <th className="py-3 px-4 text-left text-xs font-semibold text-text-muted uppercase tracking-wider">Action</th>

                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-light dark:divide-border-light">
                            {currentItems.map((item, index) => (
                                <tr key={item.id} className="group hover:bg-hover-bg/50 dark:hover:bg-hover-bg/50 transition-colors">
                                    <td className="py-3 px-4 pl-6 text-sm text-text-gray dark:text-text-gray">
                                        {/* Display Serial Number (based on pagination) */}
                                        {indexOfFirstItem + index + 1}
                                    </td>
                                    <td className="py-3 px-4 pl-6">
                                        <div className="w-10 h-10 rounded-md overflow-hidden bg-gray-100 flex-shrink-0 border border-border-light">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 pl-6">
                                        <span className="text-sm font-medium text-text-black dark:text-text-black truncate max-w-[150px] lg:max-w-none">
                                            {item.name}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-sm text-text-gray dark:text-text-gray">{item.category}</td>
                                    <td className="py-3 px-4 text-sm text-text-gray dark:text-text-gray">{item.brand}</td>
                                    <td className="py-3 px-4 text-sm font-medium text-text-black dark:text-text-black">${item.price}</td>
                                    <td className="py-3 px-4 text-center">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-primary bg-primary/10">
                                            {item.stock}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-sm text-text-gray dark:text-text-gray">{item.createdAt}</td>
                                    <td className="py-3 px-4 text-right relative pr-6">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleUpdate(item)}
                                                className="p-1.5 rounded-md text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20 transition-colors"
                                                title="Update"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="p-1.5 rounded-md text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Footer */}
                {filteredData.length > 0 && (
                    <div className="border-t border-border-light dark:border-border-light px-4 py-3 flex items-center justify-between">
                        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-text-gray dark:text-text-gray">
                                    Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to <span className="font-medium">{Math.min(indexOfLastItem, filteredData.length)}</span> of <span className="font-medium">{filteredData.length}</span> results
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="p-1 rounded-md border border-border-light dark:border-border-light disabled:opacity-50 disabled:cursor-not-allowed hover:bg-hover-bg dark:hover:bg-hover-bg transition-colors"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                        <button
                                            key={number}
                                            onClick={() => handlePageChange(number)}
                                            className={`w-8 h-8 rounded-md text-sm font-medium flex items-center justify-center transition-colors ${currentPage === number
                                                ? 'bg-primary text-white'
                                                : 'text-text-gray hover:bg-hover-bg dark:text-text-gray dark:hover:bg-hover-bg'
                                                }`}
                                        >
                                            {number}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="p-1 rounded-md border border-border-light dark:border-border-light disabled:opacity-50 disabled:cursor-not-allowed hover:bg-hover-bg dark:hover:bg-hover-bg transition-colors"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Mobile Pagination Simple */}
                        <div className="flex sm:hidden w-full justify-between items-center text-sm">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-3 py-1.5 border border-border-light rounded-md disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <span className="text-text-gray">Page {currentPage} of {totalPages}</span>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-3 py-1.5 border border-border-light rounded-md disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Add Product Modal Overlay */}
            {isAddProductOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-page-bg dark:bg-page-bg w-full max-w-4xl max-h-[90vh] rounded-xl shadow-2xl overflow-y-auto relative ring-1 ring-border-light dark:ring-border-light">
                        <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-border-light dark:border-border-light bg-page-bg/80 dark:bg-page-bg/80 backdrop-blur-md">
                            <h2 className="text-lg font-bold text-text-black dark:text-text-black">Add New Product</h2>
                            <button
                                onClick={() => setIsAddProductOpen(false)}
                                className="p-2 rounded-full hover:bg-hover-bg dark:hover:bg-hover-bg text-text-muted transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-4">
                            <AddElement
                                onClose={() => setIsAddProductOpen(false)}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Update/Edit Modal Overlay */}
            {editingProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-page-bg dark:bg-page-bg w-full max-w-4xl max-h-[90vh] rounded-xl shadow-2xl overflow-y-auto relative ring-1 ring-border-light dark:ring-border-light">
                        <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-border-light dark:border-border-light bg-page-bg/80 dark:bg-page-bg/80 backdrop-blur-md">
                            <h2 className="text-lg font-bold text-text-black dark:text-text-black">Update Product</h2>
                            <button
                                onClick={() => setEditingProduct(null)}
                                className="p-2 rounded-full hover:bg-hover-bg dark:hover:bg-hover-bg text-text-muted transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-4">
                            <AddElement
                                initialData={editingProduct}
                                isEditMode={true}
                                onClose={() => setEditingProduct(null)}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
           
            {deletingItems && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-page-bg dark:bg-page-bg w-full max-w-md rounded-xl shadow-2xl overflow-hidden ring-1 ring-border-light dark:ring-border-light">
                        <div className="flex items-center justify-between p-4 border-b border-border-light dark:border-border-light">
                            <h2 className="text-lg font-bold text-text-black dark:text-text-black">Delete Product</h2>
                            <button
                                onClick={() => setDeletingItems(null)}
                                className="p-2 rounded-full hover:bg-hover-bg dark:hover:bg-hover-bg text-text-muted transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="p-6">
                            <p className="text-text-gray dark:text-text-gray mb-6">
                                Are you sure you want to delete this product? This action cannot be undone.
                            </p>
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setDeletingItems(null)}
                                    className="px-4 py-2 bg-page-bg dark:bg-page-bg border border-border-light dark:border-border-light rounded-lg text-sm font-medium hover:bg-hover-bg dark:hover:bg-hover-bg transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={confirmDelete}
                                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors"
                                >
                                    Yes, Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}