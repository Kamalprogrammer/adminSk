import { useForm, Controller } from 'react-hook-form';
import { Upload, Save, Globe, Info, Calendar, Type, Mail, Phone, MapPin, Hash, Facebook, Instagram, Linkedin, Twitter, Youtube, Github, Link, BarChart, Search, X } from 'lucide-react';
import { useState } from 'react';
import JoditEditor from 'jodit-react';

export default function CompaneyInfo() {
    const [filePreviews, setFilePreviews] = useState({
        logoLight: null,
        logoDark: null,
        favicon: null,
        ogImage: null
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
        control
    } = useForm({
        defaultValues: {
            privacyPolicy: '',
            termsConditions: '',
            cookiePolicy: ''
        }
    });

    const onSubmit = async (data) => {
        const formData = new FormData();

        // Manually append text fields from the data object
        Object.entries(data).forEach(([key, value]) => {
            if (typeof value !== 'object' || value === null) {
                formData.append(key, value || '');
            }
        });

        ['logoLight', 'logoDark', 'favicon', 'ogImage'].forEach(fieldName => {
            if (data[fieldName] && data[fieldName][0]) {
                formData.append(fieldName, data[fieldName][0]);
            }
        });

        // formData cannot be logged directly, so we convert it to an object for debugging
        console.log("Form Data (Multipart):", Object.fromEntries(formData));

        // Log keys and values individually to verify files
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        
    };

    const handleFileChange = (fieldName, event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFilePreviews(prev => ({
                    ...prev,
                    [fieldName]: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const removeFile = (fieldName) => {
        setFilePreviews(prev => ({ ...prev, [fieldName]: null }));
        setValue(fieldName, null);
    };

    // JoditEditor configuration - mobile gets text-only formatting
    const editorConfig = {
        toolbarAdaptive: true,

        // Desktop - full toolbar
        buttons: [
            'bold', 'italic', 'underline', '|',
            'fontsize', 'brush', 'paragraph', '|',
            'ul', 'ol', '|',
            'link', 'image', '|',
            'align', 'undo', 'redo'
        ],

        // Tablet - reduced toolbar
        buttonsMD: [
            'bold', 'italic', 'underline', '|',
            'fontsize', 'brush', 'paragraph', '|',
            'ul', 'ol', 'link'
        ],

        // Mobile - text formatting only
        buttonsSM: [
            'bold', 'italic', 'underline', '|',
            'fontsize', 'brush', 'paragraph'
        ],

        // Extra small - essential text formatting
        buttonsXS: [
            'bold', 'italic', 'underline', 'fontsize', 'brush'
        ],

        // Responsive height
        height: 300,
        minHeight: 200,

        // Mobile UX improvements
        toolbarSticky: false,
        showCharsCounter: false,
        showWordsCounter: false,
        showXPathInStatusbar: false,

        // Ensure text formatting options are available
        controls: {
            paragraph: {
                list: {
                    p: 'Normal',
                    h1: 'Heading 1',
                    h2: 'Heading 2',
                    h3: 'Heading 3',
                }
            },
            fontsize: {
                list: '8,9,10,11,12,14,16,18,24'
            }
        }
    };

    const SectionCard = ({ title, icon: Icon, children, className = "" }) => (
        <div className={`bg-white border border-border-light rounded-lg p-3 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300 ${className}`}>
            <div className="flex items-center gap-3 mb-6 border-b border-border-light pb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <Icon size={20} />
                </div>
                <h2 className="text-xl font-semibold text-text-black">{title}</h2>
            </div>
            <div className="flex-1 space-y-4">
                {children}
            </div>
        </div>
    );

    // ... existing InputField, TextAreaField, FileUpload, RichTextMock components ...

    const InputField = ({ label, name, type = "text", placeholder, icon: Icon, required = false, ...props }) => (
        <div className="space-y-1.5">
            <label className="text-sm font-medium text-text-gray block">{label} {required && <span className="text-red-500">*</span>}</label>
            <div className="relative">
                {Icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <Icon size={16} />
                    </div>
                )}
                <input
                    type={type}
                    {...register(name, { required: required ? `${label} is required` : false })}
                    placeholder={placeholder}
                    className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-2.5 bg-gray-50 border ${errors[name] ? 'border-red-500 focus:ring-red-200' : 'border-border-light focus:border-blue-500 focus:ring-blue-100'} rounded-lg text-text-black text-sm focus:outline-hidden focus:ring-4 transition-all duration-200`}
                    {...props}
                />
            </div>
            {errors[name] && <p className="text-xs text-red-500 mt-1">{errors[name].message}</p>}
        </div>
    );

    const TextAreaField = ({ label, name, placeholder, rows = 3, required = false }) => (
        <div className="space-y-1.5">
            <label className="text-sm font-medium text-text-gray block">{label} {required && <span className="text-red-500">*</span>}</label>
            <textarea
                {...register(name, { required: required ? `${label} is required` : false })}
                placeholder={placeholder}
                rows={rows}
                className={`w-full p-4 bg-gray-50 border ${errors[name] ? 'border-red-500' : 'border-border-light focus:border-blue-500 focus:ring-blue-100'} rounded-lg text-text-black text-sm focus:outline-hidden focus:ring-4 transition-all duration-200 resize-none`}
            />
            {errors[name] && <p className="text-xs text-red-500 mt-1">{errors[name].message}</p>}
        </div>
    );

    const FileUpload = ({ label, name }) => (
        <div className="space-y-1.5">
            <label className="text-sm font-medium text-text-gray block">{label}</label>
            {filePreviews[name] ? (
                <div className="relative border border-border-light rounded-lg p-3 sm:p-4 bg-gray-50">
                    <button
                        type="button"
                        onClick={() => removeFile(name)}
                        className="absolute top-1 right-1 sm:top-2 sm:right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors z-10"
                    >
                        <X size={12} className="sm:w-3.5 sm:h-3.5" />
                    </button>
                    <img src={filePreviews[name]} alt="Preview" className="w-full h-20 sm:h-24 object-contain" />
                    <p className="text-xs text-center text-text-muted mt-2">File selected</p>
                </div>
            ) : (
                <label className="border-2 border-dashed border-border-light hover:border-blue-400 rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center cursor-pointer bg-gray-50 transition-colors group min-h-[120px] sm:min-h-[140px]">
                    <div className="p-2 sm:p-3 bg-white rounded-full shadow-xs mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                        <Upload size={16} className="sm:w-5 sm:h-5 text-text-muted group-hover:text-blue-500" />
                    </div>
                    <p className="text-[10px] sm:text-xs text-text-muted text-center font-medium px-2">Click to upload</p>
                    <p className="text-[9px] sm:text-[10px] text-gray-400 mt-1">PNG, JPG (max 2MB)</p>
                    <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        {...register(name, {
                            onChange: (e) => handleFileChange(name, e)
                        })}
                    />
                </label>
            )}
        </div>
    );

    // const RichTextMock = ({ label }) => (
    //     <div className="space-y-1.5">
    //         <label className="text-sm font-medium text-text-gray block">{label}</label>
    //         <div className="border border-border-light rounded-lg overflow-hidden bg-white focus-within:ring-4 focus-within:ring-blue-100 focus-within:border-blue-500 transition-all">
    //             <div className="bg-gray-50 border-b border-border-light p-2 flex gap-2">
    //                 {['B', 'I', 'U', 'Link', 'List'].map((tool) => (
    //                     <button key={tool} type="button" className="px-2 py-1 text-xs font-semibold text-gray-600 hover:bg-gray-200 rounded-lg">
    //                         {tool}
    //                     </button>
    //                 ))}
    //             </div>
    //             <textarea
    //                 rows={6}
    //                 className="w-full p-4 text-sm text-text-black focus:outline-hidden resize-none"
    //                 placeholder="Write your content here..."
    //             />
    //         </div>
    //     </div>
    // );

    return (
        <div className="min-h-screen w-full bg-page-bg ">
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-6">

                {/* Header */}
                {/* Header */}
                <div className="mb-8 border-b border-border-light pb-6">
                    <h1 className="text-3xl font-bold text-text-black tracking-tight">Company Settings</h1>
                    {/* <p className="text-text-gray mt-1">Manage your organization's profile, branding, and configurations.</p> */}
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">


                    <SectionCard title="Basic Information" icon={Info} className="md:col-span-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField label="Company Name" name="companyName" placeholder="Acme Corp" required icon={Type} />
                            <InputField label="Website URL" name="website" placeholder="https://acme.com" icon={Globe} />
                        </div>
                        <InputField label="Tagline / Slogan" name="tagline" placeholder="Innovation matching your needs" />
                        <TextAreaField label="About Company" name="about" placeholder="Tell us about your organization..." rows={4} />
                    </SectionCard>

                    {/* 2. Branding (Span 1) */}
                    <SectionCard title="Branding & Identity" icon={Type} className="md:col-span-1">
                        <div className="space-y-4">
                            <FileUpload label="Company Logo" name="logoLight" />
                            <FileUpload label="Favicon" name="favicon" />
                        </div>
                    </SectionCard>


                    <SectionCard title="Contact Details" icon={Mail} className="md:col-span-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField label="Official Email" name="officialEmail" type="email" icon={Mail} />

                            <InputField label="Mobile Number" name="mobile" type="tel" icon={Phone} />
                        </div>
                        <TextAreaField label="Head Office Address" name="address" placeholder="123 Business Park..." />
                        <div className="grid grid-cols-2 gap-4">
                            <InputField label="City" name="city" placeholder="City" />
                            <InputField label="State" name="state" placeholder="State" />
                            <InputField label="Country" name="country" placeholder="Country" />
                            <InputField label="Pincode" name="pincode" placeholder="ZIP" icon={Hash} />
                        </div>
                    </SectionCard>


                    <SectionCard title="Social Media" icon={Globe} className="md:col-span-1">
                        <div className="space-y-3">
                            <InputField label="Facebook" name="facebook" placeholder="facebook.com/" icon={Facebook} />
                            <InputField label="Instagram" name="instagram" placeholder="instagram.com/" icon={Instagram} />
                            <InputField label="LinkedIn" name="linkedin" placeholder="linkedin.com/in/" icon={Linkedin} />
                            <InputField label="Twitter / X" name="twitter" placeholder="twitter.com/" icon={Twitter} />
                            <InputField label="YouTube" name="youtube" placeholder="youtube.com/" icon={Youtube} />
                        </div>
                    </SectionCard>

                    <SectionCard title="Legal & Policies" icon={Link} className="md:col-span-2">
                        <div className="space-y-6">
                            {/* Privacy Policy */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-text-gray block">Privacy Policy</label>
                                <Controller
                                    name="privacyPolicy"
                                    control={control}
                                    render={({ field }) => (
                                        <JoditEditor
                                            value={field.value}
                                            config={editorConfig}
                                            onBlur={(newContent) => field.onChange(newContent)}
                                            onChange={() => { }}
                                        />
                                    )}
                                />
                            </div>

                            {/* Terms & Conditions */}
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-text-gray block">Terms & Conditions</label>
                                <Controller
                                    name="termsConditions"
                                    control={control}
                                    render={({ field }) => (
                                        <JoditEditor
                                            value={field.value}
                                            config={editorConfig}
                                            onBlur={(newContent) => field.onChange(newContent)}
                                            onChange={() => { }}
                                        />
                                    )}
                                />
                            </div>

                            {/* Cookie Policy */}
                            <div className="space-y-1.5 ">
                                <label className="text-sm font-medium text-text-gray block">Cookie Policy</label>
                                <Controller
                                    name="cookiePolicy"
                                    control={control}
                                    render={({ field }) => (
                                        <JoditEditor
                                            value={field.value}
                                            config={editorConfig}
                                            onBlur={(newContent) => field.onChange(newContent)}
                                            onChange={() => { }}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </SectionCard>



                </div>

                {/* Footer Buttons */}
                <div className="flex justify-end gap-3 sm:gap-4 pt-6 mt-6 border-t border-border-light">
                    <button
                        type="button"
                        className="px-4 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base rounded-lg border border-border-light text-text-black font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-primary hover:bg-primary-dark text-white px-5 py-2 sm:px-8 sm:py-2.5 text-sm sm:text-base rounded-lg font-medium flex items-center gap-1.5 sm:gap-2 dark:shadow-none shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all disabled:opacity-70 cursor-pointer"
                    >
                        <Save size={16} className="sm:w-[18px] sm:h-[18px]" />
                        {isSubmitting ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
}