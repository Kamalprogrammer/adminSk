import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ChevronDown, ChevronUp, Upload, Plus, X } from 'lucide-react';

export default function AddElement({ initialData = null, isEditMode = false, onClose }) {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            productName: '',
            category: '',
            brand: '',
            color: '',
            weight: '',
            length: '',
            width: '',
            description: '',
            priceWeight: '',
            priceLength: '',
            priceWidth: '',
            stockQuantity: 1,
            availabilityStatus: ''
        },
        mode: 'onBlur'
    });

    const [imageData, setImageData] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [imageError, setImageError] = useState('');
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (isEditMode && initialData) {
            // Reset form with initial data
            reset({
                productName: initialData.name,
                category: initialData.category,
                brand: initialData.brand,
                stockQuantity: 1,
                price: initialData.price
            });

            if (initialData.image) {
            }
        }
    }, [initialData, isEditMode, reset]);

    const [openDropdown, setOpenDropdown] = useState('');

    const stockQuantity = watch('stockQuantity');   
    const categoryOptions = ['Electronics', 'Clothing', 'Furniture', 'Food', 'Accessories'];
    const brandOptions = ['Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E'];
    const colorOptions = ['Red', 'Blue', 'Green', 'Black', 'White', 'Yellow', 'Orange'];
    const availabilityOptions = ['In Stock', 'Out of Stock', 'Pre-Order', 'Limited Stock'];

    const handleQuantityChange = (action) => {
        const currentValue = Number(stockQuantity) || 0;
        const newValue = action === 'increment'
            ? currentValue + 1
            : Math.max(0, currentValue - 1);
        setValue('stockQuantity', newValue, { shouldValidate: true });
    };

    const handleFileSelect = (files) => {
        const validFiles = Array.from(files).filter(file =>
            ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'].includes(file.type)
        );

        if (validFiles.length === 0 && files.length > 0) {
            setImageError('Please upload only SVG, PNG, JPG, or GIF files');
            return;
        }

        setImageError('');
        const newImageData = validFiles.map(file => ({
            file: file,
            preview: URL.createObjectURL(file),
            name: file.name
        }));
        setImageData(prev => [...prev, ...newImageData]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFileSelect(e.dataTransfer.files);
    };

    const handleFileInputChange = (e) => {
        handleFileSelect(e.target.files);
    };

    const removeImage = (index) => {
        URL.revokeObjectURL(imageData[index].preview);
        setImageData(prev => prev.filter((_, i) => i !== index));
    };

    const onSubmit = async (data, isDraft = false) => {
        try {
            const submissionData = {
                ...data,
                images: imageData.map(img => img.file),
                status: isDraft ? 'draft' : 'published'
            };

            console.log('Submitting Data:', submissionData);

            // TODO: Replace this with your actual API call
            // const response = await fetch(isEditMode ? `/api/products/${initialData.id}` : '/api/products', {
            //     method: isEditMode ? 'PUT' : 'POST',
            //     body: JSON.stringify(submissionData),
            //     headers: { 'Content-Type': 'application/json' }
            // });

            console.log('Submission Successful');

            if (onClose) {
                onClose();
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error (e.g., set form error)
        }
    };

    const handleDraftSubmit = () => {
        handleSubmit((data) => onSubmit(data, true))();
    };

    const handlePublishSubmit = () => {
        if (imageData.length === 0) {
            setImageError('Please upload at least one product image');
            return;
        }
        handleSubmit((data) => onSubmit(data, false))();
    };

    // Toggle dropdown icon on click
    const toggleDropdown = (name) => {
        setOpenDropdown(prev => prev === name ? '' : name);
    };

    // Reset dropdown icon on double click
    const resetDropdown = () => {
        setOpenDropdown('');
    };

    // Styles
    const inputBaseStyles = "w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-section-bg dark:bg-section-bg border rounded-md text-sm sm:text-base text-text-black dark:text-text-black placeholder:text-text-muted dark:placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary focus:border-transparent transition-all duration-200";

    const selectBaseStyles = "w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 pr-10 bg-section-bg dark:bg-section-bg border rounded-md text-sm sm:text-base text-text-black dark:text-text-black cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary focus:border-transparent transition-all duration-200";

    const labelStyles = "block text-xs sm:text-sm font-medium text-text-black dark:text-text-black mb-1.5 sm:mb-2";

    const errorStyles = "text-xs text-danger dark:text-danger mt-1";

    const getInputBorderClass = (fieldName) => {
        return errors[fieldName]
            ? 'border-danger dark:border-danger'
            : 'border-border-light dark:border-border-light';
    };

    return (
        <div className="w-full h-full bg-page-bg dark:bg-page-bg p-2 sm:p-4 md:p-6" >
            <form onSubmit={handleSubmit((data) => onSubmit(data, false))} className="w-full mx-auto space-y-4 sm:space-y-6">

                <div className="bg-section-bg dark:bg-section-bg rounded-lg border border-border-light dark:border-border-light shadow-sm">
                    <div className="p-3 sm:p-4 md:p-6 border-b border-border-light dark:border-border-light">
                        <h2 className="text-base sm:text-lg font-semibold text-text-black dark:text-text-black">Products Description</h2>
                    </div>

                    <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                            <div>
                                <label className={labelStyles}>
                                    Product Name <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    {...register('productName', {
                                        required: 'Product name is required',
                                        minLength: { value: 3, message: 'Product name must be at least 3 characters' },
                                        maxLength: { value: 100, message: 'Product name must not exceed 100 characters' }
                                    })}
                                    placeholder="Enter product name"
                                    className={`${inputBaseStyles} ${getInputBorderClass('productName')}`}
                                />
                                {errors.productName && <p className={errorStyles}>{errors.productName.message}</p>}
                            </div>

                            {/* Category Select */}
                            <div>
                                <label className={labelStyles}>
                                    Category <span className="text-danger">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        {...register('category', { required: 'Please select a category' })}
                                        onClick={() => toggleDropdown('category')}
                                        onDoubleClick={resetDropdown}
                                        className={`${selectBaseStyles} ${getInputBorderClass('category')}`}
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Clothing">Clothing</option>
                                        <option value="Furniture">Furniture</option>
                                        <option value="Accessories">Accessories</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        {openDropdown === 'category' ? (
                                            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-text-black dark:text-text-black transition-transform duration-200" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-text-black dark:text-text-black transition-transform duration-200" />
                                        )}
                                    </div>
                                </div>
                                {errors.category && <p className={errorStyles}>{errors.category.message}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                            {/* Brand Select */}
                            <div>
                                <label className={labelStyles}>
                                    Brand <span className="text-danger">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        {...register('brand', { required: 'Please select a brand' })}
                                        onClick={() => toggleDropdown('brand')}
                                        onDoubleClick={resetDropdown}
                                        className={`${selectBaseStyles} ${getInputBorderClass('brand')}`}
                                    >
                                        <option value="">Select Brand</option>
                                        <option value="Apple">Apple</option>
                                        <option value="Samsung">Samsung</option>
                                        <option value="Nike">Nike</option>
                                        <option value="Adidas">Adidas</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        {openDropdown === 'brand' ? (
                                            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-text-black dark:text-text-black transition-transform duration-200" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-text-black dark:text-text-black transition-transform duration-200" />
                                        )}
                                    </div>
                                </div>
                                {errors.brand && <p className={errorStyles}>{errors.brand.message}</p>}
                            </div>

                            {/* Color Select */}
                            <div>
                                <label className={labelStyles}>
                                    Color <span className="text-danger">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        {...register('color', { required: 'Please select a color' })}
                                        onClick={() => toggleDropdown('color')}
                                        onDoubleClick={resetDropdown}
                                        className={`${selectBaseStyles} ${getInputBorderClass('color')}`}
                                    >
                                        <option value="">Select color</option>
                                        <option value="Red">Red</option>
                                        <option value="Blue">Blue</option>
                                        <option value="Black">Black</option>
                                        <option value="White">White</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        {openDropdown === 'color' ? (
                                            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-text-black dark:text-text-black transition-transform duration-200" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-text-black dark:text-text-black transition-transform duration-200" />
                                        )}
                                    </div>
                                </div>
                                {errors.color && <p className={errorStyles}>{errors.color.message}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                            <div>
                                <label className={labelStyles}>
                                    Weight (kg) <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    {...register('weight', {
                                        required: 'Weight is required',
                                        min: { value: 0.01, message: 'Weight must be greater than 0' },
                                        max: { value: 10000, message: 'Weight must not exceed 10,000 kg' }
                                    })}
                                    placeholder="15"
                                    className={`${inputBaseStyles} ${getInputBorderClass('weight')}`}
                                />
                                {errors.weight && <p className={errorStyles}>{errors.weight.message}</p>}
                            </div>
                            <div>
                                <label className={labelStyles}>
                                    Length (cm) <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="number"
                                    step="0.1"
                                    {...register('length', {
                                        required: 'Length is required',
                                        min: { value: 0.1, message: 'Length must be greater than 0' },
                                        max: { value: 10000, message: 'Length must not exceed 10,000 cm' }
                                    })}
                                    placeholder="120"
                                    className={`${inputBaseStyles} ${getInputBorderClass('length')}`}
                                />
                                {errors.length && <p className={errorStyles}>{errors.length.message}</p>}
                            </div>
                            <div>
                                <label className={labelStyles}>
                                    Width (cm) <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="number"
                                    step="0.1"
                                    {...register('width', {
                                        required: 'Width is required',
                                        min: { value: 0.1, message: 'Width must be greater than 0' },
                                        max: { value: 10000, message: 'Width must not exceed 10,000 cm' }
                                    })}
                                    placeholder="23"
                                    className={`${inputBaseStyles} ${getInputBorderClass('width')}`}
                                />
                                {errors.width && <p className={errorStyles}>{errors.width.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label className={labelStyles}>Description</label>
                            <textarea
                                {...register('description', { maxLength: { value: 1000, message: 'Description must not exceed 1000 characters' } })}
                                placeholder="Receipt Info (optional)"
                                rows={4}
                                className={`${inputBaseStyles} ${getInputBorderClass('description')} resize-none`}
                            />
                            {errors.description && <p className={errorStyles}>{errors.description.message}</p>}
                        </div>
                    </div>
                </div>

                <div className="bg-section-bg dark:bg-section-bg rounded-lg border border-border-light dark:border-border-light shadow-sm">
                    <div className="p-3 sm:p-4 md:p-6 border-b border-border-light dark:border-border-light">
                        <h2 className="text-base sm:text-lg font-semibold text-text-black dark:text-text-black">Pricing & Availability</h2>
                    </div>

                    <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                            <div>
                                <label className={labelStyles}>
                                    Weight (kg) <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    {...register('priceWeight', {
                                        required: 'Price weight is required',
                                        min: { value: 0.01, message: 'Weight must be greater than 0' }
                                    })}
                                    placeholder="15"
                                    className={`${inputBaseStyles} ${getInputBorderClass('priceWeight')}`}
                                />
                                {errors.priceWeight && <p className={errorStyles}>{errors.priceWeight.message}</p>}
                            </div>
                            <div>
                                <label className={labelStyles}>
                                    Length (cm) <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="number"
                                    step="0.1"
                                    {...register('priceLength', {
                                        required: 'Price length is required',
                                        min: { value: 0.1, message: 'Length must be greater than 0' }
                                    })}
                                    placeholder="120"
                                    className={`${inputBaseStyles} ${getInputBorderClass('priceLength')}`}
                                />
                                {errors.priceLength && <p className={errorStyles}>{errors.priceLength.message}</p>}
                            </div>
                            <div>
                                <label className={labelStyles}>
                                    Width (cm) <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="number"
                                    step="0.1"
                                    {...register('priceWidth', {
                                        required: 'Price width is required',
                                        min: { value: 0.1, message: 'Width must be greater than 0' }
                                    })}
                                    placeholder="23"
                                    className={`${inputBaseStyles} ${getInputBorderClass('priceWidth')}`}
                                />
                                {errors.priceWidth && <p className={errorStyles}>{errors.priceWidth.message}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                            <div>
                                <label className={labelStyles}>
                                    Stock Quantity <span className="text-danger">*</span>
                                </label>
                                <div className={`flex items-center border rounded-md overflow-hidden bg-section-bg dark:bg-section-bg ${getInputBorderClass('stockQuantity')}`}>
                                    <button
                                        type="button"
                                        onClick={() => handleQuantityChange('decrement')}
                                        className="px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-section-bg dark:bg-section-bg hover:bg-hover-bg dark:hover:bg-hover-bg text-text-black dark:text-text-black font-medium text-sm sm:text-base transition-colors duration-200 border-r border-border-light dark:border-border-light"
                                    >
                                        −
                                    </button>
                                    <input
                                        type="number"
                                        {...register('stockQuantity', {
                                            required: 'Stock quantity is required',
                                            min: { value: 0, message: 'Stock quantity cannot be negative' },
                                            max: { value: 999999, message: 'Stock quantity is too high' }
                                        })}
                                        className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-section-bg dark:bg-section-bg text-text-black dark:text-text-black text-sm sm:text-base text-center focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleQuantityChange('increment')}
                                        className="px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-section-bg dark:bg-section-bg hover:bg-hover-bg dark:hover:bg-hover-bg text-text-black dark:text-text-black font-medium text-sm sm:text-base transition-colors duration-200 border-l border-border-light dark:border-border-light"
                                    >
                                        +
                                    </button>
                                </div>
                                {errors.stockQuantity && <p className={errorStyles}>{errors.stockQuantity.message}</p>}
                            </div>

                            {/* Availability Status Select */}
                            <div>
                                <label className={labelStyles}>
                                    Availability Status <span className="text-danger">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        {...register('availabilityStatus', { required: 'Please select availability status' })}
                                        onClick={() => toggleDropdown('availabilityStatus')}
                                        onDoubleClick={resetDropdown}
                                        className={`${selectBaseStyles} ${getInputBorderClass('availabilityStatus')}`}
                                    >
                                        <option value="">Select Availability</option>
                                        {availabilityOptions.map((option, idx) => (
                                            <option key={idx} value={option}>{option}</option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        {openDropdown === 'availabilityStatus' ? (
                                            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-text-black dark:text-text-black transition-transform duration-200" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-text-black dark:text-text-black transition-transform duration-200" />
                                        )}
                                    </div>
                                </div>
                                {errors.availabilityStatus && <p className={errorStyles}>{errors.availabilityStatus.message}</p>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-section-bg dark:bg-section-bg rounded-lg border border-border-light dark:border-border-light shadow-sm">
                    <div className="p-3 sm:p-4 md:p-6 border-b border-border-light dark:border-border-light">
                        <h2 className="text-base sm:text-lg font-semibold text-text-black dark:text-text-black">
                            Products Images <span className="text-danger">*</span>
                        </h2>
                    </div>

                    <div className="p-3 sm:p-4 md:p-6">
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            className={`relative border-2 border-dashed rounded-lg p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-200 min-h-[200px] sm:min-h-[250px] ${imageError
                                ? 'border-danger dark:border-danger'
                                : isDragging
                                    ? 'border-primary dark:border-primary bg-primary-light dark:bg-primary-light'
                                    : 'border-border-light dark:border-border-light hover:border-primary dark:hover:border-primary hover:bg-hover-bg dark:hover:bg-hover-bg'
                                }`}
                        >
                            <input
                                ref={fileInputRef}
                                type="file"
                                multiple
                                accept=".svg,.png,.jpg,.jpeg,.gif"
                                onChange={handleFileInputChange}
                                className="hidden"
                            />

                            {imageData.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full space-y-2 sm:space-y-3">
                                    <div className="p-2 sm:p-3 bg-hover-bg dark:bg-hover-bg rounded-lg">
                                        <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-text-black dark:text-text-black" />
                                    </div>
                                    <div className="text-center space-y-1">
                                        <p className="text-xs sm:text-sm">
                                            <span className="text-primary dark:text-primary font-semibold">Click to upload</span>
                                            <span className="text-text-gray dark:text-text-gray"> or drag and drop SVG,</span>
                                        </p>
                                        <p className="text-xs sm:text-sm text-text-gray dark:text-text-gray">PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                                        {imageData.map((img, index) => (
                                            <div key={index} className="relative group">
                                                <div className="aspect-square rounded-lg overflow-hidden border border-border-light dark:border-border-light bg-hover-bg dark:bg-hover-bg">
                                                    <img src={img.preview} alt={img.name} className="w-full h-full object-cover" />
                                                </div>
                                                <p className="mt-1.5 text-xs text-text-gray dark:text-text-gray truncate text-center" title={img.name}>
                                                    {img.name}
                                                </p>
                                                <button
                                                    type="button"
                                                    onClick={(e) => { e.stopPropagation(); removeImage(index); }}
                                                    className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-danger dark:bg-danger text-text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
                                                >
                                                    <X className="w-3 h-3 sm:w-4 sm:h-4" />
                                                </button>
                                            </div>
                                        ))}
                                        <div className="aspect-square rounded-lg border-2 border-dashed border-border-light dark:border-border-light hover:border-primary dark:hover:border-primary flex flex-col items-center justify-center cursor-pointer transition-colors duration-200 bg-hover-bg/50 dark:bg-hover-bg/50">
                                            <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-text-black dark:text-text-black" />
                                            <span className="text-xs text-text-gray dark:text-text-gray mt-1">Add More</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-text-muted dark:text-text-muted text-center">
                                        {imageData.length} image{imageData.length !== 1 ? 's' : ''} selected • Click or drag to add more
                                    </p>
                                </div>
                            )}
                        </div>
                        {imageError && <p className={`${errorStyles} mt-2`}>{imageError}</p>}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 md:gap-4">
                    <button
                        type="button"
                        onClick={handleDraftSubmit}
                        disabled={isSubmitting}
                        className="px-4 sm:px-6 py-2 sm:py-2.5 md:py-3 bg-section-bg dark:bg-section-bg border border-border-light dark:border-border-light rounded-md text-text-black dark:text-text-black font-medium text-sm sm:text-base hover:bg-hover-bg dark:hover:bg-hover-bg transition-colors duration-200 order-2 sm:order-1 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Saving...' : 'Draft'}
                    </button>
                    <button
                        type="button"
                        onClick={handlePublishSubmit}
                        disabled={isSubmitting}
                        className="px-4 sm:px-6 py-2 sm:py-2.5 md:py-3 bg-primary dark:bg-primary hover:bg-primary-dark dark:hover:bg-primary-dark text-text-white rounded-md font-medium text-sm sm:text-base transition-colors duration-200 order-1 sm:order-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Publishing...' : 'Publish Product'}
                    </button>
                </div>
            </form>
        </div >
    );
}