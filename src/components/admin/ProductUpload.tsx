
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, Plus, Check, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface ProductUploadProps {
  onProductAdded: () => void;
}

const ProductUpload: React.FC<ProductUploadProps> = ({ onProductAdded }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    category: 'cleansers',
    stock: '',
    featured: false,
    rating: '5',
    tags: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProductData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setProductData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files.length) return;
    
    const newImages = [...images];
    
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      const imageUrl = URL.createObjectURL(file);
      newImages.push(imageUrl);
    }
    
    setImages(newImages);
  };
  
  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (images.length === 0) {
      toast.error("Please upload at least one product image");
      return;
    }
    
    setIsUploading(true);
    
    // Simulate API call to add product
    setTimeout(() => {
      setIsUploading(false);
      toast.success("Product added successfully!");
      
      // Reset form
      setProductData({
        name: '',
        price: '',
        description: '',
        category: 'cleansers',
        stock: '',
        featured: false,
        rating: '5',
        tags: ''
      });
      setImages([]);
      
      // Notify parent component
      onProductAdded();
    }, 2000);
  };
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-medium mb-6">Add New Product</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Product Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={productData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-medium"
              placeholder="Enter product name"
            />
          </div>
          
          <div>
            <label htmlFor="price" className="block text-sm font-medium mb-2">
              Price (USD) *
            </label>
            <input
              id="price"
              name="price"
              type="number"
              required
              min="0"
              step="0.01"
              value={productData.price}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-medium"
              placeholder="0.00"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              value={productData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-medium"
              placeholder="Enter product description"
            />
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-2">
              Category *
            </label>
            <select
              id="category"
              name="category"
              required
              value={productData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-medium"
            >
              <option value="cleansers">Cleansers</option>
              <option value="serums">Serums</option>
              <option value="moisturizers">Moisturizers</option>
              <option value="masks">Masks</option>
              <option value="bundles">Bundles</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="stock" className="block text-sm font-medium mb-2">
              Stock Quantity *
            </label>
            <input
              id="stock"
              name="stock"
              type="number"
              required
              min="0"
              value={productData.stock}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-medium"
              placeholder="Enter stock quantity"
            />
          </div>
          
          <div>
            <label htmlFor="tags" className="block text-sm font-medium mb-2">
              Tags (comma separated)
            </label>
            <input
              id="tags"
              name="tags"
              type="text"
              value={productData.tags}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-medium"
              placeholder="natural, vegan, organic"
            />
          </div>
          
          <div>
            <label htmlFor="rating" className="block text-sm font-medium mb-2">
              Rating (1-5)
            </label>
            <input
              id="rating"
              name="rating"
              type="number"
              min="1"
              max="5"
              step="0.1"
              value={productData.rating}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-medium"
            />
          </div>
          
          <div className="flex items-center">
            <input
              id="featured"
              name="featured"
              type="checkbox"
              checked={productData.featured}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-gold-medium border-gray-300 rounded"
            />
            <label htmlFor="featured" className="ml-2 block text-sm">
              Featured Product
            </label>
          </div>
        </div>
        
        {/* Image Upload Section */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Product Images *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {/* Image Previews */}
            {images.map((image, index) => (
              <div key={index} className="relative aspect-square bg-gray-100 rounded-md overflow-hidden">
                <img src={image} alt={`Product image ${index + 1}`} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-red-50"
                >
                  <X size={16} className="text-red-500" />
                </button>
              </div>
            ))}
            
            {/* Upload Button */}
            <label className="cursor-pointer aspect-square bg-gray-50 border-2 border-dashed border-gray-200 rounded-md flex flex-col items-center justify-center hover:bg-gray-100 transition-colors">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
              <Upload size={24} className="text-gray-400 mb-2" />
              <span className="text-xs text-gray-500">Upload Images</span>
            </label>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Upload up to 5 images. First image will be used as the product thumbnail.
          </p>
        </div>
        
        <div className="pt-4 border-t border-gray-100">
          <button
            type="submit"
            disabled={isUploading}
            className="btn-primary bg-gold-medium hover:bg-gold-dark flex items-center justify-center"
          >
            {isUploading ? (
              <>
                <Loader2 size={18} className="mr-2 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Plus size={18} className="mr-2" />
                Add Product
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductUpload;
